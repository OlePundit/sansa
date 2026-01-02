'use client';

import { useEffect, useState } from 'react';
import { fetchBlogs, deleteBlog } from '@/lib/api';
import Link from 'next/link';

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadBlogs = () => {
    fetchBlogs()
      .then(setBlogs)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure?')) return;
    try {
      await deleteBlog(id);
      loadBlogs();
    } catch (error) {
      alert('Failed to delete blog');
    }
  };

  if (loading) return <div className="px-4">Loading...</div>;

  return (
    <div className="px-4 sm:px-0">
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Blogs</h2>
        <Link
          href="/admin/blogs/new"
          className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Add Blog Post
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-blue-600">{blog.title}</div>
                  {blog.category && <div className="text-xs text-gray-500">{blog.category}</div>}
                </div>
                <div className="ml-5 flex-shrink-0 flex space-x-2">
                  <Link href={`/admin/blogs/${blog.id}`} className="text-blue-600 hover:text-blue-900">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(blog.id)} className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
