<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\V1\ServiceCollection;
use App\Models\Service;

class AboutController extends Controller
{
    public function index(Request $request)
    {
        $services = Service::all();

        return response()->json([
            'services' => $services
        ]);
    }
}
