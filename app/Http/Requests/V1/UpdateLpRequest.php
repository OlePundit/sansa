<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLpRequest extends FormRequest
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
            'title' => 'sometimes',
            'title1'=>'sometimes',  
            'title2' => 'sometimes',
            'title3' => 'sometimes',   
            'img1' => 'sometimes',   
            'img2' => 'sometimes',               
            'img3' => 'sometimes',               
            'faq1' => 'sometimes',   
            'faq2' => 'sometimes',   
            'faq3' => 'sometimes',   
            'faq4' => 'sometimes',   
            'faq5' => 'sometimes',   
            'ans1' => 'sometimes',   
            'ans2' => 'sometimes',   
            'ans3' => 'sometimes',   
            'ans4' => 'sometimes',   
            'ans5' => 'sometimes',   
            'slug' => 'sometimes',   
            'benefits' => 'sometimes',   
            'benefits2' => 'sometimes',  
        ];
    }
}
