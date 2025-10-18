import Link from "next/link";
import { MysticalBranches } from "@/components/mystical-branches";
import { GlowCard } from "@/components/glow-card";
import { Logotype } from "@/components/logotype";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#050f05] via-[#0a1f0f] to-[#050f05] overflow-hidden">
      {/* Mystical Branches Background */}
      <MysticalBranches />

      {/* Gradient Mesh Overlay - Softer and more subtle */}
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{zIndex: 0}}>
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#2a4930] rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-[#1d3c43] rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{animationDuration: '10s', animationDelay: '3s'}} />
        <div className="absolute bottom-20 left-1/3 w-[500px] h-[500px] bg-[#3a5940] rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{animationDuration: '12s', animationDelay: '1.5s'}} />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/5 backdrop-blur-2xl bg-black/10 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <Logotype size="sm" showSubheading={false} interactive={false} />
              <span
                className="text-white/30 text-base lowercase tracking-[0.15em] transition-colors duration-300 group-hover:text-white/50"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontWeight: 300
                }}
              >
                docs
              </span>
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/docs"
                className="relative text-white/50 hover:text-white transition-all duration-300 text-sm font-medium group"
              >
                <span className="relative z-10">Documentation</span>
                <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2a4930] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <a
                href="https://v1ta.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2.5 bg-[#2a4930] text-white rounded-full transition-all duration-300 font-medium text-sm shadow-lg shadow-[#2a4930]/30 hover:shadow-xl hover:shadow-[#2a4930]/50 hover:scale-[1.02] backdrop-blur-sm overflow-hidden group"
                style={{
                  boxShadow: '0 0 0 1px rgba(42, 73, 48, 0.5)',
                }}
              >
                <span className="relative z-10">Launch App</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2a4930] via-[#3a5940] to-[#2a4930] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s infinite linear'
                }} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
        {/* Badge */}
        <div className="flex justify-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-white backdrop-blur-xl border border-white/10" style={{
            background: 'rgba(42, 73, 48, 0.1)'
          }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2a4930] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2a4930]"></span>
            </span>
            <span className="font-medium">Now in Devnet</span>
          </div>
        </div>

        {/* Logo */}
        <div className="mb-20 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
          <Logotype />
        </div>

        {/* Stats - Simple Aesthetic */}
        <div className="flex flex-row items-center justify-center gap-6 md:gap-12 mb-32 animate-fadeInUp flex-wrap" style={{animationDelay: '0.3s'}}>
          <div className="text-center group cursor-default">
            <div className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-105" style={{
              textShadow: '0 0 20px rgba(42, 73, 48, 0.3)'
            }}>
              110%
            </div>
            <div className="text-xs text-white/40 uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-white/60">Collateral Ratio</div>
          </div>

          <div className="relative group cursor-pointer">
            <div className="text-3xl text-white/20 font-light transition-all duration-300 group-hover:text-[#2a4930] group-hover:scale-110" style={{
              textShadow: '0 0 0 transparent',
              transition: 'all 0.3s ease'
            }}>
              /
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              textShadow: '0 0 20px rgba(42, 73, 48, 0.8), 0 0 40px rgba(42, 73, 48, 0.5)',
              filter: 'blur(8px)',
              color: '#2a4930'
            }}>
              /
            </div>
          </div>

          <div className="text-center group cursor-default">
            <div className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-105" style={{
              textShadow: '0 0 20px rgba(42, 73, 48, 0.3)'
            }}>
              0.5%
            </div>
            <div className="text-xs text-white/40 uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-white/60">Borrow Fee</div>
          </div>

          <div className="relative group cursor-pointer">
            <div className="text-3xl text-white/20 font-light transition-all duration-300 group-hover:text-[#2a4930] group-hover:scale-110" style={{
              textShadow: '0 0 0 transparent',
              transition: 'all 0.3s ease'
            }}>
              /
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              textShadow: '0 0 20px rgba(42, 73, 48, 0.8), 0 0 40px rgba(42, 73, 48, 0.5)',
              filter: 'blur(8px)',
              color: '#2a4930'
            }}>
              /
            </div>
          </div>

          <div className="text-center group cursor-default">
            <div className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-105" style={{
              textShadow: '0 0 20px rgba(42, 73, 48, 0.3)'
            }}>
              0%
            </div>
            <div className="text-xs text-white/40 uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-white/60">Interest Rate</div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-32 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <h2 className="text-5xl font-serif italic text-white text-center mb-20" style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontWeight: 300
          }}>
            Why v1ta?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlowCard className="rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="p-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110" style={{
                  background: 'rgba(42, 73, 48, 0.15)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <svg className="w-7 h-7 text-[#2a4930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Decentralized
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  Crypto-only collateral with no centralized bridges or stablecoins. Immutable smart contracts.
                </p>
              </div>
            </GlowCard>

            <GlowCard className="rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="p-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110" style={{
                  background: 'rgba(42, 73, 48, 0.15)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <svg className="w-7 h-7 text-[#2a4930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Capital Efficient
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  110% collateral ratio with automated Stability Pool. 11x better than competitors.
                </p>
              </div>
            </GlowCard>

            <GlowCard className="rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="p-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110" style={{
                  background: 'rgba(42, 73, 48, 0.15)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <svg className="w-7 h-7 text-[#2a4930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Unstoppable
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  No governance switches. Built for Solana speed with sub-second transactions.
                </p>
              </div>
            </GlowCard>
          </div>
        </div>

        {/* Documentation Links */}
        <div className="max-w-5xl mx-auto animate-fadeInUp" style={{animationDelay: '0.5s'}}>
          <h2 className="text-5xl font-serif italic text-white text-center mb-20" style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontWeight: 300
          }}>
            Explore the docs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/docs/protocol/overview">
              <GlowCard className="rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#3a5940] transition-colors duration-300 flex items-center gap-2">
                    Protocol Overview
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    Learn how v1ta works and why it&apos;s different from other stablecoins.
                  </p>
                </div>
              </GlowCard>
            </Link>

            <Link href="/docs/getting-started/open-position">
              <GlowCard className="rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#3a5940] transition-colors duration-300 flex items-center gap-2">
                    Open a Position
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    Start borrowing VUSD against your SOL collateral today.
                  </p>
                </div>
              </GlowCard>
            </Link>

            <Link href="/docs/technical/architecture">
              <GlowCard className="rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#3a5940] transition-colors duration-300 flex items-center gap-2">
                    Technical Architecture
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    Deep dive into the smart contracts and implementation details.
                  </p>
                </div>
              </GlowCard>
            </Link>

            <Link href="/docs/developer/getting-started">
              <GlowCard className="rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#3a5940] transition-colors duration-300 flex items-center gap-2">
                    Developer Guide
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    Build applications on top of v1ta with our SDK and API.
                  </p>
                </div>
              </GlowCard>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 backdrop-blur-2xl bg-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <Link href="/" className="inline-block mb-4 group">
                <Logotype size="sm" showSubheading={false} interactive={false} />
              </Link>
              <p className="text-white/30 text-sm leading-relaxed mb-4" style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 300
              }}>
                The Decentralized Stablecoin of Solana
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://twitter.com/v1ta_protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://discord.gg/v1ta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Discord"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/v1ta-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white/50 font-medium mb-5 text-xs uppercase tracking-[0.2em]" style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 400
              }}>
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs" className="relative inline-block text-white/40 hover:text-white text-sm transition-all duration-300 group">
                    <span>Documentation</span>
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2a4930] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/v1ta-labs" target="_blank" rel="noopener noreferrer" className="relative inline-block text-white/40 hover:text-white text-sm transition-all duration-300 group">
                    <span>GitHub</span>
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2a4930] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white/50 font-medium mb-5 text-xs uppercase tracking-[0.2em]" style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 400
              }}>
                Protocol
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs/protocol/overview" className="relative inline-block text-white/40 hover:text-white text-sm transition-all duration-300 group">
                    <span>How It Works</span>
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2a4930] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
                <li>
                  <Link href="/docs/technical/security" className="relative inline-block text-white/40 hover:text-white text-sm transition-all duration-300 group">
                    <span>Security</span>
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2a4930] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
                <li>
                  <Link href="/docs/protocol/tokenomics" className="relative inline-block text-white/40 hover:text-white text-sm transition-all duration-300 group">
                    <span>Tokenomics</span>
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2a4930] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white/50 font-medium mb-5 text-xs uppercase tracking-[0.2em]" style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 400
              }}>
                Developers
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs/developer/getting-started" className="relative inline-block text-white/40 hover:text-white text-sm transition-all duration-300 group">
                    <span>Getting Started</span>
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#2a4930] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm" style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 300
            }}>
              © 2025 v1ta labs
            </p>
            <div className="flex items-center gap-6 text-xs text-white/30">
              <Link href="/docs/legal/terms" className="hover:text-white transition-colors duration-300">
                Terms
              </Link>
              <Link href="/docs/legal/privacy" className="hover:text-white transition-colors duration-300">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
