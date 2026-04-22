import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-2xl border-b border-foreground/10 shadow-[inset_0_-1px_0_0_hsl(var(--foreground)/0.06)]">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-foreground">
          GEVIN
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-heading text-sm tracking-[0.2em] transition-colors hover:text-accent ${
                location.pathname === l.to ? "text-accent" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="font-heading text-sm tracking-[0.2em] rounded-full border border-foreground/20 bg-foreground/[0.06] backdrop-blur-xl px-5 py-2 shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.12)] hover:bg-foreground hover:text-background hover:border-foreground transition-all"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/60 backdrop-blur-2xl border-b border-foreground/10 overflow-hidden"
          >
            <div className="container flex flex-col gap-4 py-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`font-heading text-lg tracking-[0.2em] ${
                    location.pathname === l.to ? "text-accent" : "text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="font-heading text-lg tracking-[0.2em] rounded-full border border-foreground/20 bg-foreground/[0.06] backdrop-blur-xl px-5 py-2 text-center hover:bg-foreground hover:text-background transition-all mt-2"
              >
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
