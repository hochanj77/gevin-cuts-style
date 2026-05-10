import { motion } from "framer-motion";
import { MapPin, Instagram, MessageSquare } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Layout from "@/components/Layout";
import { GEVIN_PHONE, PREFILLED_MESSAGE, CONTACT_PAGE_URL } from "@/config";
import { formatPhone } from "@/lib/formatPhone";

const Contact = () => {
  const smsHref = `sms:${GEVIN_PHONE}?body=${encodeURIComponent(PREFILLED_MESSAGE)}`;
  const formattedPhone = formatPhone(GEVIN_PHONE);

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
            <h1 className="font-heading text-4xl md:text-7xl font-bold mb-3 md:mb-4"><span className="text-foreground">GET IN </span><span className="text-chrome text-serif-italic italic">touch</span></h1>
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
            {/* Primary action: Text Gevin */}
            <a
              href={smsHref}
              className="group relative flex items-start gap-4 rounded-2xl border border-accent/40 bg-foreground/[0.06] backdrop-blur-xl px-5 py-4 shadow-[0_0_40px_-12px_hsl(var(--accent)/0.45),inset_0_1px_0_0_hsl(var(--foreground)/0.08)] transition-all hover:border-accent/70 hover:bg-foreground/[0.09]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.12] via-transparent to-transparent pointer-events-none" />
              <MessageSquare className="text-accent mt-1 shrink-0 relative" size={20} />
              <div className="relative">
                <h3 className="font-heading text-lg text-foreground mb-1">TEXT GEVIN</h3>
                <p className="text-muted-foreground text-sm">Tap to send a text and book your cut</p>
              </div>
            </a>
            <p className="-mt-3 text-xs text-muted-foreground text-center sm:text-left sm:pl-5">
              On desktop? Text <span className="font-mono text-foreground/80">{formattedPhone}</span>
            </p>

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
            <div className="group relative flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-5 rounded-2xl border border-accent/40 bg-foreground/[0.06] backdrop-blur-xl px-5 py-5 shadow-[0_0_40px_-12px_hsl(var(--accent)/0.45),inset_0_1px_0_0_hsl(var(--foreground)/0.08)] text-center sm:text-left transition-all hover:border-accent/70 hover:bg-foreground/[0.09]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.12] via-transparent to-transparent pointer-events-none" />
              <div className="relative rounded-xl bg-white p-3 border border-foreground/10 shrink-0">
                <QRCodeSVG
                  value={CONTACT_PAGE_URL}
                  size={120}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="H"
                  marginSize={2}
                />
              </div>
              <div className="relative">
                <h3 className="font-heading text-lg text-foreground mb-1">SCAN TO BOOK</h3>
                <p className="text-muted-foreground text-sm">Share this code so others can text Gevin.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
