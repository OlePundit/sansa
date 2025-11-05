<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\V1\PackageCollection;
use App\Models\Package;
use App\Models\Service;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $query = Package::query();

        $webs = $request->query('webs');
        $digitals = $request->query('digitals');
        $services = Service::all(); // include services from your other function

        if ($webs) {
            $packages = $query->where('category', 'web design')->paginate();
        } elseif ($digitals) {
            $packages = $query->where('category', 'digital marketing')->paginate();
        } else {
            $packages = $query->paginate();
        }

        // Include services in the response
        return response()->json([
            'packages' => new PackageCollection($packages),
            'services' => $services
        ]);
    }

}
