<?php

namespace Modules\Invoice\Repositories;

use Auth;
use Illuminate\Support\Facades\DB;
use Modules\Estimate\Entities\Estimate;
use Modules\Helper\Helpers\CommonHelper;
use Modules\Helper\Helpers\EmailsHelper;
use Modules\Invoice\Entities\Invoice;
use Modules\Invoice\Entities\InvoiceItem;
use Modules\Invoice\Entities\InvoiceSetting;
use Modules\Payment\Entities\PaymentMethod;
use Modules\Setting\Entities\Setting;
use Modules\Tax\Entities\Tax;
use Modules\User\Entities\User\User;
use Modules\User\Repositories\UserRepository;

/**
 * Class InvoiceRepository
 *
 * Invoice CRUD functionality
 *
 * Invoice create, update, delete and view
 *
 * PHP version 8.0
 *
 * @category  Sales
 * @package   Modules\Invoice
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class InvoiceRepository
{
    protected $emailsHelper;
    protected $commonHelper;

    /**
     * Instantiate a new helper instance.
     *
     * @param EmailsHelper $emailsHelper [Object]
     * @param CommonHelper $commonHelper [Object]
     *
     * @return void
     */
    public function __construct(EmailsHelper $emailsHelper, CommonHelper $commonHelper)
    {
        $this->emailsHelper = $emailsHelper;
        $this->commonHelper = $commonHelper;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Object
     */
    public function findAll()
    {
        return Invoice::All();
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get invoice]
     *
     * @return Object
     */
    public function getAllInvoices($request)
    {
        $user = Auth::user();
        $invoices_table = config('core.acl.invoices_table');
        $user_table = config('core.acl.users_table');

        $columns = array(
            0 => $invoices_table . '.invoice_number',
            1 => $user_table . '.firstname',
            2 => $invoices_table . '.invoice_date',
            3 => $invoices_table . '.due_date',
            4 => $invoices_table . '.total_amount',
            5 => $invoices_table . '.status',
        );

        $input = $request->input();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        $invoices = Invoice::select(
            $invoices_table . '.*',
            $user_table . '.firstname as client_firstname',
            $user_table . '.lastname as client_lastname',
            $user_table . '.avatar as client_avatar'
        )
            ->leftjoin($user_table, $user_table . '.id', '=', $invoices_table . '.client_id');

        if ($user->is_client) {
            $invoices->where($invoices_table . '.client_id', $user->id);
        } elseif (!$user->hasRole('admin') && !$user->is_super_admin) {
            $invoices->where($invoices_table . '.user_id', $user->id);
        }

        $totalData = $invoices->count();
        $totalFiltered = $totalData;

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');

            $invoices = $invoices->where(
                function ($query) use ($search, $invoices_table, $user_table) {
                    $query->where($invoices_table . '.invoice_number', 'LIKE', "%{$search}%")
                        ->orWhere($invoices_table . '.invoice_date', 'LIKE', "%{$search}%")
                        ->orWhere($invoices_table . '.due_date', 'LIKE', "%{$search}%")
                        ->orWhere($invoices_table . '.total_amount', 'LIKE', "%{$search}%")
                        ->orWhere($invoices_table . '.status', 'LIKE', "%{$search}%")
                        ->orWhere(DB::raw('concat(' . $user_table . '.firstname," ",' . $user_table . '.lastname)'), 'LIKE', "%{$search}%");
                }
            );

            $totalFiltered = $invoices->count();
        }

        $data = $invoices->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'asc' ? 'asc' : 'desc')
            ->get();

        $settings = Setting::Currency()->first();

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $data,
            "settings" => $settings,
        );
    }

    /**
     * Retrive particular resource.
     *
     * @param Int $id [Row id]
     *
     * @return Object
     */
    public function findById($id)
    {
        return Invoice::with('user', 'client', 'items.taxes', 'payments', 'project')->findOrFail($id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request [Request for create invoice]
     *
     * @return Boolean
     */
    public function create($request)
    {
        $subTotal = 0;
        $totalTax = 0;
        $totalDiscount = 0;
        $totalAmount = 0;
        $input = $request->all();
        $user = Auth::user();
        $invoice = new Invoice;
        $input['user_id'] = $user->id;
        $input['invoice_number'] = $this->getInvoiceNumber();
        $invoice = $invoice->create($input);
        if ($invoice) {
            $items = $input['items'];
            foreach ($items as $key => $value) {
                $value['total_item_amount'] = $value['unit_price'] * $value['quantity'];
                $invoiceItem = $invoice->items()->create($value);
                $subTotal += $value['total_item_amount'];

                if (isset($value['taxes'])) {
                    foreach ($value['taxes'] as $key1 => $value1) {
                        $tax = Tax::findOrFail($value1);
                        $item_tax = ($invoiceItem->total_item_amount * $tax->tax_rate / 100);
                        $invoiceItem->taxes()->attach($value1, ['item_tax' => $item_tax]);
                        $totalTax += $item_tax;
                    }
                }
            }

            if (isset($input['discount_type'])) {
                if ($input['discount_type'] == 'percent') {
                    $totalDiscount = (($subTotal + $totalTax) * $input['discount']) / 100;
                } elseif ($input['discount_type'] == 'fixed') {
                    $totalDiscount = $input['discount'];
                }
            }

            $totalAmount = $subTotal + $totalTax + $input['adjustment'] - $totalDiscount;

            $invoice->sub_total = $subTotal;
            $invoice->total_tax = $totalTax;
            $invoice->total_discount = $totalDiscount;
            $invoice->total_amount = $totalAmount;
            $invoice->total_due_amount = $totalAmount;
            $invoice->save();

            // Sent invoice to customer.
            $invoiceData = Invoice::with('client', 'items.taxes', 'payments')->find($invoice->id);
            $this->emailsHelper->sendInvoiceEmail($invoiceData);

            // Add Notification.
            $admins = UserRepository::getAdminUsers();
            createNotification($admins, 'invoices', $invoice->id, 'Invoice Created.', "#" . $invoice->invoice_number);
            createNotification([$invoice->client], 'invoices', $invoice->id, 'Invoice Created.', "#" . $invoice->invoice_number);

            // --
            // Add activities
            createUserActivity(
                Invoice::MODULE_NAME,
                $invoice->id,
                $request->method(),
                $invoice->invoice_number,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Convert estimate to invoice on estimate accept.
     *
     * @param Object $estimate [Estimate object]
     *
     * @return boolean
     */
    public function convretEstimateToInvoice($estimate)
    {
        $invoiceSetting = InvoiceSetting::first();
        $invoice = new Invoice;
        $input['user_id'] = $estimate->user_id;
        $input['client_id'] = $estimate->client_id;
        $input['estimate_id'] = $estimate->id;
        $input['invoice_number'] = $this->getInvoiceNumber();
        $input['invoice_date'] = date('Y-m-d');
        $input['due_date'] = date('Y-m-d', strtotime('+' . $invoiceSetting->due_after . ' days'));
        $input['sub_total'] = $estimate->sub_total;
        $input['total_tax'] = $estimate->total_tax;
        $input['discount_type'] = $estimate->discount_type;
        $input['discount'] = $estimate->discount;
        $input['total_discount'] = $estimate->total_discount;
        $input['adjustment'] = $estimate->adjustment;
        $input['total_amount'] = $estimate->total_amount;
        $input['total_due_amount'] = $estimate->total_amount;
        $input['reference'] = $estimate->reference;
        $input['note'] = $estimate->note;
        $invoice = $invoice->create($input);
        if ($invoice) {
            foreach ($estimate->items as $key => $value) {
                $invoiceItem = $invoice->items()->create(
                    [
                        "invoice_id" => $invoice->id,
                        "item_name" => $value->item_name,
                        "item_description" => $value->item_description,
                        "item_unit" => $value->item_unit,
                        "unit_price" => $value->unit_price,
                        "quantity" => $value->quantity,
                        "total_item_amount" => $value->total_item_amount,
                    ]
                );

                foreach ($value->taxes as $key1 => $value1) {
                    $invoiceItem->taxes()->attach($value1, ['item_tax' => $value1->pivot->item_tax]);
                }
            }

            // Sent invoice to customer.
            $invoiceData = Invoice::with('client', 'items.taxes', 'payments')->find($invoice->id);
            $this->emailsHelper->sendInvoiceEmail($invoiceData);

            // Add Notification.
            $admins = UserRepository::getAdminUsers();
            createNotification($admins, 'invoices', $invoice->id, 'Invoice Created.', "#" . $invoice->invoice_number);
            createNotification([$invoice->client], 'invoices', $invoice->id, 'Invoice Created.', "#" . $invoice->invoice_number);

            // Update estimate.
            Estimate::where('id', $estimate->id)->update(['invoice_id' => $invoice->id]);

            return true;
        }
        return false;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update invoice]
     * @param Int     $id      [Row id]
     *
     * @return Object
     */
    public function update($request, $id)
    {
        $subTotal = 0;
        $totalTax = 0;
        $totalDiscount = 0;
        $totalAmount = 0;
        $invoice = Invoice::findOrFail($id);
        $input = $request->all();
        $paidAmount = $invoice->total_amount - $invoice->total_due_amount;

        if ($invoice->update($input)) {
            // Delete invoice item.
            InvoiceItem::where('invoice_id', $invoice->id)->delete();

            $items = $input['items'];
            foreach ($items as $key => $value) {
                $value['total_item_amount'] = $value['unit_price'] * $value['quantity'];
                $invoiceItem = $invoice->items()->create($value);
                $subTotal += $value['total_item_amount'];

                if (isset($value['taxes'])) {
                    foreach ($value['taxes'] as $key1 => $value1) {
                        $tax = Tax::findOrFail($value1);
                        $item_tax = ($invoiceItem->total_item_amount * $tax->tax_rate / 100);
                        $invoiceItem->taxes()->attach($value1, ['item_tax' => $item_tax]);
                        $totalTax += $item_tax;
                    }
                }
            }

            if (isset($input['discount_type'])) {
                if ($input['discount_type'] == 'percent') {
                    $totalDiscount = (($subTotal + $totalTax) * $input['discount']) / 100;
                } elseif ($input['discount_type'] == 'fixed') {
                    $totalDiscount = $input['discount'];
                }
            }

            $totalAmount = $subTotal + $totalTax + $input['adjustment'] - $totalDiscount;
            $totalDueAmount = $totalAmount - $paidAmount;

            $invoice->sub_total = $subTotal;
            $invoice->total_tax = $totalTax;
            $invoice->total_discount = $totalDiscount;
            $invoice->total_amount = $totalAmount;
            $invoice->total_due_amount = $totalDueAmount;
            if ($totalDueAmount <= 0) {
                $invoice->status = 'paid';
            } elseif ($totalDueAmount < $totalAmount) {
                $invoice->status = 'partially_paid';
            } else {
                $invoice->status = 'unpaid';
            }
            $invoice->save();

            // Sent invoice to customer.
            $invoiceData = Invoice::with('client', 'items.taxes', 'payments')->find($invoice->id);
            $this->emailsHelper->sendInvoiceEmail($invoiceData);

            // Add Notification.
            $admins = UserRepository::getAdminUsers();
            createNotification($admins, 'invoices', $invoice->id, 'Invoice Updated.', "#" . $invoice->invoice_number);
            createNotification([$invoice->client], 'invoices', $invoice->id, 'Invoice Updated.', "#" . $invoice->invoice_number);

            // --
            // Add activities
            createUserActivity(
                Invoice::MODULE_NAME,
                $invoice->id,
                $request->method(),
                $invoice->invoice_number,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for delete invoice]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function delete($request, $id)
    {
        $invoice = Invoice::findOrFail($id);
        if ($invoice->delete()) {
            // --
            // Add activities
            createUserActivity(
                Invoice::MODULE_NAME,
                $invoice->id,
                $request->method(),
                $invoice->invoice_number,
                $request->ip()
            );

            return true;
        }
        return false;
    }

    /**
     * Change invoice status.
     *
     * @param Request $request [Request for change invoice status]
     * @param Int     $id      [Row id]
     *
     * @return Object
     */
    public function changeInvoiceStatus($request, $id)
    {
        $invoice = Invoice::findOrFail($id);
        if ($invoice) {
            $input['status'] = $request->get('status');
            if ($invoice->update($input)) {
                // --
                // Add activities
                createUserActivity(
                    Invoice::MODULE_NAME,
                    $invoice->id,
                    $request->method(),
                    $invoice->invoice_number,
                    $request->ip(),
                    $invoice->id,
                    true
                );
            }

            return true;
        }
        return false;
    }

    /**
     * Download invoice PDF.
     *
     * @param Int $id [Row id]
     *
     * @return Response
     */
    public function download($id)
    {
        $invoice = Invoice::with('client', 'items.taxes', 'payments')->findOrFail($id);
        $currency = Setting::Currency()->first();
        $setting = Setting::select('company_name', 'company_address', 'company_phone', 'php_date_format', 'php_date_time_format')->first();
        $invoiceSetting = InvoiceSetting::first();
        $paymentMethods = PaymentMethod::where('status', 1)->where('show_on_pdf', 1)->get();

        \View::addLocation(base_path() . '/Modules/Invoice/Resources/views');
        $pdf = \PDF::loadView('invoice-1', compact('invoice', 'currency', 'setting', 'invoiceSetting', 'paymentMethods'));
        return $pdf->download($invoice->invoice_number . '.pdf');
    }

    /**
     * Check invoice permission.
     *
     * @param Int $id       [Row id]
     * @param Int $clientId [User/Client id]
     *
     * @return Response
     */
    public function checkPermission($id, $clientId)
    {
        $invoice = Invoice::where('id', $id)
            ->where('client_id', $clientId)
            ->exists();

        if ($invoice) {
            return true;
        } else {

            $user = User::findOrFail($clientId);
            if ($user->hasRole('admin') || $user->is_super_admin) {
                return true;
            }

            return false;
        }
    }

    /**
     * Retrive generated id.
     *
     * @return String
     */
    public function getInvoiceNumber()
    {
        $invoice_prefix = InvoiceSetting::pluck('invoice_prefix')->first();
        return $invoice_prefix . str_pad(nextAutoID(config('core.acl.invoices_table')), 6, "0", STR_PAD_LEFT);
    }

    /**
     * Get data for the sales report.
     *
     * @param Request $request [Request for get sales report]
     *
     * @return Array
     */
    public function getSalesReport($request)
    {
        $user = Auth::user();
        $invoices_table = config('core.acl.invoices_table');
        $user_table = config('core.acl.users_table');

        $columns = array(
            0 => $invoices_table . '.invoice_number',
            1 => DB::raw("CONCAT($user_table.firstname,' ',$user_table.lastname)"),
            2 => $invoices_table . '.invoice_date',
            3 => $invoices_table . '.due_date',
            4 => $invoices_table . '.total_amount',
            5 => $invoices_table . '.total_due_amount',
            6 => $invoices_table . '.status',
        );

        $input = $request->input();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');
        $columns_search = $request->input('columns');

        $invoices = Invoice::select(
            $invoices_table . '.*',
            $user_table . '.firstname as client_firstname',
            $user_table . '.lastname as client_lastname'
        )
            ->leftjoin($user_table, $user_table . '.id', '=', $invoices_table . '.client_id');

        if ($user->is_client) {
            $invoices->where($invoices_table . '.client_id', $user->id);
        } elseif (!$user->hasRole('admin') && !$user->is_super_admin) {
            $invoices->where($invoices_table . '.user_id', $user->id);
        }

        // Filter.
        if ($request->has('range') && !empty($request->input('range'))) {
            $range = $request->input('range');
            if ($range == 'today') {
                $filter_period = $this->commonHelper->getToday();
            } elseif ($range == 'this_month') {
                $filter_period = $this->commonHelper->getThisMonth();
            } elseif ($range == 'last_month') {
                $filter_period = $this->commonHelper->getLastMonth();
            } elseif ($range == 'this_week') {
                $filter_period = $this->commonHelper->getThisWeek();
            } elseif ($range == 'last_week') {
                $filter_period = $this->commonHelper->getLastWeek();
            } elseif ($range == 'period') {
                $filter_period = $this->commonHelper->convertPeriod($request->input('period_from'), $request->input('period_to'));
            }

            $invoices = $invoices->whereBetween($invoices_table . '.invoice_date', [$filter_period['period_from'], $filter_period['period_to']]);
        }

        if ($request->has('is_overdue') && $request->input('is_overdue')) {
            $invoices = $invoices->whereDate($invoices_table . '.due_date', '<', date('Y-m-d'))
                ->whereNotIn($invoices_table . '.status', ['paid']);
        }

        if ($request->has('status') && !empty($request->input('status'))) {
            $status = $request->input('status');
            if ($request->has('is_overdue') && $request->input('is_overdue')) {
                if (($key = array_search('paid', $status)) !== false) {
                    unset($status[$key]);
                }
            }
            $invoices = $invoices->whereIn($invoices_table . '.status', $status);
        }

        $totalData = $invoices->count();

        $matchThese = [];
        foreach ((array) $columns_search as $key => $value) {
            if (!empty($value['search']['value'])) {
                array_push(
                    $matchThese,
                    [$columns[$key], 'LIKE', "%{$value['search']['value']}%"]
                );
            }
        }

        if (!empty($matchThese)) {
            $invoices = $invoices->where($matchThese);
        }

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');

            $invoices = $invoices->where(
                function ($query) use ($search, $invoices_table, $user_table) {
                    $query->where($invoices_table . '.invoice_number', 'LIKE', "%{$search}%")
                        ->orWhere($invoices_table . '.invoice_date', 'LIKE', "%{$search}%")
                        ->orWhere($invoices_table . '.due_date', 'LIKE', "%{$search}%")
                        ->orWhere($invoices_table . '.total_amount', 'LIKE', "%{$search}%")
                        ->orWhere($invoices_table . '.total_due_amount', 'LIKE', "%{$search}%")
                        ->orWhere($invoices_table . '.status', 'LIKE', "%{$search}%")
                        ->orWhere(DB::raw('concat(' . $user_table . '.firstname," ",' . $user_table . '.lastname)'), 'LIKE', "%{$search}%");
                }
            );
        }

        $totalFiltered = $invoices->count();

        $invoices = $invoices->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'desc' ? 'desc' : 'asc')
            ->get();

        $total['total_amount'] = array_sum(array_column($invoices->toArray(), 'total_amount'));
        $total['total_due_amount'] = array_sum(array_column($invoices->toArray(), 'total_due_amount'));

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $invoices,
            "total" => $total,
        );
    }
}
