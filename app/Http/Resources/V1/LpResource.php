<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LpResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'title1'=>$this->title1,
            'title2'=>$this->title2,
            'title3'=>$this->title3,
            'img1'=>$this->img1,
            'img2'=>$this->img2,
            'img3'=>$this->img3,
            'faq1'=>$this->faq1,
            'faq2'=>$this->faq2,
            'faq3'=>$this->faq3,
            'faq4'=>$this->faq4,
            'faq5'=>$this->faq5,
            'ans1'=>$this->ans1,
            'ans2'=>$this->ans2,
            'ans3'=>$this->ans3,
            'ans4'=>$this->ans4,
            'ans5'=>$this->ans5,
            'slug'=>$this->slug,
            'benefits'=>$this->benefits,
            'benefits2'=>$this->benefits2,
        ];    
    }
}
