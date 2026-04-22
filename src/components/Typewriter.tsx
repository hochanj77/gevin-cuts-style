import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  cursorClassName?: string;
}

const Typewriter = ({
  text,
  speed = 28,
  startDelay = 600,
  className = "",
  cursorClassName = "",
}: TypewriterProps) => {
  const [shown, setShown] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (shown.length >= text.length) return;
    const t = setTimeout(() => {
      setShown(text.slice(0, shown.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [shown, started, text, speed]);

  const done = shown.length >= text.length;

  return (
    <span className={className}>
      {shown}
      <span
        className={`inline-block w-[0.55em] h-[1em] -mb-[0.15em] ml-0.5 align-middle ${cursorClassName} ${
          done ? "animate-pulse" : ""
        }`}
        style={{ background: "currentColor" }}
        aria-hidden
      />
    </span>
  );
};

export default Typewriter;
