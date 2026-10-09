'use client';

import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import LinkExt from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';

// Lightweight rich text field (no image uploads) that reads and writes HTML.
// The initial `value` is only read on mount.
export default function RichTextField({
  label, value, onChange, minHeight = 160,
}: {
  label: string; value: string; onChange: (html: string) => void; minHeight?: number;
}) {
  const [, forceRender] = useState(0);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      LinkExt.configure({ openOnClick: false }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          'px-3 py-2.5 text-sm text-gray-900 focus:outline-none max-w-none ' +
          '[&_p]:my-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-0.5 ' +
          '[&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-3 [&_h3]:mb-1 ' +
          '[&_h4]:font-semibold [&_h4]:mt-2 [&_h4]:mb-1 [&_a]:text-blue-600 [&_a]:underline',
        style: `min-height: ${minHeight}px`,
      },
    },
    onUpdate: ({ editor }) => onChange(editor.isEmpty ? '' : editor.getHTML()),
    onSelectionUpdate: () => forceRender((n) => n + 1),
  });

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="border border-gray-400 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
        <div className="flex flex-wrap gap-1 border-b border-gray-200 bg-gray-50 px-2 py-1.5 rounded-t-lg">
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
      </div>
    </div>
  );
}

function ToolbarButton({
  onClick, active, title, children,
}: {
  onClick: () => void; active?: boolean; title?: string; children: React.ReactNode;
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
