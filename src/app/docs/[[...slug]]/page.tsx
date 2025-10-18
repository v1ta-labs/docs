import { source } from '@/lib/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const pageData = page.data as unknown as Record<string, unknown> & {
    exports?: { default: React.ComponentType };
  };
  const MDX = pageData.exports?.default || (() => null);

  const path = `content/docs/${params.slug?.join('/') || 'index'}.mdx`;

  return (
    <DocsPage
      toc={pageData.toc as never}
      full={pageData.full as boolean | undefined}
      lastUpdate={pageData.lastModified as Date | undefined}
      editOnGithub={{
        owner: 'v1ta-labs',
        repo: 'docs',
        sha: 'main',
        path,
      }}
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
        <h1>{(pageData.title as string) || ''}</h1>
        <MDX />
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

  const pageData = page.data as unknown as {
    title?: string;
    description?: string;
  };

  return {
    title: pageData.title,
    description: pageData.description,
  };
}
