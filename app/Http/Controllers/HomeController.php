<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $services = Service::all();
        return view('home',compact('services'));
    }
    public function about()
    {
        $services = Service::all();

        return view('About.about', compact('services'));
    }
    public function contact()
    {
        $services = Service::all();

        return view('Contact.contact',compact('services'));
    }
}
