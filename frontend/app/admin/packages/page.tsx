'use client';

import { useEffect, useState } from 'react';
import { fetchPackages, deletePackage } from '@/lib/api';
import Link from 'next/link';

export default function PackagesAdmin() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPackages = () => {
    fetchPackages()
      .then(setPackages)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadPackages();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure?')) return;
    try {
      await deletePackage(id);
      loadPackages();
    } catch (error) {
      alert('Failed to delete package');
    }
  };

  if (loading) return <div className="px-4">Loading...</div>;

  return (
    <div className="px-4 sm:px-0">
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Packages</h2>
        <Link
          href="/admin/packages/new"
          className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Add Package
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {packages.map((pkg) => (
            <li key={pkg.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-blue-600">{pkg.category} - {pkg.tier}</div>
                  <div className="text-xs text-gray-500">{pkg.price}</div>
                </div>
                <div className="ml-5 flex-shrink-0 flex space-x-2">
                  <Link href={`/admin/packages/${pkg.id}`} className="text-blue-600 hover:text-blue-900">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(pkg.id)} className="text-red-600 hover:text-red-900">
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
