import React, { useRef, useEffect } from "react";

export function KeyFindings() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    if (!canvas || !frame) return;
    canvas.width = frame.offsetWidth * 2;
    canvas.height = frame.offsetHeight * 2;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
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
  }, []);

  const cardBase: React.CSSProperties = {
    borderRadius: 8,
    padding: "14px 16px",
    fontSize: 12,
    lineHeight: 1.55,
    color: "rgba(220,225,240,0.8)",
    flex: 1,
  };

  const purple: React.CSSProperties = { ...cardBase, background: "rgba(139,128,206,0.08)", border: "0.5px solid rgba(139,128,206,0.2)" };
  const pink: React.CSSProperties = { ...cardBase, background: "rgba(240,170,196,0.08)", border: "0.5px solid rgba(240,170,196,0.2)" };
  const mint: React.CSSProperties = { ...cardBase, background: "rgba(178,240,228,0.08)", border: "0.5px solid rgba(178,240,228,0.2)" };

  const section: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 10, flex: 1 };
  const sectionTitle: React.CSSProperties = { fontSize: 11, fontWeight: 600, color: "rgba(220,225,240,0.5)", margin: 0, textTransform: "uppercase", letterSpacing: "0.6px" };
  const cardRow: React.CSSProperties = { display: "flex", gap: 10, flex: 1 };

  return (
    <div
      ref={frameRef}
      className="w-full h-full rounded-2xl shadow-lg overflow-hidden relative"
      style={{ background: "linear-gradient(160deg,#0a0e1a 0%,#0f1a2e 40%,#0c1424 100%)", aspectRatio: "3/2", padding: "36px 32px" }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", width: "100%", height: "100%" }}
      />
      <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
        <h1 style={{ fontSize: 18, fontWeight: 600, color: "rgba(220,225,240,0.9)", margin: 0, letterSpacing: "-0.3px", flexShrink: 0 }}>
          Key Findings and Discoveries
        </h1>

        {/* Row 1 */}
        <div style={{ display: "flex", gap: 16, flex: 1 }}>
          <div style={section}>
            <p style={sectionTitle}>Stakeholder Interviews</p>
            <div style={{ display: "flex", gap: 10, flex: 1 }}>
              <div style={purple}>Usability issues specifically with the issues page</div>
              <div style={purple}>Grouping causes more issues than it solves</div>
              <div style={purple}>Unclear when learners respond</div>
              <div style={mint}>Lots of tickets that are due to unclear explanations</div>
            </div>
          </div>

          <div style={{ ...section, maxWidth: "30%" }}>
            <p style={sectionTitle}>Heuristic Analysis</p>
            <div style={cardRow}>
              <div style={purple}>Difficulty finding data that would be useful for solving tickets</div>
              <div style={purple}>Tickets need to be manually moved through different states</div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ display: "flex", gap: 16, flex: 1 }}>
          <div style={section}>
            <p style={sectionTitle}>Live Ticket Review</p>
            <div style={cardRow}>
              <div style={pink}>Agents send multiple messages as you would when texting</div>
              <div style={pink}>Some AI Agents don't try to help but immediately open tickets</div>
            </div>
          </div>

          <div style={section}>
            <p style={sectionTitle}>Ticket Type</p>
            <div style={cardRow}>
              <div style={purple}>Different ticket types require different kinds of "treatments"</div>
              <div style={mint}>Many issues should have been able to be addressed by the AI Agents</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
