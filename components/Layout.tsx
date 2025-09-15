import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import HeadMeta from './HeadMeta';

export default function Layout({ children, title, description }: { children: ReactNode; title?: string; description?: string; }) {
  return (
    <>
      <HeadMeta title={title} description={description} />
      <Header />
      <main className="container py-10">{children}</main>
      <Footer />
    </>
  );
}
