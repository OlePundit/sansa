'use client';

import { NodeViewWrapper } from '@tiptap/react';
import type { NodeViewProps } from '@tiptap/core';
import { useState } from 'react';

export default function ImageNodeView({ node, updateAttributes }: NodeViewProps) {
  const [editing, setEditing] = useState(false);
  const [alt, setAlt] = useState('');

  function openEdit() {
    setAlt(node.attrs.alt || '');
    setEditing(true);
  }

  function handleSave() {
    updateAttributes({ alt: alt.trim() });
    setEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') setEditing(false);
  }

  return (
    <NodeViewWrapper className="relative inline-block group max-w-full" contentEditable={false}>
      <img
        src={node.attrs.src}
        alt={node.attrs.alt}
        title={node.attrs.title}
        className="max-w-full"
      />

      {/* Edit overlay button */}
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={openEdit}
        className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white"
        title="Edit alt text"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </button>

      {/* Edit modal */}
      {editing && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Edit Image</h3>

            <img
              src={node.attrs.src}
              alt=""
              className="w-full h-40 object-cover rounded-lg mb-4 border border-gray-200"
            />

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Alt text</label>
              <input
                type="text"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Describe the image for accessibility"
                autoFocus
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-2 mt-5">
              <button
                type="button"
                onClick={handleSave}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </NodeViewWrapper>
  );
}
