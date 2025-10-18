import { docs, meta } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { createElement } from 'react';
import { icons } from './icons';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) return;
    if (icon in icons) {
      const Icon = icons[icon as keyof typeof icons];
      return createElement(Icon);
    }
  },
});
