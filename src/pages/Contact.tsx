import { motion } from "framer-motion";
import { MapPin, Instagram } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="relative py-14 md:py-32 overflow-hidden">
        {/* Ambient liquid background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-[120px]" />
          <div className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-foreground/10 blur-[120px]" />
        </div>

        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-16"
          >
            <h1 className="font-heading text-4xl md:text-7xl font-bold text-foreground mb-3 md:mb-4">GET IN TOUCH</h1>
            <div className="w-16 h-px bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-md mx-auto">
              Ready for a fresh cut? Book an appointment or drop a message.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {[
              { Icon: MapPin, title: "LOCATION", body: <>The Shop Barbershop<br />Est. 2003</> },
              {
                Icon: Instagram,
                title: "SOCIAL",
                body: (
                  <a href="https://instagram.com/gevcast" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                    @gevcast
                  </a>
                ),
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="group relative flex items-start gap-4 rounded-2xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl px-5 py-4 shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.08)] transition-all hover:border-accent/40 hover:bg-foreground/[0.07]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.08] via-transparent to-transparent pointer-events-none" />
                <Icon className="text-accent mt-1 shrink-0 relative" size={20} />
                <div className="relative">
                  <h3 className="font-heading text-lg text-foreground mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm">{body}</p>
                </div>
              </div>
            ))}

            {/* QR code card */}
            <div className="relative flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-5 rounded-2xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl px-5 py-5 shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.08)] text-center sm:text-left">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.08] via-transparent to-transparent pointer-events-none" />
              <div className="relative rounded-xl bg-white p-3 border border-foreground/10 shrink-0">
                <QRCodeSVG
                  value={typeof window !== "undefined" ? window.location.href : "https://gevin-cuts-style.lovable.app/contact"}
                  size={120}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="H"
                />
              </div>
              <div className="relative">
                <h3 className="font-heading text-lg text-foreground mb-1">SCAN TO BOOK</h3>
                <p className="text-muted-foreground text-sm">Save this page or share it instantly.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
