<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Package;

class LPController extends Controller
{
    public function webdesign(){
        $webs = Package::where('category','web design')->get();
        $services = Service::all();

        return view('LP.webdesign', compact('webs','services'));
    }
}
