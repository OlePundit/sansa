'use client';

import { useEffect, useState } from 'react';
import { getNewsletters, deleteNewsletter, NewsletterSubscriber } from '@/lib/adminApi';
import { Trash2, Download } from 'lucide-react';

export default function AdminNewslettersPage() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);

  useEffect(() => {
    getNewsletters()
      .then(setSubscribers)
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Remove this subscriber?')) return;
    setDeleting(id);
    try {
      await deleteNewsletter(id);
      setSubscribers((prev) => prev.filter((s) => s.id !== id));
    } finally {
      setDeleting(null);
    }
  };

  const handleExport = () => {
    const csv = ['Email,Date', ...subscribers.map((s) => `${s.email},${s.created_at ?? ''}`)].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter-subscribers.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Newsletter Subscribers</h1>
          <p className="text-gray-500 mt-1">
            {loading ? 'Loading…' : `${subscribers.length} subscriber${subscribers.length !== 1 ? 's' : ''}`}
          </p>
        </div>
        {!loading && subscribers.length > 0 && (
          <button
            onClick={handleExport}
            className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        )}
      </div>

      {loading ? (
        <p className="text-gray-400">Loading…</p>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-3 font-medium text-gray-500">#</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Email</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Date</th>
                <th className="px-6 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {subscribers.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-gray-400">
                    No subscribers yet.
                  </td>
                </tr>
              )}
              {subscribers.map((s, i) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-400">{i + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <a href={`mailto:${s.email}`} className="text-blue-600 hover:underline">
                      {s.email}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {s.created_at ? new Date(s.created_at).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(s.id)}
                      disabled={deleting === s.id}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40"
                    >
                      <Trash2 className="w-4 h-4" />
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
