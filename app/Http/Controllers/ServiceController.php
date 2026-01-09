<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;


class ServiceController extends Controller
{
    public function service(Service $slug)
    {
        $services = Service::all();
        $moreServices = Service::inRandomOrder()->limit(3)->get();
        return view('Services.service', compact('slug','services','moreServices'));
    }
    public function index()
    {
        $services = Service::all();
        return view('Services.index', compact('services'));
    }
    public
}
