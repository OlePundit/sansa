'use client';

import { Fragment, useEffect, useState } from 'react';
import { getContactsPaginated, Contact } from '@/lib/adminApi';

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchContacts = async (page: number) => {
    setLoading(true);
    try {
      const res = await getContactsPaginated(page);
      setContacts(res.data);
      setCurrentPage(res.meta.current_page);
      setLastPage(res.meta.last_page);
      setTotal(res.meta.total);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts(1);
  }, []);

  const goToPage = (page: number) => {
    if (page < 1 || page > lastPage) return;
    fetchContacts(page);
    setExpanded(null); // collapse any open message when changing page
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Contact Submissions</h1>
      <p className="text-gray-500 mb-6">
        Total: {total} message{total !== 1 ? 's' : ''}
      </p>

      {loading && <p className="text-gray-400">Loading…</p>}

      {!loading && (
        <>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            {/* table same as before, but use contacts from state */}
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-3 font-medium text-gray-500">Name</th>
                  <th className="text-left px-6 py-3 font-medium text-gray-500">Email</th>
                  <th className="text-left px-6 py-3 font-medium text-gray-500">Message</th>
                  <th className="text-left px-6 py-3 font-medium text-gray-500">Date</th>
                </tr>
              </thead>
              <tbody>
                {contacts.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-10 text-center text-gray-400">
                      No contact submissions yet.
                    </td>
                  </tr>
                )}
                {contacts.map((c) => (
                  <Fragment key={c.id}>
                    <tr
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setExpanded(expanded === c.id ? null : c.id)}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">{c.name}</td>
                      <td className="px-6 py-4">
                        <a href={`mailto:${c.email}`} className="text-blue-600 hover:underline" onClick={(e) => e.stopPropagation()}>
                          {c.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-600 max-w-sm">
                        <span className="line-clamp-1">{c.message}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-400 whitespace-nowrap">
                        {c.created_at ? new Date(c.created_at).toLocaleDateString() : '—'}
                      </td>
                    </tr>
                    {expanded === c.id && (
                      <tr className="bg-blue-50">
                        <td colSpan={4} className="px-6 py-4">
                          <p className="text-sm text-gray-700 whitespace-pre-wrap">{c.message}</p>
                          <a href={`mailto:${c.email}`} className="mt-2 inline-block text-sm text-blue-600 hover:underline">
                            Reply to {c.name}
                          </a>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {lastPage > 1 && (
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm border border-gray-500 text-gray-500 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {lastPage}
              </span>
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === lastPage}
                className="px-4 py-2 text-sm border border-gray-500 text-gray-500 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}