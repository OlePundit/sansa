<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\V1\LpResource;
use App\Models\LP;

class LpController extends Controller
{
    public function show(LP $lp)
    {
        return new LpResource($lp);
    }
}
