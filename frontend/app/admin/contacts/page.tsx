'use client';

import { useEffect, useState } from 'react';
import { fetchContacts } from '@/lib/api';

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts()
      .then(setContacts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="px-4">Loading...</div>;

  return (
    <div className="px-4 sm:px-0">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contacts</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">
                      {contact.name} - {contact.email}
                    </p>
                    <p className="mt-2 text-sm text-gray-700">{contact.message}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
