<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PackageResource extends JsonResource
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
            'category'=>$this->category,
            'tier'=>$this->tier,
            'features'=>$this->features,
            'price'=>$this->price,
            'service'=>ServiceResource::collection($this->whenLoaded('service')),
        ];    
    }
}
