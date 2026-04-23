import { useEffect, useRef } from "react";

const W = 900, H = 600;
const colors = { discover: '#8B80CE', design: '#F0AAC4', deliver: '#B2F0E4' } as const;
type Phase = keyof typeof colors;

interface Node {
  id: string; x: number; y: number;
  label: string; sub: string;
  phase: Phase | null; color?: string;
  sx: number; sy: number; glow: number; dur: number; tip: string;
}

const nodes: Node[] = [
  { id:'own',        x:420, y:280, label:'Ownership',             sub:'End-to-end design',         phase:null,       color:'#F0D650', sx:12, sy:22, glow:12, dur:5,   tip:'Owned the full product design lifecycle from first insight to shipped feature.' },
  { id:'scope',      x:140, y:110, label:'Scope & metrics',       sub:'Defined priorities',         phase:'discover',                  sx:7,  sy:14, glow:6,  dur:3.2, tip:'Defined product scope, priorities, and success metrics upfront.' },
  { id:'interviews', x:520, y:80,  label:'Stakeholder interviews',sub:'Workflows & constraints',    phase:'discover',                  sx:5,  sy:11, glow:5,  dur:4.1, tip:'Conducted stakeholder interviews to map workflows and surface constraints.' },
  { id:'tickets',    x:90,  y:260, label:'Ticket analysis',       sub:'Recurring issues',           phase:'discover',                  sx:8,  sy:15, glow:7,  dur:3.7, tip:'Analyzed support ticket data to uncover recurring pain points.' },
  { id:'reqs',       x:670, y:250, label:'Requirements',          sub:'Insights to user flows',     phase:'design',                    sx:6,  sy:12, glow:5,  dur:3.5, tip:'Translated research insights into product requirements and user flows.' },
  { id:'solutions',  x:610, y:380, label:'Efficiency solutions',  sub:'Response rates up',          phase:'design',                    sx:8,  sy:15, glow:7,  dur:4.3, tip:'Designed solutions to improve agent efficiency and response rates.' },
  { id:'proactive',  x:760, y:430, label:'Proactive support',     sub:'Ticket volume down',         phase:'design',                    sx:5,  sy:11, glow:5,  dur:3.9, tip:'Introduced proactive strategies to reduce inbound ticket volume.' },
  { id:'dev',        x:250, y:430, label:'Dev partnership',       sub:'Front-end contributions',    phase:'deliver',                   sx:7,  sy:13, glow:6,  dur:3.4, tip:'Partnered closely with engineers and contributed to front-end implementation.' },
  { id:'agile',      x:450, y:510, label:'Agile iteration',       sub:'Ship, learn, refine',        phase:'deliver',                   sx:8,  sy:15, glow:7,  dur:4.6, tip:'Worked iteratively in an agile environment — continuous shipping and learning.' },
];

const edges: [string, string][] = [
  ['scope','own'], ['interviews','own'], ['tickets','own'],
  ['own','reqs'], ['own','solutions'], ['own','proactive'],
  ['solutions','dev'], ['proactive','dev'],
  ['solutions','agile'], ['proactive','agile'],
  ['scope','interviews'], ['tickets','scope'],
  ['reqs','solutions'], ['reqs','proactive'],
  ['dev','agile'],
  ['agile','scope'], ['agile','tickets'],
];

function fourPointStar(sx: number, sy: number, color: string, glow: number): string {
  const fw = sx * 2 + 20, fh = sy * 2 + 20;
  const cx = fw / 2, cy = fh / 2;
  const px = sx * 0.12, py = sy * 0.12;
  const d = `M${cx},${cy-sy} Q${cx+px},${cy-py} ${cx+sx},${cy} Q${cx+px},${cy+py} ${cx},${cy+sy} Q${cx-px},${cy+py} ${cx-sx},${cy} Q${cx-px},${cy-py} ${cx},${cy-sy}Z`;
  return `<svg width="${fw}" height="${fh}" viewBox="0 0 ${fw} ${fh}" style="display:block;overflow:visible">
    <defs><filter id="g-${sx}-${sy}" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur in="SourceGraphic" stdDeviation="${glow}"/></filter></defs>
    <path d="${d}" fill="${color}" opacity="0.35" filter="url(#g-${sx}-${sy})"/>
    <path d="${d}" fill="${color}"/>
  </svg>`;
}

