import ImageExt from '@tiptap/extension-image';
import { ReactNodeViewRenderer } from '@tiptap/react';
import ImageNodeView from './ImageNodeView';

export const CustomImage = ImageExt.extend({
  addNodeView() {
    return ReactNodeViewRenderer(ImageNodeView);
  },
});
