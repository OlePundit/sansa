<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class StoreLpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => '',
            'title1'=>'',  
            'title2' => '',
            'title3' => '',   
            'img1' => '',   
            'img2' => '',               
            'img3' => '',               
            'faq1' => '',   
            'faq2' => '',   
            'faq3' => '',   
            'faq4' => '',   
            'faq5' => '',   
            'ans1' => '',   
            'ans2' => '',   
            'ans3' => '',   
            'ans4' => '',   
            'ans5' => '',   
            'slug' => '',   
            'benefits' => '',   
            'benefits2' => '',   
        ];
    }
}
