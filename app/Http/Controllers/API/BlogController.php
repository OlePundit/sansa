<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\Service;
use App\Http\Resources\V1\BlogResource;
use App\Http\Resources\V1\BlogCollection;
use App\Http\Requests\V1\StoreBlogRequest;
use App\Http\Requests\V1\UpdateBlogRequest;

use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $query = Blog::query();

        $blogs = $query->paginate();

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

    public function show(Blog $blog)
    {
        return new BlogResource($blog);
    }

    public function store(StoreBlogRequest $request)
    {
        $blog = Blog::create($request->validated());

        return new BlogResource($blog);
    }

    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        $blog->update($request->validated());

        return new BlogResource($blog);
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();

        return response()->noContent();
    }
}