export function ResponsibilitiesConstellation() {
  const skyRef    = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const svgRef    = useRef<SVGSVGElement>(null);
  const tipRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sky    = skyRef.current;
    const canvas = canvasRef.current;
    const svgEl  = svgRef.current;
    const tip    = tipRef.current;
    if (!sky || !canvas || !svgEl || !tip) return;

    const nodeMap: Record<string, Node> = {};
    nodes.forEach(n => (nodeMap[n.id] = n));
    const added: HTMLDivElement[] = [];

    // ── Edges ──────────────────────────────────────────────
    edges.forEach(([a, b], i) => {
      const na = nodeMap[a], nb = nodeMap[b];
      const mx = (na.x + nb.x) / 2, my = (na.y + nb.y) / 2;
      const dx = nb.x - na.x, dy = nb.y - na.y;
      const dist = Math.hypot(dx, dy);
      const off = (i % 2 === 0 ? 1 : -1) * 28;
      const qx = mx - (dy / dist) * off, qy = my + (dx / dist) * off;
      const edgeColor = na.phase ? colors[na.phase] : nb.phase ? colors[nb.phase] : '#B8B4D8';

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M${na.x} ${na.y} Q${qx} ${qy} ${nb.x} ${nb.y}`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', edgeColor);
      path.setAttribute('stroke-width', '0.5');
      path.setAttribute('opacity', '0.25');
      const len = dist * 1.2;
      path.setAttribute('stroke-dasharray', `${len}`);
      path.setAttribute('stroke-dashoffset', `${len}`);
      path.style.animation = `rc-trace 1.5s ease ${i * 0.1}s forwards`;
      svgEl.appendChild(path);
    });

    // ── Nodes ──────────────────────────────────────────────
    nodes.forEach((n, i) => {
      const nodeColor = n.phase ? colors[n.phase] : (n.color ?? '#F0D650');
      const wrap = document.createElement('div');
      wrap.style.cssText = [
        'position:absolute',
        `left:${(n.x / W) * 100}%`,
        `top:${(n.y / H) * 100}%`,
        'transform:translate(-50%,-50%)',
        'cursor:pointer',
        'transition:transform .2s ease',
        'opacity:0',
        `transition:opacity .5s ease ${0.4 + i * 0.1}s, transform .2s ease`,
      ].join(';');

      const star = document.createElement('div');
      star.style.cssText = `animation:rc-twinkle ${n.dur}s ease-in-out ${i * 0.5}s infinite`;
      star.innerHTML = fourPointStar(n.sx, n.sy, nodeColor, n.glow);

      const labelTop = n.sy + 20;
      const lbl = document.createElement('div');
      lbl.style.cssText = [
        'position:absolute',
        `top:${labelTop}px`,
        'left:50%',
        'transform:translateX(-50%)',
        'white-space:nowrap',
        `font-size:${n.id === 'own' ? 14 : 12}px`,
        'font-weight:500',
        `color:${n.id === 'own' ? 'rgba(240,214,80,0.95)' : 'rgba(220,225,240,0.9)'}`,
        'text-align:center',
        'pointer-events:none',
      ].join(';');
      lbl.textContent = n.label;

      const sub = document.createElement('div');
      sub.style.cssText = [
        'position:absolute',
        `top:${labelTop + 16}px`,
        'left:50%',
        'transform:translateX(-50%)',
        'white-space:nowrap',
        'font-size:10px',
        'color:rgba(160,170,200,0.6)',
        'text-align:center',
        'pointer-events:none',
      ].join(';');
      sub.textContent = n.sub;

      wrap.appendChild(star);
      wrap.appendChild(lbl);
      wrap.appendChild(sub);

      wrap.addEventListener('mouseenter', () => {
        wrap.style.transform = 'translate(-50%,-50%) scale(1.12)';
        tip.textContent = n.tip;
        tip.style.opacity = '1';
        const r = sky.getBoundingClientRect();
        let tx = (n.x / W) * r.width + 20;
        let ty = (n.y / H) * r.height - 50;
        if (tx + 200 > r.width - 40) tx -= 230;
        if (ty < 10) ty += 80;
        tip.style.left = `${tx}px`;
        tip.style.top  = `${ty}px`;
      });
      wrap.addEventListener('mouseleave', () => {
        wrap.style.transform = 'translate(-50%,-50%)';
        tip.style.opacity = '0';
      });

      sky.appendChild(wrap);
      added.push(wrap);
      requestAnimationFrame(() => { wrap.style.opacity = '1'; });
    });

    // ── Stars canvas ───────────────────────────────────────
    const rect = sky.getBoundingClientRect();
    canvas.width  = rect.width  * 2;
    canvas.height = rect.height * 2;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      for (let i = 0; i < 250; i++) {
        const sx = Math.random() * canvas.width;
        const sy = Math.random() * canvas.height;
        const r  = Math.random() * 1.2 + 0.2;
        const b  = Math.random();
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184,180,216,${b < 0.08 ? 0.4 : b < 0.25 ? 0.14 : 0.05})`;
        ctx.fill();
      }
    }

    return () => {
      added.forEach(w => w.remove());
      while (svgEl.firstChild) svgEl.removeChild(svgEl.firstChild);
    };
  }, []);

  return (
    <div
      ref={skyRef}
      className="relative overflow-hidden rounded-2xl w-full shadow-lg"
      style={{ background: 'linear-gradient(160deg,#0a0e1a 0%,#0f1a2e 40%,#0c1424 100%)', aspectRatio: '3/2' }}
    >
      <style>{`
        @keyframes rc-trace   { to { stroke-dashoffset: 0; } }
        @keyframes rc-twinkle { 0%,100%{opacity:.55} 50%{opacity:1} }
      `}</style>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Zones */}
      <div className="absolute rounded-full" style={{ left:'3%',  top:0,    width:'50%', height:'55%', background:'radial-gradient(ellipse at center,rgba(139,128,206,0.06) 0%,transparent 70%)' }} />
      <div className="absolute rounded-full" style={{ left:'42%', top:'25%',width:'55%', height:'55%', background:'radial-gradient(ellipse at center,rgba(240,170,196,0.06) 0%,transparent 70%)' }} />
      <div className="absolute rounded-full" style={{ left:'5%',  top:'52%',width:'55%', height:'48%', background:'radial-gradient(ellipse at center,rgba(178,240,228,0.06) 0%,transparent 70%)' }} />

      {/* Phase labels */}
      <span className="absolute pointer-events-none" style={{ left:'25%', top:'6%',              fontSize:20, fontWeight:500, letterSpacing:1, textTransform:'lowercase', color:'rgba(139,128,206,0.55)' }}>discover</span>
      <span className="absolute pointer-events-none" style={{ left:'25%', top:'calc(6% + 26px)', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'rgba(139,128,206,0.35)' }}>Research & understand</span>
      <span className="absolute pointer-events-none text-right" style={{ right:'8%', top:'28%',              fontSize:20, fontWeight:500, letterSpacing:1, textTransform:'lowercase', color:'rgba(240,170,196,0.55)' }}>design</span>
      <span className="absolute pointer-events-none text-right" style={{ right:'8%', top:'calc(28% + 26px)', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'rgba(240,170,196,0.35)' }}>Shape & solve</span>
      <span className="absolute pointer-events-none" style={{ left:'8%', bottom:'12%',              fontSize:20, fontWeight:500, letterSpacing:1, textTransform:'lowercase', color:'rgba(178,240,228,0.55)' }}>deliver</span>
      <span className="absolute pointer-events-none" style={{ left:'8%', bottom:'calc(12% - 16px)', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'rgba(178,240,228,0.35)' }}>Build & ship</span>

      <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 600" />

      <div
        ref={tipRef}
        className="absolute pointer-events-none z-10 rounded-lg"
        style={{ opacity:0, transition:'opacity .2s', background:'rgba(12,18,36,0.92)', border:'0.5px solid rgba(100,120,180,0.3)', padding:'8px 14px', fontSize:11, color:'rgba(180,190,220,0.85)', maxWidth:200 }}
      />
    </div>
  );
}
