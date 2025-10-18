import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { MysticalBranches } from '@/components/mystical-branches';
import { AnimatedGrid } from '@/components/animated-grid';
import { MeshGradient } from '@/components/mesh-gradient';
import { Logotype } from '@/components/logotype';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MeshGradient />
      <AnimatedGrid />
      <MysticalBranches />
      <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-3">
            <Logotype size="sm" showSubheading={false} interactive={false} />
            <span
              className="text-white/30 text-base lowercase tracking-[0.15em] transition-colors duration-300 hover:text-white/50"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 300
              }}
            >
              docs
            </span>
          </div>
        ),
        transparentMode: 'top',
        enabled: true,
        hideThemeToggle: true,
      }}
      sidebar={{
        defaultOpenLevel: 1,
        collapsible: true,
        hideThemeToggle: true,
        banner: (
          <div className="relative overflow-hidden rounded-2xl p-4 mb-4 backdrop-blur-xl" style={{
            background: 'rgba(42, 73, 48, 0.1)',
            border: '1px solid rgba(42, 73, 48, 0.2)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <p className="text-sm text-white/60" style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 300,
              lineHeight: '1.6'
            }}>
              <span className="font-medium text-[#2a4930]" style={{ fontWeight: 400 }}>v1ta</span> - The
              Decentralized Stablecoin of Solana
            </p>
          </div>
        ),
        footer: (
          <div className="mt-auto pt-4 border-t border-white/5">
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://v1ta.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-white/40 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="relative">
                  Launch App
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2a4930] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
              </a>
              <a
                href="https://github.com/v1ta-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-white/40 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="relative">
                  GitHub
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2a4930] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
              </a>
              <a
                href="https://twitter.com/v1ta_protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-white/40 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="relative">
                  Twitter
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2a4930] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
              </a>
            </div>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
    </>
  );
}
