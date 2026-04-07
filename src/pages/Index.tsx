import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import aboutShotOne from "@/assets/portfolio-6.jpg";

const Index = () => (
  <Layout>
    {/* Hero — full-bleed cinematic layout */}
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Background images — edge to edge */}
      <div className="absolute inset-0 flex">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-1/2 h-full relative"
        >
          <img
            src={hero2}
            alt="Gevin cutting hair"
            className="w-full h-full object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
          <div className="absolute inset-0 bg-background/30" />
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-1/2 h-full relative"
        >
          <img
            src={hero1}
            alt="Precision fade haircut"
            className="w-full h-full object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background" />
          <div className="absolute inset-0 bg-background/30" />
        </motion.div>
      </div>

      {/* Decorative swoosh curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -left-10 top-0 w-[40%] h-full opacity-[0.08]" viewBox="0 0 400 800" fill="none" preserveAspectRatio="none">
          <path d="M350 0C200 150 50 300 30 500C10 700 200 800 350 750" stroke="white" strokeWidth="3" />
          <path d="M380 0C230 160 70 310 50 510C30 710 220 810 370 760" stroke="white" strokeWidth="1.5" />
          <path d="M320 0C170 140 30 290 10 490C-10 690 180 790 330 740" stroke="white" strokeWidth="1" />
        </svg>
        <svg className="absolute -right-10 top-0 w-[40%] h-full opacity-[0.08]" viewBox="0 0 400 800" fill="none" preserveAspectRatio="none">
          <path d="M50 0C200 150 350 300 370 500C390 700 200 800 50 750" stroke="white" strokeWidth="3" />
          <path d="M20 0C170 160 330 310 350 510C370 710 180 810 30 760" stroke="white" strokeWidth="1.5" />
          <path d="M80 0C230 140 370 290 390 490C410 690 220 790 70 740" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Center content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Tagline left & right of logo */}
        <div className="flex items-center gap-4 md:gap-8 w-full max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-3 flex-1 justify-end"
          >
            <p className="font-heading text-[10px] md:text-xs tracking-[0.3em] text-foreground/70 whitespace-nowrap">
              FRESH FADES
            </p>
            <div className="h-px bg-foreground/40 w-8 md:w-16" />
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <img
              src="/favicon.png"
              alt="Gevin Cuts"
              className="w-40 md:w-64 lg:w-80 xl:w-96 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] invert"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-3 flex-1"
          >
            <div className="h-px bg-foreground/40 w-8 md:w-16" />
            <p className="font-heading text-[10px] md:text-xs tracking-[0.3em] text-foreground/70 whitespace-nowrap">
              CLEAN CUTS
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex gap-4 mt-10 md:mt-14"
        >
          <Link
            to="/contact"
            className="font-heading text-xs md:text-sm tracking-[0.2em] bg-foreground text-background px-8 md:px-10 py-3 md:py-4 hover:bg-foreground/80 transition-all"
          >
            BOOK NOW
          </Link>
          <Link
            to="/portfolio"
            className="font-heading text-xs md:text-sm tracking-[0.2em] border border-foreground/50 text-foreground px-8 md:px-10 py-3 md:py-4 hover:bg-foreground/10 transition-all"
          >
            VIEW WORK
          </Link>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute left-0 right-0 bottom-0 z-20 bg-foreground py-2.5 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="font-heading text-background text-xs tracking-[0.3em] flex items-center gap-8">
              STAY FRESH <span className="text-background/40">✦</span> CLEAN CUTS <span className="text-background/40">✦</span> TIMELESS STYLE <span className="text-background/40">✦</span>
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
              <div className="w-8 h-px bg-foreground" />
              <span className="font-heading text-foreground/60 text-xs tracking-[0.3em]">ABOUT</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-[0.9]">
              THE
              <br />
              CRAFT
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
              className="inline-flex items-center gap-3 font-heading text-sm tracking-[0.2em] text-foreground hover:text-foreground/70 transition-colors group"
            >
              READ MY STORY
              <span className="inline-block w-8 h-px bg-foreground group-hover:w-12 transition-all" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden border border-border">
              <img
                src={aboutShotOne}
                alt="Gevin crafting a braided fade"
                className="h-full w-full object-cover grayscale"
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
