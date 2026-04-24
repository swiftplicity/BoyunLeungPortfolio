import React, { useRef, useEffect } from "react";

export function ProactiveAISupport() {
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

  return (
    <div
      ref={frameRef}
      className="w-full h-full rounded-2xl shadow-lg overflow-hidden relative"
      style={{ background: "linear-gradient(160deg,#0a0e1a 0%,#0f1a2e 40%,#0c1424 100%)", aspectRatio: "3/2" }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", width: "100%", height: "100%" }}
      />
      <svg width="100%" height="100%" viewBox="0 0 420 280" preserveAspectRatio="xMidYMid meet" style={{ position: "relative" }}>
        <defs>
          <marker id="arr" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M1 1L6 4L1 7" fill="none" stroke="context-stroke" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
          <style>{`
            @keyframes spin { to { transform: rotate(360deg); } }
            @keyframes dash { to { stroke-dashoffset: -30; } }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            .spin-ring {
              animation: spin 60s linear infinite;
              transform-origin: 210px 136px;
            }
            .flow-path-pink {
              animation: dash 2s linear infinite;
            }
            .flow-path-yellow {
              animation: dash 2s linear infinite;
              animation-delay: 0.7s;
            }
            .flow-path-mint {
              animation: dash 2s linear infinite;
              animation-delay: 1.4s;
            }
            .fade-1 { opacity: 0; animation: fadeIn 0.5s ease 0.2s forwards; }
            .fade-2 { opacity: 0; animation: fadeIn 0.5s ease 0.5s forwards; }
            .fade-3 { opacity: 0; animation: fadeIn 0.5s ease 0.8s forwards; }
            .fade-4 { opacity: 0; animation: fadeIn 0.5s ease 1.2s forwards; }
            .fade-5 { opacity: 0; animation: fadeIn 0.4s ease 1.5s forwards; }
            .fade-6 { opacity: 0; animation: fadeIn 0.4s ease 1.7s forwards; }
            .fade-7 { opacity: 0; animation: fadeIn 0.4s ease 1.9s forwards; }
            .fade-8 { opacity: 0; animation: fadeIn 0.6s ease 2.2s forwards; }
            @media (prefers-reduced-motion: reduce) {
              .spin-ring, .flow-path-pink, .flow-path-yellow, .flow-path-mint { animation: none; }
              .fade-1,.fade-2,.fade-3,.fade-4,.fade-5,.fade-6,.fade-7,.fade-8 { opacity: 1; animation: none; }
            }
          `}</style>
        </defs>

        <g className="spin-ring">
          <circle cx="210" cy="136" r="108" fill="none" stroke="rgba(184,180,216,0.04)" strokeWidth="0.5" strokeDasharray="4 8"/>
        </g>

        <path className="flow-path-pink" d="M138 78 Q210 40 282 78" fill="none" stroke="#F0AAC4" strokeWidth="0.8" opacity="0.3" strokeDasharray="6 4" markerEnd="url(#arr)"/>
        <path className="flow-path-yellow" d="M296 108 Q330 170 262 210" fill="none" stroke="#F0D650" strokeWidth="0.8" opacity="0.3" strokeDasharray="6 4" markerEnd="url(#arr)"/>
        <path className="flow-path-mint" d="M158 210 Q90 170 124 108" fill="none" stroke="#B2F0E4" strokeWidth="0.8" opacity="0.3" strokeDasharray="6 4" markerEnd="url(#arr)"/>

        <g className="fade-1">
          <circle cx="130" cy="88" r="32" fill="rgba(240,170,196,0.06)" stroke="#F0AAC4" strokeWidth="0.5"/>
          <text x="130" y="84" textAnchor="middle" fontSize="7" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">Identify</text>
          <text x="130" y="95" textAnchor="middle" fontSize="7" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">patterns</text>
          <text x="130" y="130" textAnchor="middle" fontSize="5.5" fill="rgba(160,170,200,0.45)" fontFamily="-apple-system,system-ui,sans-serif">Live ticket data</text>
        </g>

        <g className="fade-2">
          <circle cx="290" cy="88" r="32" fill="rgba(240,214,80,0.06)" stroke="#F0D650" strokeWidth="0.5"/>
          <text x="290" y="81" textAnchor="middle" fontSize="7" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">Update</text>
          <text x="290" y="92" textAnchor="middle" fontSize="7" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">knowledgebase</text>
          <text x="290" y="130" textAnchor="middle" fontSize="5.5" fill="rgba(160,170,200,0.45)" fontFamily="-apple-system,system-ui,sans-serif">Resolve known issues</text>
        </g>

        <g className="fade-3">
          <circle cx="210" cy="200" r="32" fill="rgba(178,240,228,0.06)" stroke="#B2F0E4" strokeWidth="0.5"/>
          <text x="210" y="196" textAnchor="middle" fontSize="7" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">Resolve</text>
          <text x="210" y="207" textAnchor="middle" fontSize="7" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">more tickets</text>
          <text x="210" y="242" textAnchor="middle" fontSize="5.5" fill="rgba(160,170,200,0.45)" fontFamily="-apple-system,system-ui,sans-serif">Fewer reach agents</text>
        </g>

        <g className="fade-4">
          <text x="210" y="134" textAnchor="middle" fontSize="5.5" letterSpacing="1.5" fill="rgba(184,180,216,0.25)" fontFamily="-apple-system,system-ui,sans-serif">CONTINUOUS</text>
          <text x="210" y="144" textAnchor="middle" fontSize="5.5" letterSpacing="1.5" fill="rgba(184,180,216,0.25)" fontFamily="-apple-system,system-ui,sans-serif">LOOP</text>
        </g>

        <text className="fade-5" x="210" y="52" textAnchor="middle" fontSize="5" fill="rgba(240,170,196,0.35)" fontFamily="-apple-system,system-ui,sans-serif" fontStyle="italic">informs</text>
        <text className="fade-6" x="306" y="168" textAnchor="middle" fontSize="5" fill="rgba(240,214,80,0.35)" fontFamily="-apple-system,system-ui,sans-serif" fontStyle="italic">improves</text>
        <text className="fade-7" x="114" y="168" textAnchor="middle" fontSize="5" fill="rgba(178,240,228,0.35)" fontFamily="-apple-system,system-ui,sans-serif" fontStyle="italic">surfaces new</text>

        <g className="fade-8">
          <rect x="320" y="240" width="90" height="30" rx="6" fill="rgba(240,170,196,0.06)" stroke="rgba(240,170,196,0.15)" strokeWidth="0.5"/>
          <text x="365" y="254" textAnchor="middle" fontSize="11" fontWeight="500" fill="rgba(240,170,196,0.8)" fontFamily="-apple-system,system-ui,sans-serif">~50%</text>
          <text x="365" y="264" textAnchor="middle" fontSize="5.5" fill="rgba(160,170,200,0.45)" fontFamily="-apple-system,system-ui,sans-serif">fewer requests</text>
        </g>
      </svg>
    </div>
  );
}
