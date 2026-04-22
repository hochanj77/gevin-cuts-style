import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SmoothImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

/**
 * Image with smooth fade-in + subtle zoom on load and a low-contrast
 * shimmer placeholder. Drop-in replacement for <img>.
 */
const SmoothImage = ({
  className,
  wrapperClassName,
  loading = "lazy",
  decoding = "async",
  onLoad,
  ...props
}: SmoothImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <span
      className={cn(
        "relative block overflow-hidden",
        wrapperClassName
      )}
    >
      {!loaded && (
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-foreground/[0.08] to-foreground/[0.04] animate-pulse"
        />
      )}
      <img
        {...props}
        loading={loading}
        decoding={decoding}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "transition-[opacity,transform,filter] duration-700 ease-out will-change-[opacity,transform]",
          loaded
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-[1.02] blur-sm",
          className
        )}
      />
    </span>
  );
};

export default SmoothImage;
