import { readFileSync } from 'fs';
import { join } from 'path';
import { NextRequest } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
): Promise<Response> {
  const { slug } = await params;
  const filePath = join(
    process.cwd(),
    'content/docs',
    `${slug.join('/')}.mdx`
  );

  try {
    const content = readFileSync(filePath, 'utf-8');

    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch {
    return new Response('File not found', {
      status: 404,
    });
  }
}
