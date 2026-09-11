import React, { useRef, useEffect } from "react";

type Tone = "purple" | "pink" | "mint";

const toneStyles: Record<Tone, React.CSSProperties> = {
  purple: { background: "rgba(139,128,206,0.08)", border: "0.5px solid rgba(139,128,206,0.2)" },
  pink: { background: "rgba(240,170,196,0.08)", border: "0.5px solid rgba(240,170,196,0.2)" },
  mint: { background: "rgba(178,240,228,0.08)", border: "0.5px solid rgba(178,240,228,0.2)" },
};

const groups: { title: string; items: { tone: Tone; text: string }[] }[] = [
  {
    title: "Stakeholder Interviews",
    items: [
      { tone: "purple", text: "Usability issues specifically with the issues page" },
      { tone: "purple", text: "Grouping causes more issues than it solves" },
      { tone: "mint", text: "Lots of tickets that are due to unclear explanations" },
    ],
  },
  {
    title: "Heuristic Analysis",
    items: [
      { tone: "purple", text: "Difficulty finding data that would be useful for solving tickets" },
      { tone: "purple", text: "Tickets need to be manually moved through different states" },
    ],
  },
  {
    title: "Live Ticket Review",
    items: [
      { tone: "pink", text: "Agents send multiple messages as you would when texting" },
      { tone: "pink", text: "Some AI Agents don't try to help but immediately open tickets" },
    ],
  },
  {
    title: "Ticket Type",
    items: [
      { tone: "purple", text: 'Different ticket types require different kinds of "treatments"' },
      { tone: "mint", text: "Many issues should have been able to be addressed by the AI Agents" },
    ],
  },
];

export function KeyFindings() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    if (!canvas || !frame) return;
    const draw = () => {
      canvas.width = frame.offsetWidth * 2;
      canvas.height = frame.offsetHeight * 2;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 200; i++) {
        const sx = Math.random() * canvas.width;
        const sy = Math.random() * canvas.height;
        const r = Math.random() * 1.1 + 0.2;
        const bright = Math.random();
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184,180,216,${bright < 0.08 ? 0.4 : bright < 0.25 ? 0.14 : 0.05})`;
        ctx.fill();
      }
    };
    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      className="w-full h-full rounded-2xl shadow-lg overflow-hidden relative"
      style={{
        background: "linear-gradient(160deg,#0a0e1a 0%,#0f1a2e 40%,#0c1424 100%)",
        aspectRatio: "3/2",
        padding: "5.5% 5%",
        containerType: "inline-size",
      } as React.CSSProperties}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", width: "100%", height: "100%" }}
      />

      <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", gap: "3cqw" }}>
        <h1 style={{ fontSize: "clamp(10px, 3cqw, 18px)", fontWeight: 600, color: "rgba(220,225,240,0.9)", margin: 0, letterSpacing: "-0.3px", flexShrink: 0 }}>
          Key Findings and Discoveries
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "2.5cqw", flex: 1, minHeight: 0 }}>
          {groups.map(g => (
            <div key={g.title} style={{ display: "flex", flexDirection: "column", gap: "1.2cqw", minHeight: 0 }}>
              <p style={{ fontSize: "clamp(7px, 1.7cqw, 11px)", fontWeight: 600, color: "rgba(220,225,240,0.5)", margin: 0, textTransform: "uppercase", letterSpacing: "0.4px" }}>
                {g.title}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1cqw", flex: 1, minHeight: 0 }}>
                {g.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      ...toneStyles[item.tone],
                      borderRadius: 8,
                      padding: "2cqw 2.2cqw",
                      fontSize: "clamp(7px, 1.7cqw, 12px)",
                      lineHeight: 1.4,
                      color: "rgba(220,225,240,0.8)",
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
