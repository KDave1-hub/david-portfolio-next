import Link from 'next/link';
import { useRouter } from 'next/router';
import { nav } from '../lib/nav';

export default function Header() {
  const { pathname } = useRouter();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 dark:bg-gray-900/70 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold text-lg">David Asante-Asare</Link>
        <nav className="flex items-center gap-1">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`navlink ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <a className="ml-2 navlink" href="/cv.pdf" target="_blank" rel="noreferrer">CV</a>
        </nav>
      </div>
    </header>
  );
}
