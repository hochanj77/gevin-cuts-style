import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import SmoothImage from "@/components/SmoothImage";

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p7 from "@/assets/portfolio-7.jpg";
import p8 from "@/assets/portfolio-8.jpg";
import p9 from "@/assets/portfolio-9.jpg";
import p11 from "@/assets/portfolio-11.jpg";
import p12 from "@/assets/portfolio-12.jpg";
import p13 from "@/assets/portfolio-13.jpg";
import p14 from "@/assets/portfolio-14.jpg";
import p15 from "@/assets/portfolio-15.jpg";
import p16 from "@/assets/portfolio-16.jpg";
import p17 from "@/assets/portfolio-17.jpg";
import p18 from "@/assets/portfolio-18.jpg";

const images = [p1, p2, p3, p4, p5, p7, p8, p9, p11, p12, p13, p14, p15, p16, p17, p18];

const Portfolio = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4">PORTFOLIO</h1>
            <div className="w-16 h-px bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-md mx-auto">
              A selection of cuts and styles. Every client, a unique canvas.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="aspect-square overflow-hidden cursor-pointer group relative rounded-2xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl p-1 shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.08)] hover:border-accent/40 transition-all"
                onClick={() => setSelected(src)}
              >
                <motion.img
                  src={src}
                  alt={`Haircut ${i + 1}`}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-110"
                  whileHover={{ filter: "brightness(1.1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selected}
              alt="Portfolio detail"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Portfolio;
