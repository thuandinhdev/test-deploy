<?php

namespace Modules\ProjectAttachment\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class CreateProjectAttachmentRequest
 *
 * The Validation Rules is Defined for Project Attachment.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\ProjectAttachment
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateProjectAttachmentRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'project_id' => 'required',
            'file_name' => 'required|max:' . config('core.max_length'),
            'file' => 'required',
            'file_extension' => 'required',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
