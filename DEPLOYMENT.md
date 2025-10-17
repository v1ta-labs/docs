# v1ta Documentation - Production Deployment Guide

This guide provides step-by-step instructions for deploying the v1ta documentation to production on Vercel.

## Pre-Deployment Checklist

### Code Quality
- [x] Production build completes successfully (`bun run build`)
- [x] All TypeScript types are valid
- [x] ESLint passes with no errors (`bun run lint`)
- [x] No console errors or warnings
- [x] All dependencies are up to date and secure

### Configuration Files
- [x] `vercel.json` - Deployment configuration with security headers
- [x] `.gitignore` - Comprehensive ignore patterns
- [x] `.node-version` - Node.js version specification (20)
- [x] `.nvmrc` - NVM configuration
- [x] `package.json` - All scripts are working
- [x] `eslint.config.mjs` - ESLint configuration with proper ignores

### Documentation
- [x] `README.md` - Comprehensive setup and usage guide
- [x] `CONTRIBUTING.md` - Contribution guidelines
- [x] `LICENSE` - MIT License
- [x] All documentation content is reviewed and accurate

### Performance & Security
- [x] Security headers configured in vercel.json
- [x] Caching headers for static assets
- [x] Images optimized (if applicable)
- [x] Bundle size is reasonable (129KB main, 185KB docs)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended for First Deployment)

1. **Prepare Repository**
   ```bash
   # Ensure all changes are committed
   git add .
   git commit -m "chore: prepare for production deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Select the repository: `v1ta-labs/v1ta-docs`

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `bun run build`
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `bun install`
   - **Node.js Version**: 20.x (from .node-version)

4. **Environment Variables**
   - No environment variables needed for this project
   - (Add any future env vars in the Vercel dashboard)

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (~2-3 minutes)
   - Your site will be live at `your-project.vercel.app`

6. **Configure Custom Domain**
   - Go to Project Settings → Domains
   - Add `docs.v1ta.xyz`
   - Add DNS records as instructed by Vercel:
     ```
     Type: CNAME
     Name: docs
     Value: cname.vercel-dns.com
     ```
   - SSL certificate will be automatically provisioned

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed)
   ```bash
   bun add -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy to Preview**
   ```bash
   vercel
   ```
   - Follow the prompts
   - This creates a preview deployment

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```
   - This deploys to your production domain

## Post-Deployment Checklist

After deployment, verify the following:

### Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Documentation pages render properly
- [ ] Search functionality works (Fumadocs search)
- [ ] Mobile responsive design works
- [ ] All animations and interactions work smoothly

### Performance
- [ ] Lighthouse score > 90 for Performance
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] Check Core Web Vitals in Vercel Analytics

### SEO
- [ ] Meta tags are present and accurate
- [ ] Open Graph tags work (test with social media preview tools)
- [ ] Twitter Card tags work
- [ ] Sitemap is accessible (if configured)
- [ ] robots.txt allows indexing

### Security
- [ ] HTTPS is enabled (automatic with Vercel)
- [ ] Security headers are present (check with securityheaders.com)
- [ ] No mixed content warnings
- [ ] CSP headers are working (if configured)

### Content
- [ ] All documentation is accurate and up to date
- [ ] Code examples work and are tested
- [ ] Links to external resources work
- [ ] Images and assets load correctly

## Monitoring & Maintenance

### Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor page views, performance, and user behavior

### Error Tracking
- Consider integrating Sentry or similar for error tracking
- Monitor Vercel deployment logs for errors

### Content Updates
Automatically deploy on every push to main:
```bash
# Make your changes
git add .
git commit -m "docs: update protocol overview"
git push origin main

# Vercel will automatically build and deploy
```

### Manual Deployment
If you need to manually trigger a deployment:
1. Go to Vercel Dashboard
2. Select your project
3. Go to Deployments
4. Click "..." menu on latest deployment
5. Click "Redeploy"

## Rollback Procedure

If you need to rollback to a previous version:

1. Go to Vercel Dashboard → Deployments
2. Find the last working deployment
3. Click "..." menu → "Promote to Production"
4. The previous version will be live immediately

Alternatively, via Git:
```bash
# Revert to a previous commit
git revert HEAD
git push origin main

# Or reset to a specific commit
git reset --hard <commit-hash>
git push origin main --force
```

## Troubleshooting

### Build Fails
- Check Vercel build logs for errors
- Test locally: `bun run build`
- Verify all dependencies are in package.json
- Check Node.js version matches .node-version

### 404 Errors
- Check that the route exists in your pages
- Verify the vercel.json redirects/rewrites
- Check fumadocs routing configuration

### Performance Issues
- Check bundle size: `bun run build` shows chunk sizes
- Optimize images and assets
- Review code splitting and lazy loading

### Styling Issues
- Verify Tailwind CSS is compiling correctly
- Check that globals.css is imported
- Review CSS specificity conflicts

## Support

If you encounter issues:
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Fumadocs documentation: [fumadocs.dev](https://fumadocs.dev)
- Open an issue on GitHub
- Contact the team on Discord

## Build Information

**Current Production Build:**
- Next.js: 15.5.6
- Framework: Next.js with Turbopack
- Total Pages: 14 (8 static + 6 SSG)
- Bundle Sizes:
  - Homepage: 129 KB first load
  - Docs pages: 185 KB first load
  - Shared chunks: 147 KB

**Deployment Time:**
- Average build time: 30-60 seconds
- Average deployment time: 2-3 minutes total

---

## Quick Reference

```bash
# Development
bun run dev          # Start dev server
bun run build        # Test production build
bun run lint         # Run ESLint

# Deployment
vercel               # Deploy to preview
vercel --prod        # Deploy to production

# Verification
curl -I https://docs.v1ta.xyz    # Check headers
lighthouse https://docs.v1ta.xyz  # Run Lighthouse audit
```

---

Last updated: 2025-01-18
