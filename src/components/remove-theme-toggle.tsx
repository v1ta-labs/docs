'use client';

import { useEffect } from 'react';

/**
 * Removes theme toggle button from the DOM
 * Since Fumadocs doesn't provide a built-in way to hide it,
 * we need to remove it manually after the component mounts
 */
export function RemoveThemeToggle() {
  useEffect(() => {
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

    // Remove again after a short delay (for dynamically loaded content)
    const timeout1 = setTimeout(removeThemeToggle, 100);
    const timeout2 = setTimeout(removeThemeToggle, 500);
    const timeout3 = setTimeout(removeThemeToggle, 1000);

    // Set up a MutationObserver to catch dynamically added theme toggles
    const observer = new MutationObserver(() => {
      removeThemeToggle();
    });

    // Observe the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      observer.disconnect();
    };
  }, []);

  return null;
}
