# Contributing to v1ta Documentation

Thank you for your interest in contributing to the v1ta documentation! This guide will help you get started.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Writing Documentation](#writing-documentation)
- [Submitting Changes](#submitting-changes)
- [Style Guide](#style-guide)

## Code of Conduct

Please be respectful and constructive in all interactions. We're building an inclusive community focused on making great documentation.

## Getting Started

### Prerequisites

- **Bun**: v1.0.0 or higher
- **Node.js**: v20.x or higher
- **Git**: For version control

### Initial Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/v1ta-docs.git
   cd v1ta-docs
   ```

3. Install dependencies:
   ```bash
   bun install
   ```

4. Start the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Project Structure

```
docs/
├── content/docs/          # All documentation content (MDX files)
│   ├── getting-started/   # User guides
│   ├── protocol/          # Protocol mechanics
│   ├── technical/         # Technical documentation
│   ├── integrations/      # Integration guides
│   └── developer/         # Developer resources
├── src/
│   ├── app/               # Next.js app directory
│   ├── components/        # React components
│   └── lib/               # Utility functions
└── public/                # Static assets
```

## Development Workflow

### Creating a Feature Branch

Always create a new branch for your changes:

```bash
git checkout -b docs/your-feature-name
```

Branch naming conventions:
- `docs/feature-name` - For documentation updates
- `fix/issue-description` - For bug fixes
- `design/component-name` - For UI/design changes

### Making Changes

1. **Edit existing documentation**: Modify MDX files in `content/docs/`
2. **Create new pages**: Add new MDX files with proper frontmatter
3. **Update UI components**: Edit files in `src/components/`
4. **Test your changes**: Verify locally with `bun run dev`

### Running Tests

Before submitting:

```bash
# Lint your code
bun run lint

# Build for production
bun run build

# Check for TypeScript errors
# (automatically run during build)
```

## Writing Documentation

### Creating a New Page

1. Create an MDX file in the appropriate directory:
   ```bash
   touch content/docs/section-name/page-name.mdx
   ```

2. Add frontmatter:
   ```mdx
   ---
   title: Your Page Title
   description: Brief description for SEO and previews
   ---

   # Your Content Here

   Write your documentation using Markdown and MDX.
   ```

3. Update `meta.json` in the directory to include your page in the navigation:
   ```json
   {
     "title": "Section Name",
     "pages": ["existing-page", "page-name"]
   }
   ```

### MDX Components

Use Fumadocs components to enhance your documentation:

```mdx
import { Callout } from 'fumadocs-ui/components/callout';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import { Card, Cards } from 'fumadocs-ui/components/card';

<Callout type="info">
  Informational callout - use for helpful tips
</Callout>

<Callout type="warning">
  Warning callout - use for important warnings
</Callout>

<Callout type="error">
  Error callout - use for critical information
</Callout>

<Steps>
  <Step>First step in a process</Step>
  <Step>Second step in a process</Step>
  <Step>Third step in a process</Step>
</Steps>

<Cards>
  <Card
    title="Card Title"
    description="Card description"
    href="/link-to-page"
  />
</Cards>
```

### Code Blocks

Use syntax highlighting for code examples:

````mdx
```typescript
// TypeScript example
import { Connection } from '@solana/web3.js';

const connection = new Connection('https://api.devnet.solana.com');
```

```rust
// Rust example
use solana_program::{
    account_info::AccountInfo,
    entrypoint::ProgramResult,
};
```
````

## Submitting Changes

### Commit Messages

Write clear, descriptive commit messages:

```bash
# Good commit messages
git commit -m "docs: add liquidation process explanation"
git commit -m "fix: correct collateral ratio calculation"
git commit -m "design: improve mobile navigation layout"

# Bad commit messages
git commit -m "update docs"
git commit -m "fix stuff"
git commit -m "WIP"
```

Commit message format:
- `docs:` - Documentation updates
- `fix:` - Bug fixes
- `feat:` - New features
- `design:` - UI/UX improvements
- `chore:` - Maintenance tasks

### Pull Request Process

1. **Update your fork**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push your changes**:
   ```bash
   git push origin docs/your-feature-name
   ```

3. **Create a Pull Request**:
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template with:
     - Clear description of changes
     - Screenshots (if UI changes)
     - Related issues (if applicable)

4. **PR Review Process**:
   - Maintainers will review your PR
   - Address any feedback or requested changes
   - Once approved, your PR will be merged

### PR Checklist

Before submitting, ensure:

- [ ] Code follows the style guide
- [ ] All tests pass (`bun run build`)
- [ ] ESLint passes (`bun run lint`)
- [ ] Documentation is clear and accurate
- [ ] Links are working correctly
- [ ] No console errors in development
- [ ] Changes are tested on mobile (if applicable)
- [ ] Commit messages are descriptive

## Style Guide

### Writing Style

- **Be clear and concise**: Write for developers and users of all skill levels
- **Use active voice**: "The protocol liquidates positions" instead of "Positions are liquidated by the protocol"
- **Be consistent**: Use the same terminology throughout
- **Include examples**: Show code examples and practical use cases

### Terminology

Use these terms consistently:

- **v1ta** - The protocol (lowercase with italic '1')
- **VUSD** - The stablecoin (all caps)
- **CDP** - Collateralized Debt Position
- **Stability Pool** - Not "stability pool"
- **collateral ratio** - Not "CR" or "c-ratio" on first use

### Formatting

- **Headers**: Use sentence case ("How to open a position", not "How To Open A Position")
- **Lists**: Use bullet points for unordered lists, numbers for steps
- **Emphasis**: Use **bold** for important terms, *italic* for emphasis
- **Code**: Use `backticks` for inline code, code blocks for multi-line

### Code Examples

- **Complete examples**: Provide full, runnable code when possible
- **Comments**: Explain complex logic with inline comments
- **Error handling**: Show proper error handling patterns
- **TypeScript**: Use TypeScript for examples (not JavaScript)

```typescript
// Good: Complete example with error handling
import { Connection, PublicKey } from '@solana/web3.js';

async function fetchCDP(cdpAddress: string) {
  try {
    const connection = new Connection('https://api.devnet.solana.com');
    const cdpPubkey = new PublicKey(cdpAddress);
    const accountInfo = await connection.getAccountInfo(cdpPubkey);

    if (!accountInfo) {
      throw new Error('CDP account not found');
    }

    return accountInfo;
  } catch (error) {
    console.error('Error fetching CDP:', error);
    throw error;
  }
}
```

### Assets

- **Images**: Place in `public/images/` directory
- **Naming**: Use kebab-case for filenames (`cdp-flow-diagram.png`)
- **Optimization**: Optimize images before committing (use WebP when possible)
- **Alt text**: Always include descriptive alt text for accessibility

## Questions or Issues?

- **Documentation issues**: Open an issue on GitHub
- **General questions**: Join our [Discord](https://discord.gg/v1ta)
- **Twitter**: [@v1ta_protocol](https://twitter.com/v1ta_protocol)

## License

By contributing, you agree that your contributions will be licensed under the same license as the repository.

---

Thank you for contributing to v1ta documentation! 🌱
