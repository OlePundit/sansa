'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createService } from '@/lib/adminApi';

export default function NewServicePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    meta_description: '',
    body: '',
  });
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      await createService(form, thumbnailFile ?? undefined);
      router.push('/admin/services');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create service.');
      setSaving(false);
    }
  }

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">New Service</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <Field label="Title" value={form.title} onChange={(v) => set('title', v)} required />
        <Field label="Meta Description" value={form.meta_description} onChange={(v) => set('meta_description', v)} placeholder="SEO meta description (150–160 chars recommended)" />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail</label>
          <input
            type="file"
            accept="image/jpeg,image/png,image/jpg,image/gif,image/webp"
            onChange={(e) => setThumbnailFile(e.target.files?.[0] ?? null)}
            className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Body <span className="text-red-500">*</span>
          </label>
          <textarea
            value={form.body}
            onChange={(e) => set('body', e.target.value)}
            required
            rows={14}
            placeholder="Write your service content here. HTML is supported."
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono resize-y"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {saving ? 'Publishing…' : 'Publish Service'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="text-gray-600 px-4 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
