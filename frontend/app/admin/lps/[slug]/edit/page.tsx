'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getLP, updateLP, LP } from '@/lib/adminApi';

export default function EditLPPage() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const [form, setForm] = useState<Partial<LP>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getLP(slug)
      .then((lp) => {
        setForm(lp);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      await updateLP(slug, form);
      router.push('/admin/lps');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update landing page.');
      setSaving(false);
    }
  }

  if (loading) return <div className="p-8 text-gray-400">Loading…</div>;

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Landing Page</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <Section title="Basic Info">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Title" value={form.title || ''} onChange={(v) => set('title', v)} />
            <Field label="Slug" value={form.slug || ''} onChange={(v) => set('slug', v)} />
          </div>
          <Field label="Category" value={form.category || ''} onChange={(v) => set('category', v)} />
          <Textarea label="Intro / Hero Text" value={form.intro || ''} onChange={(v) => set('intro', v)} rows={3} />
        </Section>

        {/* Section Titles */}
        <Section title="Section Titles">
          <Field label="Title 1" value={form.title1 || ''} onChange={(v) => set('title1', v)} />
          <Field label="Title 2" value={form.title2 || ''} onChange={(v) => set('title2', v)} />
          <Field label="Title 3" value={form.title3 || ''} onChange={(v) => set('title3', v)} />
        </Section>

        {/* Images */}
        <Section title="Images">
          <Field label="Image 1 URL" value={form.img1 || ''} onChange={(v) => set('img1', v)} placeholder="https://..." />
          <Field label="Image 2 URL" value={form.img2 || ''} onChange={(v) => set('img2', v)} placeholder="https://..." />
          <Field label="Image 3 URL" value={form.img3 || ''} onChange={(v) => set('img3', v)} placeholder="https://..." />
        </Section>

        {/* Benefits */}
        <Section title="Benefits">
          <Textarea label="Benefits (primary)" value={form.benefits || ''} onChange={(v) => set('benefits', v)} rows={4} />
          <Textarea label="Benefits (secondary)" value={form.benefits2 || ''} onChange={(v) => set('benefits2', v)} rows={4} />
        </Section>

        {/* FAQs */}
        <Section title="FAQs">
          {([1, 2, 3, 4, 5] as const).map((n) => (
            <div key={n} className="grid grid-cols-2 gap-4">
              <Field
                label={`Question ${n}`}
                value={(form[`faq${n}` as keyof LP] as string) || ''}
                onChange={(v) => set(`faq${n}`, v)}
              />
              <Textarea
                label={`Answer ${n}`}
                value={(form[`ans${n}` as keyof LP] as string) || ''}
                onChange={(v) => set(`ans${n}`, v)}
                rows={2}
              />
            </div>
          ))}
        </Section>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {saving ? 'Saving…' : 'Save Changes'}
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
      <h2 className="text-base font-semibold text-gray-700 border-b pb-2">{title}</h2>
      {children}
    </div>
  );
}

function Field({
  label, value, onChange, placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Textarea({
  label, value, onChange, rows = 3,
}: {
  label: string; value: string; onChange: (v: string) => void; rows?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
      />
    </div>
  );
}
