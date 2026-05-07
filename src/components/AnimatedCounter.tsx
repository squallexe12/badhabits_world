"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  decimals?: number;
  duration?: number;
};

const formatTR = (v: number, decimals: number) =>
  decimals
    ? v.toFixed(decimals).replace(".", ",")
    : Math.round(v).toLocaleString("tr-TR");

export default function AnimatedCounter({
  target,
  decimals = 0,
  duration = 1400,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(formatTR(0, decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const start = performance.now();
          const ease = (t: number) => 1 - Math.pow(1 - t, 3);
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const v = target * ease(t);
            setDisplay(formatTR(v, decimals));
            if (t < 1) raf = requestAnimationFrame(tick);
            else setDisplay(formatTR(target, decimals));
          };
          raf = requestAnimationFrame(tick);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [target, decimals, duration]);

  return <span ref={ref}>{display}</span>;
}
