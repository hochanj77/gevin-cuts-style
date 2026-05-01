import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SmoothImage from "@/components/SmoothImage";
import { useIsMobile } from "@/hooks/use-mobile";
import heroImg from "@/assets/hero.png";
import aboutShotOne from "@/assets/portfolio-6.jpg";

const Index = () => {
  const isMobile = useIsMobile();
  return (
  <Layout>
    {/* Hero — Liquid Glass */}
    <section className="relative md:min-h-screen overflow-hidden bg-background">
      {/* Ambient liquid color field — desktop only */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute -top-40 -left-40 w-[44rem] h-[44rem] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full bg-foreground/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[32rem] h-[32rem] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      {/* MOBILE — editorial split layout */}
      <div className="md:hidden flex flex-col">
        {/* Top: framed image */}
        <div className="relative h-[58vh] w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Gevin cutting hair"
            className="w-full h-full object-cover object-[50%_22%]"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            <p className="font-heading text-accent text-[10px] tracking-[0.4em]">
              MASTER BARBER · NYC
            </p>
          </div>
        </div>

        {/* Bottom: copy on solid bg */}
        <div className="container pt-8 pb-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-7xl font-bold leading-[0.85] tracking-tight text-foreground"
          >
            STAY
            <br />
            <span className="text-accent">FRESH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base text-foreground/80 leading-relaxed max-w-md"
          >
            More than a barber — a craftsman. Precision cuts, creative styling,
            and an experience that stays with you long after the chair.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-heading text-sm tracking-[0.25em] rounded-full bg-accent text-accent-foreground px-7 py-4 hover:bg-accent/90 transition-colors shadow-[0_10px_30px_-10px_hsl(var(--accent)/0.6)]"
            >
              BOOK NOW
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/portfolio"
              className="glass inline-flex items-center gap-2 font-heading text-sm tracking-[0.25em] rounded-full text-foreground px-7 py-4 hover:text-accent hover:border-accent/50 transition-colors"
            >
              VIEW WORK
            </Link>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP hero composition */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src={heroImg}
          alt="Gevin cutting hair"
          className="absolute right-0 top-0 h-full w-auto max-w-[70%] object-contain object-right"
          style={{ filter: "contrast(1.02) saturate(0.95)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.92)_30%,hsl(var(--background)/0.65)_50%,hsl(var(--background)/0.3)_70%,transparent_88%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative container h-full min-h-screen hidden md:flex flex-col justify-center pb-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl md:max-w-[44rem]"
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="w-10 h-px bg-accent/70" />
            <p className="font-heading text-accent text-xs tracking-[0.4em]">
              MASTER BARBER · NYC
            </p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-6xl sm:text-7xl md:text-[7.5rem] lg:text-[9.5rem] font-bold leading-[0.85] tracking-tight text-foreground"
          >
            STAY
            <br />
            <span className="text-accent">FRESH</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-7 md:mt-9"
          >
            <p className="max-w-md mb-9 text-base md:text-lg text-foreground/85 leading-relaxed">
              More than a barber — a craftsman. Precision cuts, creative styling,
              and an experience that stays with you long after the chair.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-heading text-sm tracking-[0.25em] rounded-full bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-colors shadow-[0_10px_30px_-10px_hsl(var(--accent)/0.6)]"
              >
                BOOK NOW
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/portfolio"
                className="glass inline-flex items-center gap-2 font-heading text-sm tracking-[0.25em] rounded-full text-foreground px-8 py-4 hover:text-accent hover:border-accent/50 transition-colors"
              >
                VIEW WORK
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Side vertical text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <p
            className="font-heading text-[10px] tracking-[0.5em] text-foreground/40"
            style={{ writingMode: "vertical-rl" }}
          >
            CLEAN CUTS · FRESH STYLE · THE CRAFT
          </p>
        </motion.div>
      </div>

      {/* Hero marquee */}
      <div className="absolute left-0 right-0 bottom-0 z-20 bg-accent py-3 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: isMobile ? 12 : 30, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="font-heading text-accent-foreground text-sm tracking-[0.35em] flex items-center gap-8"
            >
              TIMELESS STYLE
              <span className="text-accent-foreground/50">·</span> FRESH FADES
              <span className="text-accent-foreground/50">·</span> CLEAN CUTS
              <span className="text-accent-foreground/50">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>

    {/* About preview */}
    <section className="py-24 md:py-36 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="font-heading text-accent text-xs tracking-[0.3em]">ABOUT</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-[0.9]">
              THE
              <br />
              <span className="text-accent">CRAFT</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
              I take pride in my craft and achieving the most optimal results for my clients.
              More than a barber — a friend, a mentor, and an ear. 10 years of experience
              cutting at "The Shop," learning from the best.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
              Guided by my father — a legendary celebrity barber who's cut Jay-Z, Kanye West,
              Pharrell, and more — I bring a refined eye to every client that sits in my chair.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-heading text-sm tracking-[0.2em] text-accent hover:text-foreground transition-colors group"
            >
              READ MY STORY
              <span className="inline-block w-8 h-px bg-accent group-hover:w-12 transition-all" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden border border-foreground/10">
              <SmoothImage
                src={aboutShotOne}
                alt="Gevin crafting a braided fade"
                wrapperClassName="h-full w-full"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Index;
