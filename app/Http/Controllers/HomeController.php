<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Newsletter;

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
        $webs = Package::where('category','web design')->get();
        $digital = Package::where('category','digital marketing')->get();
        return view('home',compact('services','webs','digital'));
    }
    public function about()
    {
        $services = Service::all();

        return view('About.about', compact('services'));
    }
    public function newsletter()
    {
        $data = request()->validate([
            'email'=>'required'
        ]);

        $newsletter = Newsletter::create([
            'email'=> $data['email']
        ]);

        $newsletter->save();

        return redirect()->back();
    }
    public function contact()
    {
        $services = Service::all();

        return view('Contact.contact',compact('services'));
    }
}
