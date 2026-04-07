import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import aboutImg from "@/assets/portfolio-16.jpg";

const About = () => (
  <Layout>
    {/* Simple header */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container flex items-center justify-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground">ABOUT</h1>
      </div>
    </section>

    <section className="py-20 md:py-32">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              GEVIN
            </h2>
            <p className="font-heading text-sm tracking-[0.2em] text-accent mb-6">HAIRSTYLIST & CREATIVE</p>
            <div className="w-12 h-px bg-accent mb-6" />
            <div className="overflow-hidden rounded-lg border border-border max-w-xs">
              <img
                src={aboutImg}
                alt="Creative haircut by Gevin"
                className="w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              My name is Gevin, and I'm a full-time hairstylist and creative. I take pride in my craft and achieving the most optimal results for my clients and what best suits their needs.
            </p>
            <p>
              I like to cut people who appreciate and recognize my passion for the craft and most importantly who naturally have that same positive outlook on life. I am more than a barber but a friend and an ear to my clients.
            </p>
            <p>
              I provide them with insight I've gathered over my 10 years of cutting hair and dealing with many people and situations. I have been blessed to cut celebrities and important figures as well as people from my community who have trusted me with their hair.
            </p>
            <p>
              I seek to give more than just a haircut, but an experience that impacts their life out the chair. I listen to my client in detail and focus on the consultation to reach the closest result they are looking for, especially the first time around.
            </p>
            <p>
              I have been cutting hair for 10 years at a prestigious barbershop "The Shop," owned by my father since 2003. My father is a well-established celebrity barber who has cut superstars such as Jay-Z, Kanye West, Pharrell, and many more.
            </p>
            <p>
              Having been guided and learned from the best, I have a refined eye in hairstyling and image consulting. I plan to follow his footsteps and open my own barbershop in time soon to come.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
