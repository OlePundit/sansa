<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'sometimes',
            'slug' => 'sometimes|nullable',
            'body' => 'sometimes',
            'thumbnail' => 'sometimes|image|mimes:jpeg,png,jpg,gif,webp|max:4096',
            'category' => 'sometimes|nullable',
            'sub_category' => 'sometimes|nullable',
            'meta_description' => 'sometimes|nullable',
        ];
    }
}
