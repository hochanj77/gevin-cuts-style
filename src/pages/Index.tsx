import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import gevinLogo from "@/assets/gevin-cuts-logo.png";
import aboutShotOne from "@/assets/portfolio-6.jpg";

const Index = () => (
  <Layout>
    {/* Hero — full viewport, Rich in Flesh inspired */}
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Swoosh decorative curves — left side */}
      <div className="absolute top-0 left-0 w-[35%] h-full pointer-events-none z-[2]">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 400 900" fill="none" preserveAspectRatio="none">
          <path d="M-50 0C100 200 350 250 380 450C410 650 200 750 -50 900" stroke="white" strokeWidth="4" opacity="0.12" />
          <path d="M-80 0C70 210 320 260 350 460C380 660 170 760 -80 900" stroke="white" strokeWidth="3" opacity="0.08" />
          <path d="M-110 0C40 220 290 270 320 470C350 670 140 770 -110 900" stroke="white" strokeWidth="2" opacity="0.05" />
        </svg>
      </div>

      {/* Swoosh decorative curves — right side */}
      <div className="absolute top-0 right-0 w-[35%] h-full pointer-events-none z-[2]">
        <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 400 900" fill="none" preserveAspectRatio="none">
          <path d="M450 0C300 200 50 250 20 450C-10 650 200 750 450 900" stroke="white" strokeWidth="4" opacity="0.12" />
          <path d="M480 0C330 210 80 260 50 460C20 660 230 760 480 900" stroke="white" strokeWidth="3" opacity="0.08" />
          <path d="M510 0C360 220 110 270 80 470C50 670 260 770 510 900" stroke="white" strokeWidth="2" opacity="0.05" />
        </svg>
      </div>

      {/* Left image — top-left area */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute top-16 left-0 w-[38%] md:w-[32%] h-[55%] z-[1]"
      >
        <img
          src={hero1}
          alt="Precision fade haircut"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
      </motion.div>

      {/* Right image — right area, slightly lower */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute top-24 right-0 w-[38%] md:w-[32%] h-[55%] z-[1]"
      >
        <img
          src={hero2}
          alt="Gevin cutting hair"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
      </motion.div>

      {/* Center logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-[5]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Glow behind logo */}
          <div className="absolute inset-0 blur-3xl bg-background/80 scale-125 rounded-full" />
          <img
            src={gevinLogo}
            alt="Gevin Cuts"
            className="relative w-56 md:w-72 lg:w-96 xl:w-[28rem] drop-shadow-[0_0_60px_rgba(0,0,0,0.9)]"
          />
        </motion.div>

        {/* Taglines flanking logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center gap-4 md:gap-6 mt-2"
        >
          <p className="font-heading text-[10px] md:text-xs tracking-[0.25em] text-foreground/70">
            SHARP LOOKS
          </p>
          <div className="h-px bg-foreground/40 w-6 md:w-12" />
          <div className="w-1.5 h-1.5 rotate-45 border border-foreground/40" />
          <div className="h-px bg-foreground/40 w-6 md:w-12" />
          <p className="font-heading text-[10px] md:text-xs tracking-[0.25em] text-foreground/70">
            TAILORED STYLE
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex gap-4 mt-8 md:mt-10"
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

      {/* Bottom marquee */}
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
