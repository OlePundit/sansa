<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\Service;
use App\Http\Resources\V1\BlogResource;
use App\Http\Resources\V1\BlogCollection;
use App\Http\Requests\V1\StoreBlogRequest;

use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $query = Blog::query();

        $blogs = $query->paginate();

        // If you ever want to separate categories, you can do it here:
        $allBlogs = $blogs->getCollection();
        $services = Service::all();

        return response()->json([
            'blogs' => $allBlogs,
            'services' => $services,
            'meta' => [
                'current_page' => $blogs->currentPage(),
                'last_page' => $blogs->lastPage(),
                'per_page' => $blogs->perPage(),
                'total' => $blogs->total(),
            ]
        ]);
    }

    // In BlogController.php
    public function show(Blog $blog) // ← Change parameter name to match resource
    {
        return new BlogResource($blog);
    }
    public function store(StoreBlogRequest $request)
    {
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }
        $blog = Blog::create($request->all());

        return new BlogResource($blog);
    }
    public function destroy(Blog $blog)
    {
        $blog->delete();

        return response()->noContent();
    }
}
