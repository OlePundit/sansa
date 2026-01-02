'use client';

import { useEffect, useState } from 'react';
import { fetchServices, fetchBlogs, fetchPackages, fetchOrders, fetchContacts } from '@/lib/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    services: 0,
    blogs: 0,
    packages: 0,
    orders: 0,
    contacts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchServices(),
      fetchBlogs(),
      fetchPackages(),
      fetchOrders(),
      fetchContacts(),
    ])
      .then(([services, blogs, packages, orders, contacts]) => {
        setStats({
          services: services.length,
          blogs: blogs.length,
          packages: packages.length,
          orders: orders.length,
          contacts: contacts.length,
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const statCards = [
    { label: 'Services', value: stats.services, color: 'bg-blue-500', href: '/admin/services' },
    { label: 'Blog Posts', value: stats.blogs, color: 'bg-green-500', href: '/admin/blogs' },
    { label: 'Packages', value: stats.packages, color: 'bg-purple-500', href: '/admin/packages' },
    { label: 'Orders', value: stats.orders, color: 'bg-yellow-500', href: '/admin/orders' },
    { label: 'Contacts', value: stats.contacts, color: 'bg-red-500', href: '/admin/contacts' },
  ];

  if (loading) {
    return (
      <div className="px-4 sm:px-0">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-0">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {statCards.map((stat) => (
          <a
            key={stat.label}
            href={stat.href}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`${stat.color} rounded-md p-3`}>
                    <div className="text-white text-3xl font-bold">{stat.value}</div>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.label}
                    </dt>
                  </dl>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/admin/services" className="p-4 border rounded hover:bg-gray-50 transition">
            <h4 className="font-medium">Add Service</h4>
            <p className="text-sm text-gray-500">Create a new service offering</p>
          </a>
          <a href="/admin/blogs" className="p-4 border rounded hover:bg-gray-50 transition">
            <h4 className="font-medium">Write Blog Post</h4>
            <p className="text-sm text-gray-500">Publish new content</p>
          </a>
          <a href="/admin/packages" className="p-4 border rounded hover:bg-gray-50 transition">
            <h4 className="font-medium">Manage Packages</h4>
            <p className="text-sm text-gray-500">Update pricing and features</p>
          </a>
        </div>
      </div>
    </div>
  );
}
