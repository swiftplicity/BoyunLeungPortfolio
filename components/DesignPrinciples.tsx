import { useEffect, useState } from "react";

export function DesignPrinciples({ isActive }: { isActive: boolean }) {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (isActive) setAnimKey(k => k + 1);
  }, [isActive]);

  return (
    <div
      className="w-full h-full rounded-2xl shadow-lg overflow-hidden"
      style={{ background: "#ffffff", aspectRatio: "3/2" }}
    >
      <svg key={animKey} width="100%" height="100%" viewBox="0 0 480 280" preserveAspectRatio="xMidYMid meet">
        <style>{`
          @keyframes dp-fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes dp-drawStroke { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
          .dp-fade-1 { opacity: 0; animation: dp-fadeIn 0.6s ease 0.2s forwards; }
          .dp-fade-2 { opacity: 0; animation: dp-fadeIn 0.6s ease 0.6s forwards; }
          .dp-fade-3 { opacity: 0; animation: dp-fadeIn 0.6s ease 1s forwards; }
          .dp-s1 { stroke-dasharray:100;stroke-dashoffset:100;animation:dp-drawStroke 1s ease 0.4s forwards; }
          .dp-s2 { stroke-dasharray:100;stroke-dashoffset:100;animation:dp-drawStroke 1s ease 0.6s forwards; }
          .dp-s3 { stroke-dasharray:100;stroke-dashoffset:100;animation:dp-drawStroke 1s ease 0.8s forwards; }
          .dp-s4 { stroke-dasharray:100;stroke-dashoffset:100;animation:dp-drawStroke 1s ease 0.8s forwards; }
          .dp-s5 { stroke-dasharray:100;stroke-dashoffset:100;animation:dp-drawStroke 1s ease 1s forwards; }
          .dp-s6 { stroke-dasharray:100;stroke-dashoffset:100;animation:dp-drawStroke 1s ease 1.2s forwards; }
          .dp-s7 { stroke-dasharray:100;stroke-dashoffset:100;animation:dp-drawStroke 1s ease 1.4s forwards; }
          .dp-s8 { stroke-dasharray:100;stroke-dashoffset:100;animation:dp-drawStroke 1s ease 1.2s forwards; }
          .dp-s9 { stroke-dasharray:100;stroke-dashoffset:100;animation:dp-drawStroke 1s ease 1.4s forwards; }
          .dp-s10 { stroke-dasharray:100;stroke-dashoffset:100;animation:dp-drawStroke 1s ease 1.6s forwards; }
          @media (prefers-reduced-motion: reduce) {
            .dp-fade-1,.dp-fade-2,.dp-fade-3 { opacity:1;animation:none; }
            .dp-s1,.dp-s2,.dp-s3,.dp-s4,.dp-s5,.dp-s6,.dp-s7,.dp-s8,.dp-s9,.dp-s10 { stroke-dashoffset:0;animation:none; }
          }
        `}</style>

        {/* Consistency */}
        <g className="dp-fade-1">
          <g transform="translate(55,96)">
            <rect x="0" y="0" width="14" height="14" rx="2" fill="none" stroke="#7c3aed" strokeWidth="1" className="dp-s1"/>
            <rect x="18" y="0" width="14" height="14" rx="2" fill="none" stroke="#7c3aed" strokeWidth="1" className="dp-s2"/>
            <rect x="36" y="0" width="14" height="14" rx="2" fill="none" stroke="#7c3aed" strokeWidth="1" className="dp-s3"/>
            <line x1="3" y1="5" x2="11" y2="5" stroke="#7c3aed" strokeWidth="1" opacity="0.35"/>
            <line x1="3" y1="9" x2="11" y2="9" stroke="#7c3aed" strokeWidth="1" opacity="0.35"/>
            <line x1="21" y1="5" x2="29" y2="5" stroke="#7c3aed" strokeWidth="1" opacity="0.35"/>
            <line x1="21" y1="9" x2="29" y2="9" stroke="#7c3aed" strokeWidth="1" opacity="0.35"/>
            <line x1="39" y1="5" x2="47" y2="5" stroke="#7c3aed" strokeWidth="1" opacity="0.35"/>
            <line x1="39" y1="9" x2="47" y2="9" stroke="#7c3aed" strokeWidth="1" opacity="0.35"/>
          </g>
          <text x="80" y="136" textAnchor="middle" fontSize="13" fontWeight="600" fill="#5b21b6" fontFamily="'IBM Plex Sans',sans-serif">Consistency</text>
          <text x="80" y="152" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="'IBM Plex Sans',sans-serif">A component should look</text>
          <text x="80" y="162" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="'IBM Plex Sans',sans-serif">and behave the same</text>
          <text x="80" y="172" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="'IBM Plex Sans',sans-serif">across every product</text>
        </g>

        {/* Modularity */}
        <g className="dp-fade-2">
          <g transform="translate(224,88)">
            <rect x="0" y="8" width="12" height="12" rx="2" fill="none" stroke="#8b5cf6" strokeWidth="1" className="dp-s4"/>
            <rect x="10" y="0" width="12" height="12" rx="2" fill="none" stroke="#8b5cf6" strokeWidth="1" className="dp-s5"/>
            <rect x="20" y="8" width="12" height="12" rx="2" fill="none" stroke="#8b5cf6" strokeWidth="1" className="dp-s6"/>
            <rect x="10" y="16" width="12" height="12" rx="2" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" className="dp-s7"/>
          </g>
          <text x="240" y="136" textAnchor="middle" fontSize="13" fontWeight="600" fill="#5b21b6" fontFamily="'IBM Plex Sans',sans-serif">Modularity</text>
          <text x="240" y="152" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="'IBM Plex Sans',sans-serif">Maximize reuse of</text>
          <text x="240" y="162" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="'IBM Plex Sans',sans-serif">components</text>
          <text x="240" y="172" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="'IBM Plex Sans',sans-serif">and patterns</text>
        </g>

        {/* Scalability */}
        <g className="dp-fade-3">
          <g transform="translate(400,100)">
            <rect x="-4" y="-4" width="8" height="8" rx="1.5" fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.5" className="dp-s8"/>
            <rect x="-10" y="-10" width="20" height="20" rx="2.5" fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.7" className="dp-s9"/>
            <rect x="-16" y="-16" width="32" height="32" rx="3" fill="none" stroke="#7c3aed" strokeWidth="1" className="dp-s10"/>
          </g>
          <text x="400" y="136" textAnchor="middle" fontSize="13" fontWeight="600" fill="#5b21b6" fontFamily="'IBM Plex Sans',sans-serif">Scalability</text>
          <text x="400" y="152" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="'IBM Plex Sans',sans-serif">Components fit any use</text>
          <text x="400" y="162" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="'IBM Plex Sans',sans-serif">case and the system isn't</text>
          <text x="400" y="172" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="'IBM Plex Sans',sans-serif">limited in growth</text>
        </g>
      </svg>
    </div>
  );
}
