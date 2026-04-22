import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Award, Users, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SmoothImage from "@/components/SmoothImage";
import { Button } from "@/components/ui/button";

import portrait from "@/assets/portfolio-2.jpg";
import detail1 from "@/assets/portfolio-7.jpg";
import detail2 from "@/assets/portfolio-11.jpg";
import detail3 from "@/assets/portfolio-15.jpg";
import wide from "@/assets/portfolio-9.jpg";

const stats = [
  { icon: Scissors, value: "10+", label: "Years Cutting" },
  { icon: Users, value: "1000+", label: "Clients Styled" },
  { icon: Award, value: "20+", label: "Years Legacy" },
  { icon: Sparkles, value: "∞", label: "Stories Told" },
];

const About = () => (
  <Layout>
    {/* Ambient liquid background */}
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[36rem] h-[36rem] rounded-full bg-foreground/5 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-accent/5 blur-[100px]" />
    </div>

    {/* HERO */}
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: huge typographic statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <p className="font-heading text-xs md:text-sm tracking-[0.3em] text-accent mb-6">
              ABOUT — EST. 2014
            </p>
            <h1 className="font-heading font-bold leading-[0.85] tracking-tight">
              <span className="block text-6xl md:text-8xl lg:text-[9rem] text-foreground">GEVIN</span>
              <span className="block text-4xl md:text-6xl lg:text-7xl text-muted-foreground mt-2">
                THE CRAFT
              </span>
              <span className="block text-2xl md:text-4xl lg:text-5xl text-accent mt-2 italic font-normal">
                & the chair.
              </span>
            </h1>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-px bg-accent" />
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Hairstylist · Creative · Confidant
              </p>
            </div>
          </motion.div>

          {/* Right: portrait in glass frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass glass-sheen p-2">
              <SmoothImage
                src={portrait}
                alt="Gevin at work"
                loading="eager"
                wrapperClassName="w-full h-full rounded-2xl"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-heading text-xs tracking-[0.25em] text-accent mb-1">SINCE 2014</p>
                <p className="font-heading text-2xl text-foreground">A DECADE BEHIND THE CHAIR</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* STATS STRIP */}
    <section className="py-8 md:py-12">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-sheen rounded-2xl p-5 md:p-6 text-center"
            >
              <s.icon className="w-5 h-5 mx-auto mb-3 text-accent" />
              <p className="font-heading text-3xl md:text-4xl text-foreground">{s.value}</p>
              <p className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground mt-2 uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* STORY — image + text alternating */}
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl space-y-20 md:space-y-28">
        {/* Block 1 */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass p-1.5">
              <SmoothImage src={detail1} alt="Detail of a fade" wrapperClassName="w-full h-full rounded-xl" className="w-full h-full object-cover rounded-xl" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <p className="font-heading text-xs tracking-[0.3em] text-accent mb-4">01 — THE CRAFT</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              MORE THAN A HAIRCUT.<br />
              <span className="text-muted-foreground">An experience.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a full-time hairstylist and creative. I take pride in my craft and in delivering
                the most optimal result for every client — what truly suits them, not just a trend.
              </p>
              <p>
                I cut people who appreciate the passion behind the work and who carry that same
                positive outlook on life. I'm more than a barber — I'm a friend and an ear to my clients.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Block 2 — reversed */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 md:order-1 order-2"
          >
            <p className="font-heading text-xs tracking-[0.3em] text-accent mb-4">02 — THE LEGACY</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              RAISED INSIDE<br />
              <span className="text-muted-foreground">"The Shop."</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For 10 years I've been cutting at <span className="text-foreground">The Shop</span> — the
                prestigious barbershop my father has owned since 2003. He's a celebrated celebrity barber
                who has cut <span className="text-foreground">Jay-Z, Kanye West, Pharrell</span> and many more.
              </p>
              <p>
                Guided by the best, I've developed a refined eye for hairstyling and image consulting —
                and I've been blessed to cut celebrities, important figures, and the people from my
                community who trust me with their look.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 md:order-2 order-1"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass p-1.5">
              <SmoothImage src={detail2} alt="Inside the shop" wrapperClassName="w-full h-full rounded-xl" className="w-full h-full object-cover rounded-xl" />
            </div>
          </motion.div>
        </div>

        {/* Block 3 — wide image with overlay quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden glass glass-sheen p-2"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden">
            <SmoothImage src={wide} alt="At work" wrapperClassName="w-full h-full" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl px-6 md:px-12 lg:px-16">
                <p className="font-heading text-xs tracking-[0.3em] text-accent mb-4">03 — THE PHILOSOPHY</p>
                <blockquote className="font-heading text-2xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                  "I seek to give more than just a haircut —<br />
                  <span className="text-accent italic font-normal">an experience that impacts their life out the chair.</span>"
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Block 4 */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass p-1.5">
              <img src={detail3} alt="Consultation" className="w-full h-full object-cover rounded-xl" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <p className="font-heading text-xs tracking-[0.3em] text-accent mb-4">04 — WHAT'S NEXT</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              FOLLOWING<br />
              <span className="text-muted-foreground">the footsteps.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I listen to my clients in detail and focus on the consultation — so we land closest to
                the result they want, especially the first time around.
              </p>
              <p>
                I plan to follow my father's footsteps and open my own barbershop in the time soon to
                come. Until then — the chair is open.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong glass-sheen rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/20 blur-3xl" />
          <p className="font-heading text-xs tracking-[0.3em] text-accent mb-4 relative">READY WHEN YOU ARE</p>
          <h3 className="font-heading text-3xl md:text-5xl text-foreground mb-6 relative">
            BOOK THE CHAIR.
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 relative">
            Step into a decade of craft — and leave with more than a fresh cut.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">
                Book Now <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
