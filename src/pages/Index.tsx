import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import gevinLogo from "/favicon.png";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import aboutShotOne from "@/assets/portfolio-6.jpg";

const Index = () => (
  <Layout>
    {/* Hero — Rich in Flesh inspired */}
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Decorative diagonal stripes */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 30px, white 30px, white 2px)",
        }} />
      </div>

      {/* Swoosh curves - decorative */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.06]">
        <svg className="absolute -left-20 top-20 w-[500px] h-[800px]" viewBox="0 0 500 800" fill="none">
          <path d="M400 0C250 100 100 300 50 500C0 700 150 800 300 750" stroke="white" strokeWidth="2" />
          <path d="M450 0C300 120 130 320 80 520C30 720 180 820 330 770" stroke="white" strokeWidth="1.5" />
        </svg>
        <svg className="absolute -right-20 top-40 w-[500px] h-[800px]" viewBox="0 0 500 800" fill="none">
          <path d="M100 0C250 100 400 300 450 500C500 700 350 800 200 750" stroke="white" strokeWidth="2" />
          <path d="M50 0C200 120 370 320 420 520C470 720 320 820 170 770" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative container pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Top tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-8 md:mb-12"
        >
          <div className="h-px bg-foreground/30 w-16 md:w-24" />
          <p className="font-heading text-xs md:text-sm tracking-[0.4em] text-foreground/60">
            FRESH FADES
          </p>
          <div className="h-px bg-foreground/30 w-16 md:w-24" />
        </motion.div>

        {/* Main hero grid: image — logo — image */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden aspect-[3/4] max-h-[70vh]"
          >
            <img
              src={hero1}
              alt="Precision fade haircut"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>

          {/* Center logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center order-first md:order-none py-6 md:py-0"
          >
            <img
              src={gevinLogo}
              alt="Gevin Cuts"
              className="w-48 md:w-64 lg:w-80 invert"
            />
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden aspect-[3/4] max-h-[70vh]"
          >
            <img
              src={hero2}
              alt="Gevin cutting hair"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-6 mt-8 md:mt-12"
        >
          <div className="h-px bg-foreground/30 w-16 md:w-24" />
          <p className="font-heading text-xs md:text-sm tracking-[0.4em] text-foreground/60">
            CLEAN CUTS
          </p>
          <div className="h-px bg-foreground/30 w-16 md:w-24" />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-10 md:mt-14"
        >
          <Link
            to="/contact"
            className="font-heading text-sm tracking-[0.2em] bg-foreground text-background px-10 py-4 hover:bg-foreground/80 transition-all"
          >
            BOOK NOW
          </Link>
          <Link
            to="/portfolio"
            className="font-heading text-sm tracking-[0.2em] border border-foreground/40 text-foreground px-10 py-4 hover:border-foreground hover:bg-foreground/10 transition-all"
          >
            VIEW WORK
          </Link>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute left-0 right-0 bottom-0 z-20 bg-foreground py-3 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="font-heading text-background text-sm tracking-[0.3em] flex items-center gap-8">
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
