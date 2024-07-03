<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function store()
    {
        $data = request()->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ]);
    
        $contact = Contact::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'message' => $data['message']
        ]);
    
        // Assuming you want to save the contact instance, you should use the save() method on the model instance, not on $data.
        $contact->save();

        return redirect('/contact');
    
        // You might want to return a response or redirect here, depending on your application logic.
    }
    
}
