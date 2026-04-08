'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBlogs, deleteBlog, Blog } from '@/lib/adminApi';

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs()
      .then(setBlogs)
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(slug: string) {
    if (!confirm('Delete this blog post? This cannot be undone.')) return;
    await deleteBlog(slug);
    setBlogs((prev) => prev.filter((b) => b.slug !== slug));
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Blogs</h1>
        <Link
          href="/admin/blogs/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          + New Post
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading…</p>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Title</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Category</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Sub Category</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 w-32" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {blogs.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-400">
                    No blog posts yet.{' '}
                    <Link href="/admin/blogs/new" className="text-blue-600 hover:underline">
                      Create one
                    </Link>
                  </td>
                </tr>
              )}
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {blog.title}
                    {blog.description && (
                      <p className="text-xs text-gray-400 mt-0.5 font-normal truncate max-w-xs">
                        {blog.description}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{blog.category || '—'}</td>
                  <td className="px-6 py-4 text-gray-500">{blog.sub_category || '—'}</td>
                  <td className="px-6 py-4 text-gray-400 whitespace-nowrap">
                    {blog.created_at
                      ? new Date(blog.created_at).toLocaleDateString()
                      : '—'}
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <Link
                      href={`/admin/blogs/${blog.slug}/edit`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(blog.slug)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
