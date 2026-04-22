import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-foreground/10 bg-foreground/[0.03] backdrop-blur-2xl py-12 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
    </div>
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl px-6 py-6 shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.08)]">
        <Link to="/" className="font-heading text-2xl font-bold tracking-wider text-foreground">
          GEVIN
        </Link>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/gevcast" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            <Instagram size={20} /> <span className="text-sm">@gevcast</span>
          </a>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Gevin. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
