import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const placeholders = Array.from({ length: 6 }, (_, i) => i + 1);

const Portfolio = () => (
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
          {placeholders.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-square bg-secondary flex items-center justify-center group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
              <span className="font-heading text-muted-foreground text-sm tracking-[0.2em]">CUT {i}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Portfolio images coming soon. Follow on Instagram for the latest work.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
