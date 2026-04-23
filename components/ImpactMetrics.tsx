import { useEffect, useRef } from "react";

const CIRCUMFERENCE = 289;

function animateCounter(el: HTMLElement, target: number, suffix: string, duration: number) {
  const start = performance.now();
  function tick(now: number) {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * ease) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function ImpactMetrics({ isActive }: { isActive: boolean }) {
  const ring1Ref  = useRef<SVGCircleElement>(null);
  const ring2Ref  = useRef<SVGCircleElement>(null);
  const ring3Ref  = useRef<SVGCircleElement>(null);
  const num1Ref   = useRef<HTMLDivElement>(null);
  const num2Ref   = useRef<HTMLDivElement>(null);
  const barBefore = useRef<HTMLDivElement>(null);
  const barAfter  = useRef<HTMLDivElement>(null);
  const checkRef  = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const r1 = ring1Ref.current, r2 = ring2Ref.current, r3 = ring3Ref.current;
    const n1 = num1Ref.current,  n2 = num2Ref.current;
    const bb = barBefore.current, ba = barAfter.current;
    const ck = checkRef.current;
    if (!r1 || !r2 || !r3 || !n1 || !n2 || !bb || !ba || !ck) return;

    // Snap-reset all values (no transition)
    r1.style.transition = r2.style.transition = r3.style.transition = 'none';
    bb.style.transition = ba.style.transition = 'none';
    ck.style.transition = 'none';
    r1.style.strokeDashoffset = r2.style.strokeDashoffset = r3.style.strokeDashoffset = String(CIRCUMFERENCE);
    n1.textContent = n2.textContent = '0%';
    bb.style.width = ba.style.width = '0';
    ck.style.opacity = '0';

    if (!isActive) return;

    let timer: ReturnType<typeof setTimeout>;
    const raf = requestAnimationFrame(() => {
      // Re-enable transitions before animating
      r1.style.transition = 'stroke-dashoffset 2s cubic-bezier(.22,1,.36,1)';
      r2.style.transition = 'stroke-dashoffset 2s cubic-bezier(.22,1,.36,1) 0.3s';
      r3.style.transition = 'stroke-dashoffset 2s cubic-bezier(.22,1,.36,1) 0.6s';
      bb.style.transition = ba.style.transition = 'width 1.8s cubic-bezier(.22,1,.36,1)';
      ck.style.transition = 'opacity 0.6s ease 2.2s';

      timer = setTimeout(() => {
        r1.style.strokeDashoffset = String(CIRCUMFERENCE * 0.5);
        animateCounter(n1, 50, '%', 2000);
        r2.style.strokeDashoffset = '0';
        animateCounter(n2, 100, '%', 2300);
        bb.style.width = '6%';
        ba.style.width = '100%';
        r3.style.strokeDashoffset = '0';
        ck.style.opacity = '1';
      }, 200);
    });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [isActive]);

  const frame: React.CSSProperties = {
    background: 'linear-gradient(160deg,#0a0e1a 0%,#0f1a2e 40%,#0c1424 100%)',
    aspectRatio: '3/2',
    padding: '48px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 48,
  };

  const metricRow: React.CSSProperties  = { display: 'flex', alignItems: 'center', gap: 32 };
  const ringWrap: React.CSSProperties   = { position: 'relative', flexShrink: 0 };
  const ringCenter: React.CSSProperties = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' };

  return (
    <div className="rounded-2xl shadow-lg w-full" style={frame}>

      {/* ── Metric 1: 50% reduction ── */}
      <div style={metricRow}>
        <div style={ringWrap}>
          <svg width="110" height="110" viewBox="0 0 110 110">
            <circle cx="55" cy="55" r="46" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
            <circle ref={ring1Ref} cx="55" cy="55" r="46" fill="none" stroke="#F0AAC4" strokeWidth="5"
              strokeLinecap="round" strokeDasharray={CIRCUMFERENCE} strokeDashoffset={CIRCUMFERENCE}
              transform="rotate(-90 55 55)" />
          </svg>
          <div style={ringCenter}>
            <div ref={num1Ref} style={{ fontSize: 28, fontWeight: 500, color: '#F0AAC4' }}>0%</div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 15, fontWeight: 500, color: 'rgba(220,225,240,0.9)', margin: '0 0 4px' }}>Reduction in support requests</p>
          <p style={{ fontSize: 12, color: 'rgba(160,170,200,0.5)', margin: 0 }}>Proactive strategies cut incoming volume in half</p>
        </div>
      </div>

      {/* ── Metric 2: 6% → 100% tickets ── */}
      <div style={metricRow}>
        <div style={ringWrap}>
          <svg width="110" height="110" viewBox="0 0 110 110">
            <circle cx="55" cy="55" r="46" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
            <circle ref={ring2Ref} cx="55" cy="55" r="46" fill="none" stroke="#8B80CE" strokeWidth="5"
              strokeLinecap="round" strokeDasharray={CIRCUMFERENCE} strokeDashoffset={CIRCUMFERENCE}
              transform="rotate(-90 55 55)" />
          </svg>
          <div style={ringCenter}>
            <div ref={num2Ref} style={{ fontSize: 28, fontWeight: 500, color: '#8B80CE' }}>0%</div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 15, fontWeight: 500, color: 'rgba(220,225,240,0.9)', marginBottom: 12 }}>Tickets addressed</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <div ref={barBefore} style={{ height: '100%', borderRadius: 3, width: 0, background: 'rgba(139,128,206,0.25)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{ fontSize: 12, color: 'rgba(160,170,200,0.4)' }}>Before</span>
                <span style={{ fontSize: 12, color: 'rgba(160,170,200,0.4)' }}>6%</span>
              </div>
            </div>
            <svg width="20" height="12" viewBox="0 0 20 12" style={{ flexShrink: 0, opacity: 0.3 }}>
              <path d="M2 6h14M12 2l4 4-4 4" fill="none" stroke="rgba(200,210,240,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{ flex: 1 }}>
              <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <div ref={barAfter} style={{ height: '100%', borderRadius: 3, width: 0, background: '#8B80CE' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: '#8B80CE' }}>After</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: '#8B80CE' }}>100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Metric 3: consistency checkmark ── */}
      <div style={metricRow}>
        <div style={ringWrap}>
          <svg width="110" height="110" viewBox="0 0 110 110">
            <circle cx="55" cy="55" r="46" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
            <circle ref={ring3Ref} cx="55" cy="55" r="46" fill="none" stroke="#B2F0E4" strokeWidth="5"
              strokeLinecap="round" strokeDasharray={CIRCUMFERENCE} strokeDashoffset={CIRCUMFERENCE}
              transform="rotate(-90 55 55)" />
          </svg>
          <div style={ringCenter}>
            <svg ref={checkRef} width="28" height="28" viewBox="0 0 28 28" style={{ opacity: 0 }}>
              <path d="M6 14.5L11.5 20L22 8" fill="none" stroke="#B2F0E4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 15, fontWeight: 500, color: 'rgba(220,225,240,0.9)', margin: '0 0 4px' }}>Consistent response quality</p>
          <p style={{ fontSize: 12, color: 'rgba(160,170,200,0.5)', margin: 0 }}>Improved efficiency and response consistency across all products</p>
        </div>
      </div>

    </div>
  );
}
