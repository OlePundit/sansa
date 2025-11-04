<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\V1\StoreContactRequest;
use App\Http\Resources\V1\ContactCollection;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::query();
        $contacts = $query->paginate();
        return (new ContactCollection($contacts))
    }
    public function store(StoreContactRequest $request)
    {
        $contact = Contact::create($request->all());

        return new ContactResource($contact);
    }
}
