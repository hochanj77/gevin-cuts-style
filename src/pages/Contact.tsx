import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Instagram } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Ambient liquid background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-[120px]" />
          <div className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-foreground/10 blur-[120px]" />
        </div>

        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4">GET IN TOUCH</h1>
            <div className="w-16 h-px bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-md mx-auto">
              Ready for a fresh cut? Book an appointment or drop a message.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
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
              <div className="relative flex items-center gap-5 rounded-2xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl px-5 py-5 shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.08)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.08] via-transparent to-transparent pointer-events-none" />
                <div className="relative rounded-xl bg-background/80 backdrop-blur-md p-3 border border-foreground/10">
                  <QRCodeSVG
                    value={typeof window !== "undefined" ? window.location.href : "https://gevin-cuts-style.lovable.app/contact"}
                    size={104}
                    bgColor="transparent"
                    fgColor="currentColor"
                    level="M"
                    className="text-foreground"
                  />
                </div>
                <div className="relative">
                  <h3 className="font-heading text-lg text-foreground mb-1">SCAN TO BOOK</h3>
                  <p className="text-muted-foreground text-sm">Save this page or share it instantly.</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative flex items-center justify-center rounded-3xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl p-10 shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.08)]"
              >
                <div className="text-center">
                  <h3 className="font-heading text-2xl text-accent mb-2">MESSAGE SENT</h3>
                  <p className="text-muted-foreground">We'll get back to you soon.</p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative space-y-5 rounded-3xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl p-6 md:p-8 shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.08)]"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-foreground/[0.08] via-transparent to-transparent pointer-events-none" />
                {[
                  { type: "text", placeholder: "Name", required: true },
                  { type: "email", placeholder: "Email", required: true },
                  { type: "tel", placeholder: "Phone", required: false },
                ].map((f) => (
                  <input
                    key={f.placeholder}
                    type={f.type}
                    placeholder={f.placeholder}
                    required={f.required}
                    className="relative w-full rounded-xl bg-background/30 backdrop-blur-md border border-foreground/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:bg-background/40 transition-all font-body text-sm"
                  />
                ))}
                <textarea
                  placeholder="Message"
                  rows={5}
                  required
                  className="relative w-full rounded-xl bg-background/30 backdrop-blur-md border border-foreground/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:bg-background/40 transition-all font-body text-sm resize-none"
                />
                <button
                  type="submit"
                  className="relative w-full rounded-xl font-heading text-sm tracking-[0.2em] bg-gradient-to-r from-accent via-accent to-accent/80 text-accent-foreground py-3.5 hover:shadow-[0_8px_30px_-4px_hsl(var(--accent)/0.5)] hover:brightness-110 transition-all border border-accent/40"
                >
                  SEND MESSAGE
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
