'use client';

import { useEffect } from 'react';

/**
 * Removes theme toggle button from the DOM and handles TOC at medium resolutions
 * Since Fumadocs doesn't provide a built-in way to hide these,
 * we need to remove/manage them manually after the component mounts
 */
export function RemoveThemeToggle() {
  useEffect(() => {
    // Handle TOC visibility based on window width
    const handleTOC = () => {
      const width = window.innerWidth;

      // Target all possible TOC selectors
      const tocSelectors = [
        '[data-toc]',
        '.toc',
        '[role="complementary"]',
        'aside[data-toc]',
        'nav[data-toc]',
        // Fumadocs specific
        '[class*="toc"]',
        '[class*="TOC"]',
      ];

      tocSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          const element = el as HTMLElement;

          // Hide TOC at medium resolutions (770-1279px) to prevent overlap
          if (width >= 770 && width <= 1279) {
            element.style.display = 'none';
            element.style.visibility = 'hidden';
            element.style.opacity = '0';
            element.style.width = '0';
            element.style.height = '0';
            element.style.overflow = 'hidden';
            element.style.position = 'absolute';
            element.style.left = '-9999px';
          } else if (width >= 1280) {
            // Restore TOC at larger resolutions
            element.style.display = '';
            element.style.visibility = '';
            element.style.opacity = '';
            element.style.width = '';
            element.style.height = '';
            element.style.overflow = '';
            element.style.position = '';
            element.style.left = '';
          }
        });
      });

      // Also target the right sidebar container in DocsLayout
      const main = document.querySelector('main');
      if (main) {
        // Look for the container that holds TOC (usually last child or a specific grid column)
        const possibleTOCContainers = main.querySelectorAll('aside, nav, [role="complementary"]');
        possibleTOCContainers.forEach(container => {
          const el = container as HTMLElement;
          // Check if it contains TOC-related content
          if (el.innerHTML.includes('On this page') ||
              el.innerHTML.includes('Table of Contents') ||
              el.querySelector('[data-toc]') ||
              el.classList.toString().includes('toc')) {
            if (width >= 770 && width <= 1279) {
              el.style.display = 'none';
            } else if (width >= 1280) {
              el.style.display = '';
            }
          }
        });
      }
    };

    const removeThemeToggle = () => {
      // Target all possible theme toggle buttons
      const selectors = [
        'button[aria-label*="heme"]',
        'button[title*="heme"]',
        'button[aria-label*="Theme"]',
        'button[title*="Theme"]',
        'button[aria-label="Toggle theme"]',
        '[data-theme-toggle]',
        '[data-fd-theme-toggle]',
        '.fd-theme-toggle',
        '.theme-toggle',
        'button[data-theme]',
      ];

      selectors.forEach(selector => {
        const buttons = document.querySelectorAll(selector);
        buttons.forEach(button => {
          button.remove();
        });
      });

      // Also search for buttons with sun/moon icons
      const allButtons = document.querySelectorAll('button');
      allButtons.forEach(button => {
        const svg = button.querySelector('svg');
        if (svg) {
          const lucideAttr = svg.getAttribute('data-lucide');
          // SVG className is SVGAnimatedString, need to get the baseVal or convert to string
          const classValue = svg.className;
          const classes = typeof classValue === 'string'
            ? classValue
            : (classValue?.baseVal || '');

          if (
            lucideAttr === 'sun' ||
            lucideAttr === 'moon' ||
            classes.includes('sun') ||
            classes.includes('moon')
          ) {
            button.remove();
          }
        }
      });

      // Search in sidebar and nav specifically
      const sidebar = document.querySelector('aside');
      const nav = document.querySelector('nav');

      [sidebar, nav].forEach(container => {
        if (!container) return;

        const iconButtons = container.querySelectorAll('button:not([data-folder]):not([aria-label]):not([aria-expanded])');
        iconButtons.forEach(button => {
          // If button only has an SVG child and no text, likely theme toggle
          const children = Array.from(button.children);
          if (children.length === 1 && children[0].tagName === 'svg') {
            const ariaLabel = button.getAttribute('aria-label');
            // Don't remove if it's a search, menu, or folder toggle
            if (!ariaLabel || (!ariaLabel.includes('Search') && !ariaLabel.includes('Menu') && !ariaLabel.includes('Toggle'))) {
              button.remove();
            }
          }
        });
      });
    };

    // Remove immediately
    removeThemeToggle();
    handleTOC();

    // Remove again after a short delay (for dynamically loaded content)
    const timeout1 = setTimeout(() => {
      removeThemeToggle();
      handleTOC();
    }, 100);
    const timeout2 = setTimeout(() => {
      removeThemeToggle();
      handleTOC();
    }, 500);
    const timeout3 = setTimeout(() => {
      removeThemeToggle();
      handleTOC();
    }, 1000);

    // Set up a MutationObserver to catch dynamically added theme toggles
    const observer = new MutationObserver(() => {
      removeThemeToggle();
      handleTOC();
    });

    // Observe the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Handle window resize
    window.addEventListener('resize', handleTOC);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      observer.disconnect();
      window.removeEventListener('resize', handleTOC);
    };
  }, []);

  return null;
}
