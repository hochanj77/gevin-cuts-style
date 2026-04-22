import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SCISSOR = String.raw`
        ___
       /  /
      /  /
   __/  /__
  /__    __\
     |  |
   __|  |__
  <__    __>
     |  |
     |  |
     >--<
    /    \
   (      )
    \____/
`;

const AsciiLoader = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("ascii-loader-shown")) return;
    sessionStorage.setItem("ascii-loader-shown", "1");
    setShow(true);
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background overflow-hidden"
          aria-hidden
        >
          {/* CRT scanlines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, hsl(var(--accent) / 0.5) 0px, hsl(var(--accent) / 0.5) 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* Vertical cut line trailing the scissor */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-px bg-gradient-to-b from-accent via-accent/60 to-transparent shadow-[0_0_12px_hsl(var(--accent))]"
          />

          {/* Falling scissor */}
          <motion.pre
            initial={{ y: "-30vh" }}
            animate={{ y: "100vh" }}
            transition={{ duration: 2, ease: [0.55, 0.05, 0.55, 0.95] }}
            className="absolute left-1/2 -translate-x-1/2 font-mono text-accent text-xs sm:text-sm leading-[1.05] whitespace-pre select-none"
            style={{
              textShadow:
                "0 0 8px hsl(var(--accent) / 0.8), 0 0 18px hsl(var(--accent) / 0.4)",
            }}
          >
            {SCISSOR}
          </motion.pre>

          {/* Bottom HUD text */}
          <div className="absolute bottom-10 left-0 right-0 text-center font-mono text-accent text-xs tracking-[0.4em]">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.4, times: [0, 0.2, 0.85, 1] }}
            >
              [ CUTTING_IN ]
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AsciiLoader;
