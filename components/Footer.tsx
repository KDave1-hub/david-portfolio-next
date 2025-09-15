export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} David Asante-Asare</div>
        <div className="flex items-center gap-4">
          <a href="mailto:dpa240001@utdallas.edu" className="underline">dpa240001@utdallas.edu</a>
          <a href="mailto:topleveliot@gmail.com" className="underline">topleveliot@gmail.com</a>
          <a href="https://www.linkedin.com/in/david-asante-asare" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
