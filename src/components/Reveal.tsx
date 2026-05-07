"use client";

import {
  createElement,
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: boolean;
  threshold?: number;
  style?: React.CSSProperties;
};

export default function Reveal({
  children,
  as = "div",
  className = "",
  stagger = false,
  threshold = 0.12,
  style,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const cls = `${stagger ? "stagger" : "reveal"} ${className}`.trim();
  return createElement(as, { ref, className: cls, style }, children);
}
