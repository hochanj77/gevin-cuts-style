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
      <AnimatePresence mode="sync" initial={false}>
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className={cn("absolute inset-0 w-full h-full object-cover", imgClassName)}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageShuffle;
