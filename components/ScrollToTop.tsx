'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * ScrollToTop ensures that whenever route/pathname changes,
 * the window and document always scroll to the very top immediately
 * across all screen sizes and mobile browsers.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // If the URL has a hash (e.g. #featured-work), respect standard anchor scrolling
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}
