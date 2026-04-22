import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SmoothImage from "@/components/SmoothImage";
import heroImg from "@/assets/hero.png";
import aboutShotOne from "@/assets/portfolio-6.jpg";

const Index = () => (
  <Layout>
    {/* Hero — Editorial / Professional */}
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Mobile background */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={heroImg}
          alt="Gevin cutting hair"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>

      {/* Desktop hero composition */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src={heroImg}
          alt="Gevin cutting hair"
          className="absolute right-0 top-0 h-full w-auto max-w-[70%] object-contain object-right"
          style={{ filter: "contrast(1.02) saturate(0.9)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background))_34%,hsl(var(--background)/0.9)_48%,hsl(var(--background)/0.55)_64%,transparent_82%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative container h-full min-h-screen flex flex-col justify-center pb-24 md:pb-28">
        <div className="max-w-2xl md:max-w-[46rem]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-10 h-px bg-accent/70" />
            <p className="font-heading text-accent text-xs tracking-[0.4em]">
              MASTER BARBER · NYC
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-7xl sm:text-8xl md:text-[8.5rem] lg:text-[11rem] font-bold leading-[0.85] tracking-tight text-foreground"
          >
            STAY
            <br />
            <span className="text-accent">FRESH</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 md:mt-10"
          >
            <p className="max-w-md mb-10 text-base md:text-lg text-foreground/80 leading-relaxed">
              More than a barber — a craftsman. Precision cuts, creative styling,
              and an experience that stays with you long after the chair.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-heading text-sm tracking-[0.25em] bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-colors"
              >
                BOOK NOW
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 font-heading text-sm tracking-[0.25em] border border-foreground/30 text-foreground px-8 py-4 hover:border-accent hover:text-accent transition-colors"
              >
                VIEW WORK
              </Link>
            </div>
          </motion.div>
        </div>

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
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
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

export default Index;
