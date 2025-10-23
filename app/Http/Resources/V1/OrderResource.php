<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'payment_id'=>$this->payment_id,
            'name'=>$this->name,
            'category'=>$this->category,
            'tier'=>$this->tier,
            'amount'=>$this->amount,
            'email'=>$this->email,
            'phone'=>$this->phone,
            'currency'=>$this->currency,
        ];    
    }
}
