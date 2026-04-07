import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-heading text-2xl font-bold tracking-wider text-foreground">
          GEVIN
        </Link>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram size={20} />
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
