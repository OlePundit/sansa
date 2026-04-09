'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import LinkExt from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import { getService, updateService, Service } from '@/lib/adminApi';
import { urls } from '@/utils/urls';

export default function EditServicePage() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const [form, setForm] = useState<Partial<Service>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      LinkExt.configure({ openOnClick: false }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'min-h-[300px] px-3 py-2.5 text-sm text-gray-500 focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      const text = editor.getText();
      setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
    },
  });

  useEffect(() => {
    getService(slug)
      .then((service) => {
        setForm(service);
        editor?.commands.setContent(service.body || '');
        const text = editor?.getText() ?? '';
        setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug, editor]);

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      await updateService(slug, { ...form, body: editor?.getHTML() ?? '' }, thumbnailFile ?? undefined);
      router.push('/admin/services');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update service.');
      setSaving(false);
    }
  }

  if (loading) return <div className="p-8 text-gray-400">Loading…</div>;

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Service</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <Field label="Title" value={form.title || ''} onChange={(v) => set('title', v)} required />
        <Field label="Category" value={form.category || ''} onChange={(v) => set('category', v)} placeholder="e.g. Web Design, SEO" />
        <Field label="Sub Category" value={form.sub_category || ''} onChange={(v) => set('sub_category', v)} placeholder="e.g. Branding, E-commerce" />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
          <textarea
            value={form.meta_description || ''}
            onChange={(e) => set('meta_description', e.target.value)}
            placeholder="SEO meta description (150–160 chars recommended)"
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <p className={`text-xs mt-1 ${
            (form.meta_description?.length ?? 0) > 160
              ? 'text-red-500'
              : (form.meta_description?.length ?? 0) >= 150
              ? 'text-green-600'
              : 'text-gray-400'
          }`}>
            {form.meta_description?.length ?? 0} / 160 characters
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail</label>
          <div className="mb-3">
            {thumbnailPreview ? (
              <div>
                <p className="text-xs text-gray-400 mb-1">New thumbnail</p>
                <img src={thumbnailPreview} alt="New thumbnail" className="h-36 w-auto rounded-lg object-cover border border-blue-200" />
              </div>
            ) : form.thumbnail ? (
              <div>
                <p className="text-xs text-gray-400 mb-1">Current thumbnail</p>
                <img src={urls.api.storage(form.thumbnail)} alt="Current thumbnail" className="h-36 w-auto rounded-lg object-cover border border-gray-200" />
              </div>
            ) : (
              <div className="h-36 w-64 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-400">No thumbnail set</span>
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/jpeg,image/png,image/jpg,image/gif,image/webp"
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              setThumbnailFile(file);
              setThumbnailPreview(file ? URL.createObjectURL(file) : null);
            }}
            className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <p className="mt-1 text-xs text-gray-400">Leave empty to keep the current thumbnail.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Body <span className="text-red-500">*</span>
          </label>
          <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <div className="flex flex-wrap gap-1 border-b border-gray-200 bg-gray-50 px-2 py-1.5">
              <ToolbarButton onClick={() => editor?.chain().focus().toggleBold().run()} active={editor?.isActive('bold')} title="Bold">
                <strong>B</strong>
              </ToolbarButton>
              <ToolbarButton onClick={() => editor?.chain().focus().toggleItalic().run()} active={editor?.isActive('italic')} title="Italic">
                <em>I</em>
              </ToolbarButton>
              <ToolbarButton onClick={() => editor?.chain().focus().toggleUnderline().run()} active={editor?.isActive('underline')} title="Underline">
                <span className="underline">U</span>
              </ToolbarButton>
              <div className="w-px bg-gray-300 mx-1" />
              <ToolbarButton onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} active={editor?.isActive('heading', { level: 2 })} title="Heading 2">
                H2
              </ToolbarButton>
              <ToolbarButton onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} active={editor?.isActive('heading', { level: 3 })} title="Heading 3">
                H3
              </ToolbarButton>
              <ToolbarButton onClick={() => editor?.chain().focus().toggleHeading({ level: 4 }).run()} active={editor?.isActive('heading', { level: 4 })} title="Heading 4">
                H4
              </ToolbarButton>
              <div className="w-px bg-gray-300 mx-1" />
              <ToolbarButton onClick={() => editor?.chain().focus().toggleBulletList().run()} active={editor?.isActive('bulletList')} title="Bullet list">
                &#8226; List
              </ToolbarButton>
              <ToolbarButton onClick={() => editor?.chain().focus().toggleOrderedList().run()} active={editor?.isActive('orderedList')} title="Ordered list">
                1. List
              </ToolbarButton>
              <div className="w-px bg-gray-300 mx-1" />
              <ToolbarButton onClick={() => editor?.chain().focus().toggleBlockquote().run()} active={editor?.isActive('blockquote')} title="Blockquote">
                &ldquo;&rdquo;
              </ToolbarButton>
              <ToolbarButton onClick={() => editor?.chain().focus().toggleCode().run()} active={editor?.isActive('code')} title="Inline code">
                &lt;/&gt;
              </ToolbarButton>
              <div className="w-px bg-gray-300 mx-1" />
              <ToolbarButton
                onClick={() => {
                  const url = window.prompt('Enter URL');
                  if (url) editor?.chain().focus().setLink({ href: url }).run();
                  else editor?.chain().focus().unsetLink().run();
                }}
                active={editor?.isActive('link')}
                title="Link"
              >
                Link
              </ToolbarButton>
              <ToolbarButton onClick={() => editor?.chain().focus().undo().run()} title="Undo">
                ↩
              </ToolbarButton>
              <ToolbarButton onClick={() => editor?.chain().focus().redo().run()} title="Redo">
                ↪
              </ToolbarButton>
            </div>
            <EditorContent editor={editor} />
            <div className="px-3 py-1.5 border-t border-gray-200 bg-gray-50 text-xs text-gray-400 text-right">
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
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

function ToolbarButton({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
        active ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
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
        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
