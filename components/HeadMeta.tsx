import Head from 'next/head';

type Props = { title?: string; description?: string; };
export default function HeadMeta({ title, description }: Props) {
  const site = "David Asante-Asare — Portfolio";
  const full = title ? `${title} | ${site}` : site;
  const desc = description || "PhD student in Computer Engineering (UT Dallas). Research in computational imaging, image processing, and edge AI.";
  const og = "/og-image.png";
  return (
    <Head>
      <title>{full}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={og} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
