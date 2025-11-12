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
        $services = Service::all();

        if ($webs) {
            $packages = $query->where('category', 'web design')->paginate();
        } elseif ($digitals) {
            $packages = $query->where('category', 'digital marketing')->paginate();
        } else {
            $packages = $query->paginate();
        }

        // Separate packages by category
        $allPackages = $packages->getCollection();
        $webPackages = $allPackages->where('category', 'web design')->values();
        $digitalPackages = $allPackages->where('category', 'digital marketing')->values();

        return response()->json([
            'webs' => $webPackages,
            'digitals' => $digitalPackages,
            'services' => $services,
            'meta' => [
                'current_page' => $packages->currentPage(),
                'last_page' => $packages->lastPage(),
                'per_page' => $packages->perPage(),
                'total' => $packages->total(),
            ]
        ]);
    }
}
