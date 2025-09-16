import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const { pathname, events } = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href: string) => pathname === href;

  // Close on route change
  useEffect(() => {
    const close = () => setOpen(false);
    events.on('routeChangeStart', close);
    return () => events.off('routeChangeStart', close);
  }, [events]);

  // Close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [open]);

  // helpers for delayed close
  const startClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 dark:bg-gray-900/70 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold text-lg">David Asante-Asare</Link>

        <nav className="relative flex items-center gap-1">
          <Link href="/" className={`navlink ${isActive('/') ? 'active' : ''}`}>Home</Link>

        {/* Projects: link + caret with dropdown */}
        <div
          className="relative"
          ref={menuRef}
          onMouseEnter={() => { cancelClose(); setOpen(true); }}
          onMouseLeave={startClose}
        >
          <div className="flex items-center gap-1">
            {/* Clicking text navigates to /projects */}
            <Link
              href="/projects"
              className={`navlink ${pathname.startsWith('/projects') ? 'active' : ''}`}
            >
              Projects
            </Link>

            {/* Caret toggles (good for mobile) */}
            <button
              type="button"
              className="flex items-center px-1"     // <- no navlink padding; keeps height aligned
              aria-haspopup="menu"
              aria-expanded={open}
              aria-label="Toggle Projects menu"
              onClick={() => setOpen(o => !o)}
            >
              <svg
                className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Invisible hover bridge to prevent flicker */}
          <div className="pointer-events-auto absolute left-0 right-0 top-full h-2"></div>

          {/* Dropdown panel — anchored directly under trigger */}
          <div
            role="menu"
            className={`absolute right-0 top-[calc(100%+0px)] w-56 rounded-xl border bg-white dark:bg-gray-900 shadow-lg border-gray-200 dark:border-gray-700 overflow-hidden ${open ? 'block' : 'hidden'}`}
            onMouseEnter={cancelClose}
            onMouseLeave={startClose}
          >
            <Link href="/projects" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" role="menuitem">
              Projects
            </Link>
            <Link href="/projects/before-phd" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" role="menuitem">
              Before PhD
            </Link>
            <Link href="/projects/gallery" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" role="menuitem">
              Gallery
            </Link>
          </div>
        </div>


          <Link href="/publications" className={`navlink ${isActive('/publications') ? 'active' : ''}`}>Publications</Link>
          
        </nav>
      </div>
    </header>
  );
}
