'use client';

import { useRef, useState } from 'react';
import { uploadBodyImage } from '@/lib/adminApi';

const STORAGE_BASE = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000').replace(/\/api\/?$/, '');

// Older records may hold a storage-relative path instead of a full URL.
function previewSrc(value: string) {
  return /^(https?:)?\/\//.test(value) ? value : `${STORAGE_BASE}/storage/${value.replace(/^\/+/, '')}`;
}

// Image field that uploads the picked file straight away and stores the
// resulting URL. A URL can still be pasted in manually.
export default function ImageUploadField({
  label, value, onChange,
}: {
  label: string; value: string; onChange: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFile(file: File) {
    setUploading(true);
    setError('');
    try {
      onChange(await uploadBodyImage(file));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex gap-4 items-start">
        <div className="w-32 h-20 shrink-0 rounded-lg border border-gray-300 bg-gray-50 overflow-hidden flex items-center justify-center">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={previewSrc(value)} alt="" className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs text-gray-400">No image</span>
          )}
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 disabled:opacity-50 transition-colors"
            >
              {uploading ? 'Uploading…' : value ? 'Replace image' : 'Upload image'}
            </button>
            {value && !uploading && (
              <button
                type="button"
                onClick={() => onChange('')}
                className="text-gray-600 px-3 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
              >
                Remove
              </button>
            )}
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/jpg,image/gif,image/webp"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              e.target.value = '';
              if (file) handleFile(file);
            }}
          />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="…or paste an image URL"
            className="w-full border border-gray-400 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
}
