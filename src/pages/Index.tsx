import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero.jpg";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Gevin cutting hair" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="relative container h-full flex flex-col justify-end pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-accent text-sm md:text-base tracking-[0.3em] mb-4">
            HAIRSTYLIST & CREATIVE
          </p>
          <h1 className="font-heading text-5xl md:text-8xl font-bold leading-[0.9] text-foreground mb-6">
            FRESH FADES.
            <br />
            <span className="text-accent">CLEAN CUTS.</span>
          </h1>
          <p className="text-muted-foreground max-w-md text-base md:text-lg mb-8">
            10 years of precision craftsmanship. More than a haircut — an experience.
          </p>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="font-heading text-sm tracking-[0.2em] bg-foreground text-background px-8 py-3 hover:bg-accent hover:text-accent-foreground transition-all"
            >
              BOOK NOW
            </Link>
            <Link
              to="/portfolio"
              className="font-heading text-sm tracking-[0.2em] border border-foreground text-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all"
            >
              VIEW WORK
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Tagline strip */}
    <section className="bg-secondary py-8 border-y border-border">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
        <span className="font-heading text-lg md:text-xl tracking-[0.2em] text-muted-foreground">FROM FRESH FADES</span>
        <span className="w-12 h-px bg-accent hidden md:block" />
        <span className="font-heading text-lg md:text-xl tracking-[0.2em] text-foreground">TO TIMELESS STYLE</span>
      </div>
    </section>

    {/* Intro */}
    <section className="py-20 md:py-32">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            THE CRAFT
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I take pride in my craft and achieving the most optimal results for my clients.
            I provide more than just a haircut — but an experience that impacts your life out the chair.
            Guided by 10 years of cutting and learning from the best, I bring a refined eye to every client.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 font-heading text-sm tracking-[0.2em] border-b border-accent text-accent pb-1 hover:text-foreground hover:border-foreground transition-all"
          >
            LEARN MORE
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
