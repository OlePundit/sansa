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
        $designs = LP::where('category','web design')->first();

        return view('LP.webdesign', compact('webs','designs','services'));
    }

    public function digitalmarketing(){
        $services = Service::all();
        $digitals = LP::where('category','digital training')->first();

        return view('LP.digitalmarketing', compact('digital','services'));
    }

    public function IT(){
        $services = Service::all();
        $its = LP::where('category','IT')->first();

        return view('LP.IT', compact('its','services'));
    }
}
