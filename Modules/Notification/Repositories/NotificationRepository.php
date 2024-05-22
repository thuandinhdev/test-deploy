<?php

namespace Modules\Notification\Repositories;

use Modules\Notification\Entities\Notification;

/**
 * Class NotificationRepository
 *
 * Notification create, update, delete and view.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Notification
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2022 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.2@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.2
 */
class NotificationRepository
{
    /**
     * Get notification.
     *
     * @param Request $request [Params for get notification]
     *
     * @return Object
     */
    public function getNotifications($request)
    {
        $data = Notification::where('user_id', auth()->user()->id)->orderBy('id', 'desc');

        if ($request->has('length')) {
            $data = $data->take($request->get('length'));
        }

        return $data->get();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for delete notification]
     *
     * @return Boolen
     */
    public function delete($request)
    {
        Notification::where('id', $request->get('id'))->delete();
        return true;
    }
}
