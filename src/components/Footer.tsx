import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center">
          <img src="/favicon.png" alt="Gevin Cuts" className="h-10 invert" />
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
