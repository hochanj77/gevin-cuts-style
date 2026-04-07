import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero.png";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Mobile: full cover background */}
      <div className="absolute inset-0 md:hidden">
        <img src={heroImg} alt="Gevin cutting hair" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Desktop: full hero composition with softer blend into the image */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src={heroImg}
          alt="Gevin cutting hair"
          className="absolute right-0 top-0 h-full w-auto max-w-[72%] object-contain object-right"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background))_34%,hsl(var(--background)/0.86)_48%,hsl(var(--background)/0.54)_62%,transparent_78%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_46%,transparent_0%,transparent_26%,hsl(var(--background)/0.18)_46%,hsl(var(--background)/0.72)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-background/20" />
      </div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "40%" }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute left-8 md:left-16 top-24 w-px bg-accent hidden md:block"
      />

      {/* Decorative diagonal stripes — street style */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 22px)",
        }} />
      </div>

      {/* Content */}
      <div className="relative container h-full flex flex-col justify-center">
        <div className="max-w-2xl md:max-w-[44rem] md:rounded-r-[2rem] md:bg-background/12 md:backdrop-blur-[2px] md:pr-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-accent" />
              <p className="font-heading text-accent text-xs md:text-sm tracking-[0.4em]">
                HAIRSTYLIST & CREATIVE
              </p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] text-foreground mb-2"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
          >
            FRESH
            <br />
            <span className="text-accent" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}>
              FADES
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex items-center gap-4 my-6 md:my-8">
              <div className="h-px bg-accent flex-1 max-w-[80px]" />
              <span className="font-heading text-foreground/60 text-xs tracking-[0.3em]">EST. 10 YEARS</span>
              <div className="h-px bg-accent flex-1 max-w-[80px]" />
            </div>

            <p className="text-foreground/70 max-w-sm text-sm md:text-base leading-relaxed mb-10 font-light">
              More than a barber — a craftsman. Precision cuts, 
              creative styling, and an experience that stays with you.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative font-heading text-sm tracking-[0.2em] bg-accent text-accent-foreground px-10 py-4 overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]"
              >
                <span className="relative z-10">BOOK NOW</span>
              </Link>
              <Link
                to="/portfolio"
                className="font-heading text-sm tracking-[0.2em] border border-foreground/40 text-foreground px-10 py-4 hover:border-accent hover:text-accent transition-all backdrop-blur-sm"
              >
                VIEW WORK
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Side text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <p
            className="font-heading text-xs tracking-[0.5em] text-foreground/20"
            style={{ writingMode: "vertical-rl" }}
          >
            CLEAN CUTS • FRESH STYLE • THE CRAFT
          </p>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-foreground/30 text-[10px] tracking-[0.3em] font-heading">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-6 bg-accent/50"
        />
      </motion.div>
    </section>

    {/* Marquee strip */}
    <section className="bg-accent py-3 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="font-heading text-accent-foreground text-sm tracking-[0.3em] flex items-center gap-8">
            FRESH FADES <span className="text-accent-foreground/40">✦</span> CLEAN CUTS <span className="text-accent-foreground/40">✦</span> TIMELESS STYLE <span className="text-accent-foreground/40">✦</span>
          </span>
        ))}
      </motion.div>
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

          {/* Stats block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { num: "10+", label: "YEARS EXPERIENCE" },
              { num: "∞", label: "HAPPY CLIENTS" },
              { num: "2ND", label: "GENERATION BARBER" },
              { num: "1", label: "PASSION" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-secondary border border-border p-8 text-center hover:border-accent/30 transition-colors"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">{stat.num}</p>
                <p className="font-heading text-[10px] tracking-[0.2em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>


  </Layout>
);

export default Index;
