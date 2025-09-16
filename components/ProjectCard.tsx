import Image from "next/image";

type Props = {
  title: string;
  summary: string;
  bullets?: string[];
  image: string;
  tags?: string[];
  links?: { label: string; href: string }[];
};

export default function ProjectCard({ title, summary, bullets = [], image, tags = [], links = [] }: Props) {
  return (
    <article className="card overflow-hidden">
      <div className="relative w-full pt-[56%] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="mt-2 leading-relaxed">{summary}</p>

      {bullets.length > 0 && (
        <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span key={i} className="inline-block text-xs px-2 py-1 rounded-full border border-gray-300 dark:border-gray-600">
              {t}
            </span>
          ))}
        </div>
      )}

      {links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" className="btn">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
