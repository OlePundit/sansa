'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getLPs, deleteLP, LP } from '@/lib/adminApi';

export default function AdminLPsPage() {
  const [lps, setLPs] = useState<LP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLPs()
      .then(setLPs)
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(slug: string) {
    if (!confirm('Delete this landing page? This cannot be undone.')) return;
    await deleteLP(slug);
    setLPs((prev) => prev.filter((lp) => lp.slug !== slug));
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Landing Pages</h1>
        <Link
          href="/admin/lps/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          + New Landing Page
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
                <th className="text-left px-6 py-3 font-medium text-gray-500">Slug</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Category</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 w-32" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {lps.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-400">
                    No landing pages yet.{' '}
                    <Link href="/admin/lps/new" className="text-blue-600 hover:underline">
                      Create one
                    </Link>
                  </td>
                </tr>
              )}
              {lps.map((lp) => (
                <tr key={lp.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{lp.title || '—'}</td>
                  <td className="px-6 py-4 text-gray-500 font-mono text-xs">{lp.slug}</td>
                  <td className="px-6 py-4 text-gray-500">{lp.category || '—'}</td>
                  <td className="px-6 py-4 text-gray-400 whitespace-nowrap">
                    {lp.created_at
                      ? new Date(lp.created_at).toLocaleDateString()
                      : '—'}
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <Link
                      href={`/admin/lps/${lp.slug}/edit`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(lp.slug)}
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
