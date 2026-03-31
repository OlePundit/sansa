<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\V1\LpResource;
use App\Http\Resources\V1\LpCollection;
use App\Http\Requests\V1\StoreLpRequest;
use App\Http\Requests\V1\UpdateLpRequest;
use App\Models\LP;

class LpController extends Controller
{
    public function index(Request $request)
    {
        $lps = LP::paginate();

        return LpResource::collection($lps);
    }

    public function show(LP $lp)
    {
        return new LpResource($lp);
    }

    public function store(StoreLpRequest $request)
    {
        $lp = LP::create($request->validated());

        return new LpResource($lp);
    }

    public function update(UpdateLpRequest $request, LP $lp)
    {
        $lp->update($request->validated());

        return new LpResource($lp);
    }

    public function destroy(LP $lp)
    {
        $lp->delete();

        return response()->noContent();
    }
}
