'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBlogs, getLPs, getContacts } from '@/lib/adminApi';

interface Stats {
  blogs: number;
  lps: number;
  contacts: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ blogs: 0, lps: 0, contacts: 0 });

  useEffect(() => {
    Promise.allSettled([getBlogs(), getLPs(), getContacts()]).then(
      ([blogs, lps, contacts]) => {
        setStats({
          blogs: blogs.status === 'fulfilled' ? blogs.value.length : 0,
          lps: lps.status === 'fulfilled' ? lps.value.length : 0,
          contacts: contacts.status === 'fulfilled' ? contacts.value.length : 0,
        });
      }
    );
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome back. Here&apos;s an overview.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <StatCard label="Blog Posts" count={stats.blogs} href="/admin/blogs" />
        <StatCard label="Landing Pages" count={stats.lps} href="/admin/lps" />
        <StatCard label="Contact Submissions" count={stats.contacts} href="/admin/contacts" />
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
        <ActionLink href="/admin/blogs/new" label="+ New Blog Post" />
        <ActionLink href="/admin/lps/new" label="+ New Landing Page" />
      </div>
    </div>
  );
}

function StatCard({
  label,
  count,
  href,
}: {
  label: string;
  count: number;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
    >
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-4xl font-bold text-gray-900 mt-2">{count}</p>
    </Link>
  );
}

function ActionLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="bg-blue-600 text-white rounded-xl px-6 py-4 hover:bg-blue-700 transition-colors text-sm font-medium text-center"
    >
      {label}
    </Link>
  );
}
