import { source } from '@/lib/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { LLMCopyButton, ViewOptions } from '@/components/page-actions';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Callout } from 'fumadocs-ui/components/callout';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { TypeTable } from 'fumadocs-ui/components/type-table';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const slug = params.slug?.join('/') || 'index';
  const markdownUrl = `/api/markdown/${slug}`;
  const githubUrl = `https://github.com/v1ta-labs/vita/blob/main/docs/content/docs/${slug}.mdx`;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      lastUpdate={page.data.lastModified}
      tableOfContent={{
        enabled: true,
        footer: (
          <div className="flex flex-col gap-2 border-t border-border pt-4 mt-4 text-sm">
            <a
              href="https://discord.gg/v1ta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Join our Discord →
            </a>
            <a
              href="https://twitter.com/v1ta_protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Follow on Twitter →
            </a>
          </div>
        ),
      }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX
          components={{
            ...defaultMdxComponents,
            Card,
            Cards,
            Callout,
            Tab,
            Tabs,
            Accordion,
            Accordions,
            TypeTable,
          }}
        />

        {/* Edit/Share buttons */}
        <div className="mt-12 pt-6 border-t border-fd-border flex justify-between items-center">
          <div className="text-sm text-fd-muted-foreground">
            {page.data.lastModified && (
              <span>Last updated: {new Date(page.data.lastModified).toLocaleDateString()}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <LLMCopyButton markdownUrl={markdownUrl} />
            <ViewOptions markdownUrl={markdownUrl} githubUrl={githubUrl} />
          </div>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
