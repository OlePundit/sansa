<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\Service;

class BlogController extends Controller
{
    public function index()
    {
        $services = Service::all();

        $blogs = Blog::all();
        return view('Blog.index', compact('blogs','services'));
    }
    public function blog(Blog $slug)
    {
        $services = Service::all();
        $moreServices = Service::inRandomOrder()->limit(3)->get();

        return view('Blog.blog', compact('slug','services','moreServices'));
    }
}
