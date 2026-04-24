import React, { useRef, useEffect } from "react";

export function SupportAgentFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    if (!canvas || !frame) return;
    const w = frame.offsetWidth;
    const h = frame.offsetHeight;
    canvas.width = w * 2;
    canvas.height = h * 2;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    for (let i = 0; i < 240; i++) {
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
      <svg width="100%" height="100%" viewBox="-10 -10 530 358" preserveAspectRatio="xMidYMid meet" style={{ position: "relative" }}>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>

        {/* LEFT COLUMN */}
        <circle cx="42" cy="24" r="16" fill="rgba(240,170,196,0.08)" stroke="#F0AAC4" strokeWidth="0.5"/>
        <text x="42" y="22" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.9)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">End</text>
        <text x="42" y="30" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.9)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">user</text>

        <line x1="42" y1="40" x2="42" y2="56" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <rect x="8" y="58" width="68" height="22" rx="4" fill="rgba(139,128,206,0.08)" stroke="#8B80CE" strokeWidth="0.5"/>
        <text x="42" y="72" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif">Creates ticket</text>

        <g transform="translate(82,62)">
          <rect x="0" y="0" width="52" height="12" rx="6" fill="rgba(240,214,80,0.1)" stroke="rgba(240,214,80,0.25)" strokeWidth="0.35"/>
          <rect x="4" y="2.5" width="6" height="4.5" rx="0.8" fill="none" stroke="rgba(240,214,80,0.55)" strokeWidth="0.35"/>
          <path d="M4.5 3l2.5 2 2.5-2" fill="none" stroke="rgba(240,214,80,0.45)" strokeWidth="0.3"/>
          <text x="14" y="8" fontSize="5" fill="rgba(240,214,80,0.55)" fontFamily="-apple-system,system-ui,sans-serif">user notified</text>
        </g>

        <line x1="42" y1="80" x2="42" y2="98" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <rect x="2" y="100" width="80" height="26" rx="4" fill="rgba(139,128,206,0.08)" stroke="#8B80CE" strokeWidth="0.5"/>
        <text x="42" y="111" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif">Assigned based on</text>
        <text x="42" y="120" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif">escalation policy</text>

        <g transform="translate(88,104)">
          <rect x="0" y="0" width="56" height="12" rx="6" fill="rgba(240,214,80,0.1)" stroke="rgba(240,214,80,0.25)" strokeWidth="0.35"/>
          <rect x="4" y="2.5" width="6" height="4.5" rx="0.8" fill="none" stroke="rgba(240,214,80,0.55)" strokeWidth="0.35"/>
          <path d="M4.5 3l2.5 2 2.5-2" fill="none" stroke="rgba(240,214,80,0.45)" strokeWidth="0.3"/>
          <text x="14" y="8" fontSize="5" fill="rgba(240,214,80,0.55)" fontFamily="-apple-system,system-ui,sans-serif">agent notified</text>
        </g>

        <line x1="42" y1="126" x2="42" y2="142" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <circle cx="42" cy="158" r="16" fill="rgba(139,128,206,0.08)" stroke="#8B80CE" strokeWidth="0.5"/>
        <text x="42" y="156" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.9)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">Support</text>
        <text x="42" y="164" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.9)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">agent</text>

        {/* MIDDLE ROW */}
        <line x1="58" y1="158" x2="74" y2="158" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <polygon points="90,142 106,158 90,174 74,158" fill="rgba(178,240,228,0.08)" stroke="#B2F0E4" strokeWidth="0.5"/>
        <text x="90" y="161" textAnchor="middle" fontSize="5.5" fill="rgba(178,240,228,0.85)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">Open</text>

        <line x1="106" y1="158" x2="122" y2="158" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <rect x="124" y="147" width="62" height="22" rx="4" fill="rgba(139,128,206,0.08)" stroke="#8B80CE" strokeWidth="0.5"/>
        <text x="155" y="161" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif">Reviews ticket</text>

        <g transform="translate(192,139)">
          <rect x="0" y="0" width="52" height="12" rx="6" fill="rgba(240,214,80,0.1)" stroke="rgba(240,214,80,0.25)" strokeWidth="0.35"/>
          <rect x="4" y="2.5" width="6" height="4.5" rx="0.8" fill="none" stroke="rgba(240,214,80,0.55)" strokeWidth="0.35"/>
          <path d="M4.5 3l2.5 2 2.5-2" fill="none" stroke="rgba(240,214,80,0.45)" strokeWidth="0.3"/>
          <text x="14" y="8" fontSize="5" fill="rgba(240,214,80,0.55)" fontFamily="-apple-system,system-ui,sans-serif">user notified</text>
        </g>

        <line x1="186" y1="158" x2="254" y2="158" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <polygon points="272,140 294,158 272,176 250,158" fill="rgba(178,240,228,0.08)" stroke="#B2F0E4" strokeWidth="0.5"/>
        <text x="272" y="156" textAnchor="middle" fontSize="5" fill="rgba(178,240,228,0.85)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">In</text>
        <text x="272" y="164" textAnchor="middle" fontSize="5" fill="rgba(178,240,228,0.85)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">progress</text>

        {/* BRANCH UP: Clear cut */}
        <line x1="272" y1="140" x2="272" y2="56" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <rect x="234" y="28" width="86" height="26" rx="4" fill="rgba(139,128,206,0.08)" stroke="#8B80CE" strokeWidth="0.5"/>
        <text x="277" y="39" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif">Clear cut solution</text>
        <text x="277" y="48" textAnchor="middle" fontSize="5" fill="rgba(160,170,200,0.4)" fontFamily="-apple-system,system-ui,sans-serif">won't fix / already resolved</text>

        <line x1="320" y1="41" x2="378" y2="41" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <g transform="translate(330,33)">
          <rect x="0" y="0" width="42" height="12" rx="6" fill="rgba(240,214,80,0.1)" stroke="rgba(240,214,80,0.25)" strokeWidth="0.35"/>
          <rect x="4" y="2.5" width="6" height="4.5" rx="0.8" fill="none" stroke="rgba(240,214,80,0.55)" strokeWidth="0.35"/>
          <path d="M4.5 3l2.5 2 2.5-2" fill="none" stroke="rgba(240,214,80,0.45)" strokeWidth="0.3"/>
          <text x="14" y="8" fontSize="5" fill="rgba(240,214,80,0.55)" fontFamily="-apple-system,system-ui,sans-serif">resolved</text>
        </g>

        <circle cx="396" cy="41" r="16" fill="rgba(178,240,228,0.1)" stroke="#B2F0E4" strokeWidth="0.5"/>
        <text x="396" y="44" textAnchor="middle" fontSize="6" fill="rgba(178,240,228,0.9)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">Resolved</text>

        {/* BRANCH DOWN: Need more info */}
        <line x1="272" y1="176" x2="272" y2="240" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <g transform="translate(280,198)">
          <rect x="0" y="0" width="44" height="12" rx="6" fill="rgba(240,214,80,0.1)" stroke="rgba(240,214,80,0.25)" strokeWidth="0.35"/>
          <rect x="4" y="2.5" width="6" height="4.5" rx="0.8" fill="none" stroke="rgba(240,214,80,0.55)" strokeWidth="0.35"/>
          <path d="M4.5 3l2.5 2 2.5-2" fill="none" stroke="rgba(240,214,80,0.45)" strokeWidth="0.3"/>
          <text x="14" y="8" fontSize="5" fill="rgba(240,214,80,0.55)" fontFamily="-apple-system,system-ui,sans-serif">follow up</text>
        </g>

        <rect x="236" y="242" width="72" height="22" rx="4" fill="rgba(139,128,206,0.08)" stroke="#8B80CE" strokeWidth="0.5"/>
        <text x="272" y="256" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif">Need more info</text>

        <path d="M308 253 Q340 253 340 216 Q340 178 316 170" fill="none" stroke="rgba(184,180,216,0.2)" strokeWidth="0.5" strokeDasharray="3 2" markerEnd="url(#arrow)"/>

        {/* BRANCH RIGHT: Possible solution */}
        <line x1="294" y1="158" x2="330" y2="158" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <rect x="332" y="143" width="80" height="30" rx="4" fill="rgba(139,128,206,0.08)" stroke="#8B80CE" strokeWidth="0.5"/>
        <text x="372" y="156" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif">Possible solution</text>
        <text x="372" y="166" textAnchor="middle" fontSize="5" fill="rgba(160,170,200,0.4)" fontFamily="-apple-system,system-ui,sans-serif">Asks for feedback</text>

        <g transform="translate(416,130)">
          <rect x="0" y="0" width="44" height="12" rx="6" fill="rgba(240,214,80,0.1)" stroke="rgba(240,214,80,0.25)" strokeWidth="0.35"/>
          <rect x="4" y="2.5" width="6" height="4.5" rx="0.8" fill="none" stroke="rgba(240,214,80,0.55)" strokeWidth="0.35"/>
          <path d="M4.5 3l2.5 2 2.5-2" fill="none" stroke="rgba(240,214,80,0.45)" strokeWidth="0.3"/>
          <text x="14" y="8" fontSize="5" fill="rgba(240,214,80,0.55)" fontFamily="-apple-system,system-ui,sans-serif">follow up</text>
        </g>

        <line x1="412" y1="148" x2="434" y2="112" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <rect x="422" y="88" width="62" height="22" rx="4" fill="rgba(240,170,196,0.08)" stroke="#F0AAC4" strokeWidth="0.5"/>
        <text x="453" y="102" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif">User replied</text>

        <g transform="translate(488,90)">
          <rect x="0" y="0" width="16" height="12" rx="6" fill="rgba(240,214,80,0.1)" stroke="rgba(240,214,80,0.25)" strokeWidth="0.35"/>
          <rect x="4" y="2.5" width="6" height="4.5" rx="0.8" fill="none" stroke="rgba(240,214,80,0.55)" strokeWidth="0.35"/>
          <path d="M4.5 3l2.5 2 2.5-2" fill="none" stroke="rgba(240,214,80,0.45)" strokeWidth="0.3"/>
        </g>

        <path d="M422 104 Q400 118 392 135 Q388 143 386 143" fill="none" stroke="rgba(184,180,216,0.2)" strokeWidth="0.5" strokeDasharray="3 2" markerEnd="url(#arrow)"/>
        <text x="398" y="132" fontSize="4.5" fill="rgba(160,170,200,0.25)" fontFamily="-apple-system,system-ui,sans-serif" fontStyle="italic">back and forth</text>

        <line x1="372" y1="173" x2="372" y2="208" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <rect x="330" y="210" width="92" height="26" rx="4" fill="rgba(240,170,196,0.08)" stroke="#F0AAC4" strokeWidth="0.5"/>
        <text x="376" y="221" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif">User doesn't reply</text>
        <text x="376" y="230" textAnchor="middle" fontSize="5" fill="rgba(160,170,200,0.4)" fontFamily="-apple-system,system-ui,sans-serif">Within time frame</text>

        <g transform="translate(426,214)">
          <rect x="0" y="0" width="38" height="12" rx="6" fill="rgba(240,214,80,0.1)" stroke="rgba(240,214,80,0.25)" strokeWidth="0.35"/>
          <rect x="4" y="2.5" width="6" height="4.5" rx="0.8" fill="none" stroke="rgba(240,214,80,0.55)" strokeWidth="0.35"/>
          <path d="M4.5 3l2.5 2 2.5-2" fill="none" stroke="rgba(240,214,80,0.45)" strokeWidth="0.3"/>
          <text x="14" y="8" fontSize="5" fill="rgba(240,214,80,0.55)" fontFamily="-apple-system,system-ui,sans-serif">closing</text>
        </g>

        <line x1="422" y1="230" x2="450" y2="258" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <circle cx="464" cy="274" r="16" fill="rgba(139,128,206,0.06)" stroke="#8B80CE" strokeWidth="0.5"/>
        <text x="464" y="277" textAnchor="middle" fontSize="6" fill="rgba(139,128,206,0.85)" fontFamily="-apple-system,system-ui,sans-serif" fontWeight="500">Closed</text>

        <line x1="464" y1="290" x2="464" y2="306" stroke="rgba(184,180,216,0.3)" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        <rect x="432" y="308" width="64" height="20" rx="4" fill="rgba(240,170,196,0.08)" stroke="#F0AAC4" strokeWidth="0.5"/>
        <text x="464" y="321" textAnchor="middle" fontSize="6" fill="rgba(220,225,240,0.85)" fontFamily="-apple-system,system-ui,sans-serif">User replied</text>

        <g transform="translate(366,312)">
          <rect x="0" y="0" width="60" height="12" rx="6" fill="rgba(240,214,80,0.1)" stroke="rgba(240,214,80,0.25)" strokeWidth="0.35"/>
          <rect x="4" y="2.5" width="6" height="4.5" rx="0.8" fill="none" stroke="rgba(240,214,80,0.55)" strokeWidth="0.35"/>
          <path d="M4.5 3l2.5 2 2.5-2" fill="none" stroke="rgba(240,214,80,0.45)" strokeWidth="0.3"/>
          <text x="14" y="8" fontSize="5" fill="rgba(240,214,80,0.55)" fontFamily="-apple-system,system-ui,sans-serif">agent notified</text>
        </g>

        <path d="M432 322 Q200 340 192 230 Q192 170 250 158" fill="none" stroke="rgba(178,240,228,0.18)" strokeWidth="0.5" strokeDasharray="3 2.5" markerEnd="url(#arrow)"/>
        <text x="182" y="262" fontSize="5" fill="rgba(178,240,228,0.22)" fontFamily="-apple-system,system-ui,sans-serif" transform="rotate(-90 182 262)">reopened → in progress</text>
      </svg>
    </div>
  );
}
