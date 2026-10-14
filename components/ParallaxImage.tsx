"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  intensity = 30,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const windowCenter = window.innerHeight / 2;
      setOffset((center - windowCenter) / intensity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [intensity]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ y: offset }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </div>
  );
}