<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreNewsletterRequest;
use App\Models\Newsletter;
use Illuminate\Support\Facades\Auth;

class NewsletterController extends Controller
{
    public function index(Request $request)
    {
        $query = Newsletter::query();

        return new NewsletterCollection($query->paginate());

    }
    public function store(StoreNewsletterRequest $request)
    {
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        $data = $request->all();

        return new NewsletterResource(Newsletter::create($data));

    }
}
