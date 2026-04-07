import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Instagram } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-20 md:py-32">
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
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">LOCATION</h3>
                  <p className="text-muted-foreground text-sm">The Shop Barbershop<br />Est. 2003</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">PHONE</h3>
                  <p className="text-muted-foreground text-sm">Contact for appointments</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Instagram className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">SOCIAL</h3>
                  <p className="text-muted-foreground text-sm"><a href="https://instagram.com/gevcast" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">@gevcast</a></p>
                </div>
              </div>
            </div>

            {/* Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center"
              >
                <div className="text-center">
                  <h3 className="font-heading text-2xl text-accent mb-2">MESSAGE SENT</h3>
                  <p className="text-muted-foreground">We'll get back to you soon.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors font-body text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors font-body text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors font-body text-sm"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors font-body text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-heading text-sm tracking-[0.2em] bg-foreground text-background py-3 hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
