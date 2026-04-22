import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero.png";
import aboutShotOne from "@/assets/portfolio-6.jpg";


const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Ambient liquid background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-foreground/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      {/* Mobile: full cover background */}
      <div className="absolute inset-0 md:hidden">
        <img src={heroImg} alt="Gevin cutting hair" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      {/* Desktop: full hero composition with softer blend into the image */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src={heroImg}
          alt="Gevin cutting hair"
          className="absolute right-0 top-0 h-full w-auto max-w-[70%] object-contain object-right"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background))_32%,hsl(var(--background)/0.88)_46%,hsl(var(--background)/0.55)_62%,transparent_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_46%,transparent_0%,transparent_28%,hsl(var(--background)/0.16)_48%,hsl(var(--background)/0.7)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/25" />
      </div>

      {/* Decorative diagonal stripes — street style */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 22px)",
        }} />
      </div>

      {/* Content */}
      <div className="relative container h-full min-h-screen flex flex-col justify-center pb-24 md:pb-28">
        <div className="max-w-2xl md:max-w-[46rem]">
          {/* Eyebrow chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 rounded-full glass glass-sheen px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <p className="font-heading text-accent text-[10px] md:text-xs tracking-[0.35em]">
              HAIRSTYLIST · CREATIVE · EST. 2014
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-7xl sm:text-8xl md:text-[8.5rem] lg:text-[11rem] font-bold leading-[0.82] tracking-tight text-foreground"
            style={{ textShadow: "0 4px 40px hsl(0 0% 0% / 0.6)" }}
          >
            STAY
            <br />
            <span className="bg-gradient-to-br from-accent via-accent to-accent/60 bg-clip-text text-transparent">
              FRESH.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 md:mt-10"
          >
            <p className="text-foreground/75 max-w-md text-base md:text-lg leading-relaxed font-light mb-10">
              More than a barber — a craftsman. Precision cuts, creative styling,
              and an experience that stays with you long after the chair.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 font-heading text-xs md:text-sm tracking-[0.25em] rounded-full bg-accent text-accent-foreground px-8 py-4 overflow-hidden border border-accent-foreground/10 shadow-[0_10px_40px_-10px_hsl(var(--accent)/0.6),inset_0_1px_0_0_hsl(var(--foreground)/0.2)] transition-all hover:brightness-110 hover:shadow-[0_14px_50px_-8px_hsl(var(--accent)/0.7),inset_0_1px_0_0_hsl(var(--foreground)/0.25)]"
              >
                <span className="relative z-10">BOOK NOW</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 font-heading text-xs md:text-sm tracking-[0.25em] rounded-full glass glass-sheen text-foreground px-8 py-4 hover:text-accent hover:border-accent/40 transition-all"
              >
                VIEW WORK
              </Link>
            </div>

            {/* Mini stat row */}
            <div className="mt-12 md:mt-14 grid grid-cols-3 max-w-md gap-4">
              {[
                { v: "10+", l: "YRS" },
                { v: "1K+", l: "CLIENTS" },
                { v: "5★", l: "RATED" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl px-3 py-3 text-center">
                  <p className="font-heading text-2xl md:text-3xl text-foreground leading-none">{s.v}</p>
                  <p className="text-[10px] tracking-[0.25em] text-muted-foreground mt-1.5">{s.l}</p>
                </div>
              ))}
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
            className="font-heading text-[10px] tracking-[0.5em] text-foreground/25"
            style={{ writingMode: "vertical-rl" }}
          >
            CLEAN CUTS • FRESH STYLE • THE CRAFT
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-20 hidden md:flex flex-col items-center gap-2"
        >
          <span className="font-heading text-[10px] tracking-[0.4em] text-foreground/40">SCROLL</span>
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
            <span key={i} className="font-heading text-accent-foreground text-sm tracking-[0.3em] flex items-center gap-8">
              TIMELESS STYLE <span className="text-accent-foreground/40">✦</span> FRESH FADES <span className="text-accent-foreground/40">✦</span> CLEAN CUTS <span className="text-accent-foreground/40">✦</span>
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
