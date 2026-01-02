'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchBlogs, updateBlog, createBlog } from '@/lib/api';

export default function BlogEdit({ params }: { params: { id: string } }) {
  const router = useRouter();
  const isNew = params.id === 'new';
  const [loading, setLoading] = useState(!isNew);
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    thumbnail: '',
    category: '',
  });

  useEffect(() => {
    if (!isNew) {
      fetchBlogs()
        .then((blogs) => {
          const blog = blogs.find((b: any) => b.id === parseInt(params.id));
          if (blog) {
            setFormData({
              title: blog.title,
              body: blog.body,
              thumbnail: blog.thumbnail,
              category: blog.category || '',
            });
          }
        })
        .finally(() => setLoading(false));
    }
  }, [isNew, params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isNew) {
        await createBlog(formData);
      } else {
        await updateBlog(parseInt(params.id), formData);
      }
      router.push('/admin/blogs');
    } catch (error) {
      alert('Failed to save blog');
    }
  };

  if (loading) return <div className="px-4">Loading...</div>;

  return (
    <div className="px-4 sm:px-0">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {isNew ? 'Add Blog Post' : 'Edit Blog Post'}
      </h2>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
          <input
            type="text"
            required
            value={formData.thumbnail}
            onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Body</label>
          <textarea
            required
            rows={10}
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => router.push('/admin/blogs')}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
