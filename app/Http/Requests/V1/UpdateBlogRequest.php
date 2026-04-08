<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBlogRequest extends FormRequest
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
            'title' => ['sometimes', 'required'],
            'slug'=>'sometimes',
            'category'=>'sometimes',
            'sub_category'=>'sometimes',
            'body' => ['sometimes', 'required'],
            'thumbnail' => ['sometimes', 'image', 'mimes:jpeg,png,jpg,gif,webp', 'max:4096'],
            'meta_description' => 'sometimes',
        ];
    }
}
