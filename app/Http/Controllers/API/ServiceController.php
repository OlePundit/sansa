<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\V1\ServiceResource;
use App\Models\Service;

class ServiceController extends Controller
{
    public function show(Service $service)
    {
        return new ServiceResource($service);
    }
    public function index()
    {
        $services = Service::all();
        return ServiceResource::collection($services);
    }   
}
