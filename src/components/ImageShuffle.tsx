import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageShuffleProps {
  images: { src: string; alt: string }[];
  interval?: number;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

const ImageShuffle = ({
  images,
  interval = 4200,
  className,
  imgClassName,
  eager = false,
}: ImageShuffleProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  // Preload upcoming images
  useEffect(() => {
    images.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {images.map((img, i) => (
        <motion.img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading={eager && i === 0 ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          style={{ willChange: "opacity", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          className={cn("absolute inset-0 w-full h-full object-cover", imgClassName)}
        />
      ))}
    </div>
  );
};

export default ImageShuffle;
