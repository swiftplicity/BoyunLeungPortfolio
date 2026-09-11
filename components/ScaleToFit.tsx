import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScaleToFit({ designWidth, designHeight, children }: { designWidth: number; designHeight: number; children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const update = () => setScale(outer.offsetWidth / designWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(outer);
    return () => observer.disconnect();
  }, [designWidth]);

  return (
    <div ref={outerRef} className="w-full" style={{ height: designHeight * scale }}>
      <div style={{ width: designWidth, height: designHeight, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </div>
  );
}
