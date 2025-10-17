import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "v1ta Documentation",
    template: "%s | v1ta Docs"
  },
  description: "Documentation for v1ta - The Decentralized Stablecoin of Solana. Borrow at 110% collateral ratio.",
  keywords: ["v1ta", "VUSD", "Solana", "DeFi", "stablecoin", "CDP", "collateralized debt position"],
  authors: [{ name: "v1ta Protocol" }],
  creator: "v1ta Protocol",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.v1ta.xyz",
    title: "v1ta Documentation",
    description: "The Decentralized Stablecoin of Solana - Borrow at 110% collateral ratio",
    siteName: "v1ta Docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "v1ta Documentation",
    description: "The Decentralized Stablecoin of Solana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} antialiased`} suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
