import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} David Asante-Asare</div>
        <div className="flex items-center gap-4">
          <a href="mailto:david.asante-asare@utdallas.edu" className="underline">david.asante-asare@utdallas.edu</a>
          <a href="mailto:topleveliot@gmail.com" className="underline">topleveliot@gmail.com</a>
          <a
  href="https://www.linkedin.com/in/aapd/"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 underline"
  aria-label="LinkedIn profile"
>
  <Linkedin className="w-4 h-4" />
  
</a>
        </div>
      </div>
    </footer>
  );
}
