# v1ta Documentation

Official documentation site for v1ta - The Decentralized Stablecoin of Solana.

Built with [Fumadocs](https://fumadocs.dev), Next.js 15, and Tailwind CSS v4.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

Visit [http://localhost:3000](http://localhost:3000) to view the documentation.


## 📝 Writing Documentation

### Create a New Page

1. Create an MDX file in the appropriate directory:
```bash
touch content/docs/your-section/your-page.mdx
```

2. Add frontmatter:
```mdx
---
title: Your Page Title
description: Brief description
icon: IconName
---

# Your Content Here
```

3. Update `meta.json` in the directory:
```json
{
  "title": "Your Section",
  "pages": ["existing-page", "your-page"]
}
```

### Available Components

Fumadocs provides several helpful components:

```mdx
import { Callout } from 'fumadocs-ui/components/callout';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import { Card, Cards } from 'fumadocs-ui/components/card';

<Callout type="info">
  Information callout
</Callout>

<Callout type="warning">
  Warning callout
</Callout>

<Steps>
  <Step>First step</Step>
  <Step>Second step</Step>
</Steps>

<Cards>
  <Card
    title="Card Title"
    description="Description"
    href="/link"
  />
</Cards>
```

## 🔧 Configuration

### Fumadocs Setup

The site uses Fumadocs MDX for processing documentation:

1. **source.config.ts**: Defines docs and meta collections
2. **.source/**: Auto-generated exports (created on build/dev)
3. **src/lib/source.ts**: Loader configuration
4. **tsconfig.json**: Path alias for `@/.source`

### MDX Processing

MDX files are automatically processed with:
- Syntax highlighting
- Component support
- Auto-generated navigation
- Search indexing

## 🚀 Deployment

### Vercel

```bash
vercel
```

The site will be automatically built and deployed.

### Environment Variables

No environment variables required for the documentation site.

## 📖 Key Features

✅ **Comprehensive Content**
- Full protocol documentation
- Integration guides
- Developer resources
- User guides

✅ **Beautiful Design**
- Dark forest theme matching v1ta app
- Smooth animations
- Responsive layout
- Custom scrollbars

✅ **Developer-Friendly**
- TypeScript throughout
- Auto-generated navigation
- Search functionality
- MDX component support

✅ **Fast & Optimized**
- Next.js 15 with Turbopack
- Optimized images
- Fast page transitions
- SEO-friendly

## 🎯 Content Highlights

### Protocol Documentation (content/docs/protocol/)
- ✅ Complete protocol overview
- ✅ Detailed CDP mechanism explanation
- ✅ Liquidation process
- ✅ Redemption mechanics
- ✅ Collateral types
- ✅ Fee structure

### Technical Documentation (content/docs/technical/)
- ✅ System architecture
- ✅ Smart contract breakdown
- ✅ State account structures
- ✅ All 8 instructions documented
- ✅ Oracle integration (Pyth)
- ✅ Security analysis

### Integration Guides (content/docs/integrations/)
- ✅ marginfi flash loan examples
- ✅ Drift perps trading strategies
- ✅ Risk management patterns
- ✅ Cross-protocol monitoring

### Developer Resources (content/docs/developer/)
- ✅ TypeScript examples
- ✅ SDK usage guide
- ✅ PDA derivation helpers
- ✅ Transaction builders
- ✅ Error handling

## 🐛 Troubleshooting

### Module not found: @/.source

The `.source` directory is auto-generated. Make sure:
1. You've run `bun run dev` or `bun run build`
2. The `source.config.ts` file exists
3. The `tsconfig.json` includes the path alias:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/.source": ["./.source"]
    }
  }
}
```

### MDX Syntax Errors

Common issues:
- Avoid `<` in tables (use "less than" or escape it)
- Import all components you use
- Check for unclosed JSX tags

### Dev Server Won't Start

Try:
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules bun.lockb
bun install

# Restart dev server
bun run dev
```

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with Turbopack |
| `bun run build` | Build for production |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add or update documentation
4. Test locally with `bun run dev`
5. Submit a pull request

## 📄 License

Documentation is open source. See repository for license details.

## 🔗 Links

- **Live Site**: [docs.v1ta.xyz](https://docs.v1ta.xyz)
- **Main App**: [v1ta.xyz](https://v1ta.xyz)
- **GitHub**: [github.com/v1ta-protocol](https://github.com/v1ta-labs)
- **Fumadocs**: [fumadocs.dev](https://fumadocs.dev)

---

Built with ❤️ for the v1ta community on Solana.
