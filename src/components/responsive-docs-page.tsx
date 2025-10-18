'use client';

import { DocsPage } from 'fumadocs-ui/page';
import { type ComponentProps, useState, useEffect } from 'react';

export function ResponsiveDocsPage(props: ComponentProps<typeof DocsPage>) {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMediumScreen(width >= 770 && width <= 1279);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Disable TOC at medium resolutions
  const tableOfContentConfig = isMediumScreen
    ? { ...props.tableOfContent, enabled: false }
    : props.tableOfContent;

  return <DocsPage {...props} tableOfContent={tableOfContentConfig} />;
}
