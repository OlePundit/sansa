<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Package;
use App\Models\Service;
use App\Models\LP;

class LPController extends Controller
{
    public function webdesign(){
        $webs = Package::where('category','web design')->get();
        $services = Service::all();

        return view('LP.webdesign', compact('webs','services'));
    }
}
