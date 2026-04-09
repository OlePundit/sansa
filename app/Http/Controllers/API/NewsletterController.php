<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\V1\StoreNewsletterRequest;
use App\Models\Newsletter;

class NewsletterController extends Controller
{
    public function index(Request $request)
    {
        $newsletters = Newsletter::latest()->paginate(50);
        return response()->json($newsletters);
    }

    public function store(StoreNewsletterRequest $request)
    {
        // Check for duplicate email
        if (Newsletter::where('email', $request->email)->exists()) {
            return response()->json(['message' => 'Already subscribed'], 200);
        }

        $newsletter = Newsletter::create($request->validated());

        return response()->json(['message' => 'Subscribed successfully', 'data' => $newsletter], 201);
    }

    public function destroy($id)
    {
        Newsletter::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted'], 200);
    }
}
