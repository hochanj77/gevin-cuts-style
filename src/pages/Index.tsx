import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero.png";
import aboutShotOne from "@/assets/portfolio-6.jpg";


const Index = () => (
  <Layout>
    {/* Hero — Xbox / digital / ASCII */}
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Ambient green glow */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-accent/15 blur-[120px]" />
      </div>

      {/* Mobile: full cover background */}
      <div className="absolute inset-0 md:hidden">
        <img src={heroImg} alt="Gevin cutting hair" className="w-full h-full object-cover object-top opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/40" />
      </div>

      {/* Desktop hero composition */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src={heroImg}
          alt="Gevin cutting hair"
          className="absolute right-0 top-0 h-full w-auto max-w-[70%] object-contain object-right"
          style={{ filter: "contrast(1.05) saturate(0.85)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background))_32%,hsl(var(--background)/0.88)_46%,hsl(var(--background)/0.55)_62%,transparent_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_46%,transparent_0%,transparent_28%,hsl(var(--background)/0.16)_48%,hsl(var(--background)/0.7)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/30" />
      </div>

      {/* Terminal grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* CRT scanlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(var(--accent) / 0.5) 0px, hsl(var(--accent) / 0.5) 1px, transparent 1px, transparent 3px)",
        }}
      />


      {/* ASCII art — right edge */}
      <pre
        aria-hidden
        className="pointer-events-none hidden xl:block absolute right-4 bottom-32 text-[10px] leading-[1.1] font-mono text-accent/25 select-none whitespace-pre text-right"
      >{`
╔══════════════════════════╗
║  CHAIR_01  ▓▓▓▓▓▓▓▓░░ ON ║
║  BLADE     ▓▓▓▓▓▓▓▓▓▓ OK ║
║  STYLE     [SELECT_FRESH]║
║  PING      12ms          ║
╚══════════════════════════╝
       ▲ ▲ ▲ ▲ ▲ ▲ ▲
       │ │ │ │ │ │ │
`}</pre>

      {/* Content */}
      <div className="relative container h-full min-h-screen flex flex-col justify-center pb-24 md:pb-28">
        <div className="max-w-2xl md:max-w-[46rem]">
          {/* HUD chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 rounded-md border border-accent/40 bg-accent/[0.06] backdrop-blur-md px-3 py-1.5 shadow-[0_0_20px_-4px_hsl(var(--accent)/0.4),inset_0_0_0_1px_hsl(var(--accent)/0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
            </span>
            <p className="font-mono text-accent text-[10px] md:text-xs tracking-[0.3em]">
              [ ONLINE ] · GEVIN
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-7xl sm:text-8xl md:text-[8.5rem] lg:text-[11rem] font-bold leading-[0.82] tracking-tight text-foreground"
            style={{ textShadow: "0 0 30px hsl(var(--accent) / 0.25), 0 4px 40px hsl(0 0% 0% / 0.6)" }}
          >
            STAY
            <br />
            <span
              className="bg-gradient-to-br from-accent via-accent to-accent/60 bg-clip-text text-transparent"
              style={{ filter: "drop-shadow(0 0 18px hsl(var(--accent) / 0.5))" }}
            >
              FRESH<span className="text-accent">_</span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 md:mt-10"
          >
            {/* Terminal-style copy */}
            <div className="font-mono text-xs md:text-sm text-foreground/75 max-w-md mb-10 leading-relaxed border-l-2 border-accent/60 pl-4">
              <p>
                <span className="text-accent">$</span> describe --craft
              </p>
              <p className="mt-2 text-foreground/70 font-light">
                More than a barber — a craftsman. Precision cuts, creative styling,
                and an experience that stays with you long after the chair.
              </p>
              <p className="mt-2 text-accent/80">
                <span className="text-accent">▌</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 font-mono text-xs md:text-sm tracking-[0.2em] rounded-md bg-accent text-accent-foreground px-7 py-3.5 overflow-hidden border border-accent shadow-[0_0_30px_-4px_hsl(var(--accent)/0.7),inset_0_1px_0_0_hsl(var(--foreground)/0.2)] transition-all hover:brightness-110 hover:shadow-[0_0_45px_-2px_hsl(var(--accent)/0.9)]"
              >
                <span className="relative z-10">[A] BOOK_NOW</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">▶</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 font-mono text-xs md:text-sm tracking-[0.2em] rounded-md border border-accent/40 bg-accent/[0.04] backdrop-blur-md text-foreground px-7 py-3.5 hover:text-accent hover:border-accent hover:bg-accent/[0.08] hover:shadow-[0_0_24px_-6px_hsl(var(--accent)/0.5)] transition-all"
              >
                [B] VIEW_WORK
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Side vertical text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <p
            className="font-mono text-[10px] tracking-[0.5em] text-accent/40"
            style={{ writingMode: "vertical-rl" }}
          >
            CLEAN_CUTS // FRESH_STYLE // THE_CRAFT
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-20 hidden md:flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] text-accent/60">▼ SCROLL ▼</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </div>

      {/* Hero marquee */}
      <div className="absolute left-0 right-0 bottom-0 z-20 bg-accent py-3 overflow-hidden border-t border-background/10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="font-mono text-accent-foreground text-sm tracking-[0.3em] flex items-center gap-8">
              {">"} TIMELESS_STYLE <span className="text-accent-foreground/50">::</span> FRESH_FADES <span className="text-accent-foreground/50">::</span> CLEAN_CUTS <span className="text-accent-foreground/50">::</span>
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
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 via-primary/10 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl p-2 shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.08)]">
              <img
                src={aboutShotOne}
                alt="Gevin crafting a braided fade"
                className="h-full w-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
