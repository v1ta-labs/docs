import type { MDXComponents } from 'mdx/types';
import defaultComponents from 'fumadocs-ui/mdx';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Callout } from 'fumadocs-ui/components/callout';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { TypeTable } from 'fumadocs-ui/components/type-table';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Card,
    Cards,
    Callout,
    Tab,
    Tabs,
    Accordion,
    Accordions,
    TypeTable,
    ...components,
  };
}
