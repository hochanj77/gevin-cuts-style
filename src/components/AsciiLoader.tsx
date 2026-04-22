import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GEVIN_ASCII = String.raw`
 ██████╗ ███████╗██╗   ██╗██╗███╗   ██╗
██╔════╝ ██╔════╝██║   ██║██║████╗  ██║
██║  ███╗█████╗  ██║   ██║██║██╔██╗ ██║
██║   ██║██╔══╝  ╚██╗ ██╔╝██║██║╚██╗██║
╚██████╔╝███████╗ ╚████╔╝ ██║██║ ╚████║
 ╚═════╝ ╚══════╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝
`;

const SCISSOR = "✂";

const AsciiLoader = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("ascii-loader-shown")) return;
    sessionStorage.setItem("ascii-loader-shown", "1");
    setShow(true);

    const start = performance.now();
    const duration = 2400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const exit = setTimeout(() => setShow(false), duration + 400);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exit);
    };
  }, []);

  const BAR_WIDTH = 28;
  const filled = Math.round(progress * BAR_WIDTH);
  const bar = "█".repeat(filled) + "░".repeat(BAR_WIDTH - filled);
  const pct = Math.round(progress * 100).toString().padStart(3, " ");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
          aria-hidden
        >
          {/* Ambient green glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-accent/15 blur-[140px]" />
          </div>

          {/* Terminal grid */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            }}
          />

          {/* CRT scanlines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.1] mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, hsl(var(--accent) / 0.6) 0px, hsl(var(--accent) / 0.6) 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* Terminal window */}
          <div className="relative w-[min(92vw,640px)] rounded-lg border border-accent/40 bg-background/80 backdrop-blur-md shadow-[0_0_60px_-10px_hsl(var(--accent)/0.5),inset_0_0_0_1px_hsl(var(--accent)/0.15)] overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-accent/30 bg-accent/[0.06]">
              <span className="w-2.5 h-2.5 rounded-full bg-accent/80 shadow-[0_0_6px_hsl(var(--accent))]" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
              <p className="ml-2 font-mono text-[10px] tracking-[0.3em] text-accent/80">
                gevin@theshop:~
              </p>
            </div>

            {/* Body */}
            <div className="px-5 sm:px-8 py-6 sm:py-8 font-mono text-accent">
              <pre
                className="text-accent text-[7px] xs:text-[8px] sm:text-[10px] md:text-xs leading-[1.05] whitespace-pre select-none"
                style={{
                  textShadow:
                    "0 0 8px hsl(var(--accent) / 0.8), 0 0 16px hsl(var(--accent) / 0.4)",
                }}
              >
                {GEVIN_ASCII}
              </pre>

              {/* Progress row */}
              <div className="mt-5 flex items-center gap-3 text-[10px] sm:text-xs">
                <motion.span
                  animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="inline-block text-accent text-base sm:text-lg"
                  style={{
                    textShadow: "0 0 8px hsl(var(--accent) / 0.8)",
                  }}
                >
                  {SCISSOR}
                </motion.span>
                <span className="text-accent/90">[{bar}]</span>
                <span className="text-accent">{pct}%</span>
              </div>

              <p className="mt-3 text-[10px] sm:text-xs text-accent/70">
                {">"} loading_chair_<span className="animate-[blink_1.1s_steps(2,end)_infinite]">_</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AsciiLoader;
