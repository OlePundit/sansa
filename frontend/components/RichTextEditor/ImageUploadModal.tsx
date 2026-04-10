'use client';

import { useState } from 'react';
import { Editor } from '@tiptap/core';
import { uploadBodyImage } from '@/lib/adminApi';

interface Props {
  file: File;
  editor: Editor;
  onClose: () => void;
  onError: (msg: string) => void;
}

export default function ImageUploadModal({ file, editor, onClose, onError }: Props) {
  const [alt, setAlt] = useState('');
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);
  const preview = URL.createObjectURL(file);

  async function handleInsert() {
    setUploading(true);
    try {
      const url = await uploadBodyImage(file);
      const imgTag = `<img src="${url}"${alt.trim() ? ` alt="${alt.trim()}"` : ''}>`;
      const captionTag = caption.trim() ? `<p><em>${caption.trim()}</em></p>` : '';
      editor.chain().focus().insertContent(imgTag + captionTag).run();
      onClose();
    } catch {
      onError('Image upload failed.');
      onClose();
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Insert Image</h3>

        <img
          src={preview}
          alt="preview"
          className="w-full h-40 object-cover rounded-lg mb-4 border border-gray-200"
        />

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Alt text</label>
            <input
              type="text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              placeholder="Describe the image for accessibility"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Caption <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Add a caption below the image"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          <button
            onClick={handleInsert}
            disabled={uploading}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {uploading ? 'Uploading…' : 'Insert'}
          </button>
          <button
            onClick={onClose}
            disabled={uploading}
            className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
