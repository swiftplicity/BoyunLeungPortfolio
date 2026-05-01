import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { LinkedinIcon, InstagramIcon, GithubIcon, MailIcon } from "lucide-react";
import { DesignPrinciples } from "../../components/DesignPrinciples";

const coverImage = '/assets/projects/SN Design/sn-design-cover.webp';
const contextVideo = '/assets/projects/SN Design/SN products.mp4';
const buttonsImage = '/assets/projects/SN Design/buttons.webp';
const colorImage = '/assets/projects/SN Design/palette.webp';
const badgesImage = '/assets/projects/SN Design/chips.webp';

const ps = { fontFamily: "'Open Sans', sans-serif" };

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-gray-800 text-sm mb-2" style={ps}>
      <span className="text-blue-700 shrink-0 mt-0.5">•</span>
      <span>{children}</span>
    </li>
  );
}

const sections = [
  {
    label: 'Introduction',
    image: coverImage,
    content: (
      <div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
          <div>
            <p className="text-xs text-gray-800 mb-0.5" style={ps}>Company</p>
            <p className="text-sm text-blue-900 font-medium" style={ps}>IBM</p>
          </div>
          <div>
            <p className="text-xs text-gray-800 mb-0.5" style={ps}>Year</p>
            <p className="text-sm text-blue-900 font-medium" style={ps}>2025–2026</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs text-gray-800 mb-0.5" style={ps}>Role</p>
            <p className="text-sm text-blue-900 font-medium" style={ps}>Solo Designer</p>
          </div>
        </div>
        <p className="text-gray-800 text-sm leading-relaxed" style={ps}>
          Increasing flexibility and improving designer-to-developer integration for IBM Skills Network's product ecosystem.
        </p>
      </div>
    ),
  },
  {
    label: 'Context',
    image: contextVideo,
    content: (
      <div>
        <p className="text-gray-800 text-sm leading-relaxed mb-4" style={ps}>
          IBM Skills Network educates millions of learners through courses and authoring tools including several of the top 10 most popular courses on Coursera. The team is 70–80% interns on rotating contracts. Previously there had only ever been one design intern at a time for eight month periods.
        </p>
        <p className="text-gray-800 text-sm leading-relaxed mb-5" style={ps}>
          Without established standards, each incoming designer worked differently, creating significant inconsistency across products. The first iteration of the SN Design System had been started by the previous intern, establishing foundations. By the time I inherited it, there was significant room to scale.
        </p>
        <p className="text-gray-800 text-sm leading-relaxed mb-5 font-semibold" style={ps}>
          This design system is seen by over 8M+ users across 5 different product areas. 
        </p>
      </div>
    ),
  },
  {
    label: 'Goals',
    visual: <DesignPrinciples isActive={false} />,
    image: coverImage,
    content: (
      <div>
        <p className="text-gray-800 text-sm leading-relaxed mb-5" style={ps}>
          I outlined three guiding principles for the system:
        </p>
        <div className="flex flex-col gap-4">
          {[
            { title: 'Consistency', desc: 'A component should look and behave the same across every product.' },
            { title: 'Modularity', desc: 'Maximize reuse of components and patterns.' },
            { title: 'Scalability', desc: "Components fit any use case and the system isn't limited in growth." },
          ].map(({ title, desc }) => (
            <div key={title}>
              <p className="text-blue-900 text-sm font-medium mb-0.5" style={ps}>{title}</p>
              <p className="text-gray-800 text-sm leading-relaxed" style={ps}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'Expanding Guidelines',
    image: colorImage,
    content: (
      <div>
        <p className="text-blue-900 text-sm font-medium mb-2" style={ps}>Extended Palette</p>
        <p className="text-gray-800 text-sm leading-relaxed mb-4" style={ps}>
          The system only had primary, neutral, and semantic tokens. Developers were using ad hoc colours for things like role badges where differentiation was needed.
        </p>
        <ul>
          {[
            'Introduced an extended palette for classification and illustrative use',
            'Freed greens, yellows, and reds for representative purposes without conflicting with semantic meaning',
            'All combinations verified against WCAG standards',
          ].map(b => <Bullet key={b}>{b}</Bullet>)}
        </ul>
      </div>
    ),
  },
  {
    label: 'Expanding Components',
    image: buttonsImage,
    content: (
      <div>
        <p className="text-blue-900 text-sm font-medium mb-2" style={ps}>Buttons: Ghost Variant & Small Size</p>
        <p className="text-gray-800 text-sm leading-relaxed mb-4" style={ps}>
          The system had four button types but developers were frequently using non-system buttons.
        </p>
        <ul>
          {[
            'Introduced a ghost variant for low-emphasis groupings',
            'Added a small size that preserved hierarchy e.g. when multiple buttons appeared together on cards at scale',
          ].map(b => <Bullet key={b}>{b}</Bullet>)}
        </ul>
      </div>
    ),
  },
  {
    label: 'Creating New Components',
    image: badgesImage,
    content: (
      <div>
        <p className="text-blue-900 text-sm font-medium mb-2" style={ps}>Chips</p>
        <p className="text-gray-800 text-sm leading-relaxed mb-4" style={ps}>
          Badges were being misused for interactive elements.
        </p>
        <ul>
          {[
            'Introduced a chip component with a clear distinction: badges are read-only status indicators, chips are interactive elements for labelling, categorizing, and filtering',
            'Deliberately swapped the shapes: chips got the old badge form to visually align with buttons, reinforcing the relationship between shape and interactivity',
            'Full documentation included: anatomy, states, and usage guidance',
          ].map(b => <Bullet key={b}>{b}</Bullet>)}
        </ul>
      </div>
    ),
  },
  {
    label: 'Introducing Patterns',
    image: '/assets/projects/SN Design/file-uploader.webp',
    content: (
      <div>
        <p className="text-gray-800 text-sm leading-relaxed mb-4" style={ps}>
          One large gap in the design system was patterns. In order to create defined patterns, I audited products for recurring multi-component elements that were likely to be used in the future.
        </p>
        <p className="text-blue-900 text-sm font-medium mb-2" style={ps}>File Uploader</p>
        <p className="text-gray-800 text-sm leading-relaxed" style={ps}>
          The file uploader appeared on nearly every platform with different implementations. I standardized it as a reusable pattern.
        </p>
      </div>
    ),
  },
  {
    label: 'Developer Integration',
    image: '/assets/projects/SN Design/wiki.mp4',
    content: (
      <div>
        <p className="text-gray-800 text-sm leading-relaxed mb-4" style={ps}>
          A design system is worthless without adoption. Since this team heavily consists of developers it was important to ensure the design system was also usable by developers. For this we built a wiki that held the documentation foreach component and provided the code for developers to use. The issue I noticed was that many developers did not even know to address the wiki. I addressed this through gap through multiple changes:
        </p>
        <ul>
          {[
            'A new onboarding document with a first-week checklist requiring the design system wiki',
            '1-on-1 walkthroughs with each new developer',
            'A design review step on all front-end PRs',
          ].map(b => <Bullet key={b}>{b}</Bullet>)}
        </ul>
      </div>
    ),
  },
  {
    label: 'Creating a Claude Skill',
    image: '/assets/projects/SN Design/claude-skill.webp',
    content: (
      <div>
        <p className="text-gray-800 text-sm leading-relaxed" style={ps}>
          Additionally, to scale design system compliance across all front-end PRs, I built a Claude skill that automatically reviews pull requests for design system adherence. This allows for review of inconsistencies, non-system components, and colour or spacing deviations before code gets merged or viewed by the designer.
        </p>
      </div>
    ),
  },
  {
    label: 'Future Opportunities and Takeaways',
    image: '/assets/projects/SN Design/final.webp',
    content: (
      <div>
        <p className="text-gray-800 text-sm leading-relaxed mb-4" style={ps}>
          Prior to this experience, all design systems I had built were haevily focused on creating something to be used by other designers. However, in this case my users were developers. This made me shift my approach and push myself outside my comfort zone to create something useful for developers. There is still much to be done with this design system and given more time I would like to be able to: 
        </p>
        <ul>
          {[
            'Dive deeper into each component and improve the documentation',
            'Create a component library for developers to use',
            'Implement slots for pattern modularity in the Figma components',
            'Track adoption metrics like usage frequency, product coverage, and style overrides',
          ].map(b => <Bullet key={b}>{b}</Bullet>)}
        </ul>
      </div>
    ),
  },
];

export function SNDesignSystem() {
  const location = useLocation();
  const hasHeroTransition = !!(location.state as { heroFromRect?: unknown })?.heroFromRect;
  const [heroImageVisible, setHeroImageVisible] = useState(!hasHeroTransition);
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const outerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const activeIdxRef = useRef(activeIdx);
  activeIdxRef.current = activeIdx;
  const lastSectionChangeRef = useRef(0);
  const isProgrammaticScrollRef = useRef(false);
  const gestureEndedRef = useRef(true);
  const wheelIdleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!hasHeroTransition) return;
    const timer = setTimeout(() => setHeroImageVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const outer = outerRef.current;
    const leftPanel = leftPanelRef.current;
    if (!outer || !leftPanel) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.clientX > leftPanel.getBoundingClientRect().right) return;
      e.preventDefault();

      // Reset idle timer — after 150ms of no wheel events, gesture is considered ended
      if (wheelIdleTimerRef.current) clearTimeout(wheelIdleTimerRef.current);
      wheelIdleTimerRef.current = setTimeout(() => {
        gestureEndedRef.current = true;
      }, 80);

      // Hard minimum: prevents re-firing during same gesture even if idle timer misfires
      const now = Date.now();
      if (now - lastSectionChangeRef.current < 400) return;

      // Only trigger on the first event of a new gesture
      if (!gestureEndedRef.current) return;
      gestureEndedRef.current = false;
      lastSectionChangeRef.current = now;

      if (e.deltaY > 0) {
        const next = Math.min(activeIdxRef.current + 1, sections.length - 1);
        if (next !== activeIdxRef.current) {
          setActiveIdx(next);
          handleSectionClick(next);
          leftPanel.scrollTop = 0;
        }
      } else if (e.deltaY < 0) {
        const prev = Math.max(activeIdxRef.current - 1, 0);
        if (prev !== activeIdxRef.current) {
          setActiveIdx(prev);
          handleSectionClick(prev);
          leftPanel.scrollTop = leftPanel.scrollHeight;
        }
      }
    };
    outer.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      outer.removeEventListener('wheel', handleWheel);
      if (wheelIdleTimerRef.current) clearTimeout(wheelIdleTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isProgrammaticScrollRef.current) {
            const idx = imageRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );
    imageRefs.current.forEach(ref => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  const handleSectionClick = (idx: number) => {
    const container = scrollRef.current;
    const target = imageRefs.current[idx];
    if (container && target) {
      isProgrammaticScrollRef.current = true;
      const top = target.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;
      container.scrollTo({ top, behavior: 'smooth' });
      setTimeout(() => { isProgrammaticScrollRef.current = false; }, 700);
    }
  };

  return (
    <div ref={outerRef} className="flex-1 min-h-0 flex overflow-hidden max-w-[1728px] mx-auto w-full">
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setLightboxSrc(null)}
        >
          <img
            src={lightboxSrc}
            alt="Expanded view"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── Mobile layout (< lg): stacked sections ── */}
      <div className="lg:hidden flex-1 overflow-y-auto px-4 md:px-6 pt-8 pb-10">
        <h1
          className="text-blue-900 text-xl font-semibold leading-snug mb-8"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          Scaling the SN Design System
        </h1>
        {sections.map((section, i) => (
          <div key={i} className="mb-12">
            <p
              className="text-blue-700 text-sm font-medium mb-3"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {section.label}
            </p>
            <div className="mb-5">{section.content}</div>
            {section.visual ? React.cloneElement(section.visual as React.ReactElement, { isActive: i === activeIdx }) : section.image.endsWith('.mp4') ? (
              <video
                src={section.image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[3/2] object-cover rounded-2xl shadow-lg"
              />
            ) : (
              <img
                src={section.image}
                alt={section.label}
                className="w-full aspect-[3/2] object-cover rounded-2xl shadow-lg cursor-zoom-in"
                onClick={() => setLightboxSrc(section.image)}
              />
            )}
          </div>
        ))}
        <div className="pt-6">
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/boyun-leung/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><LinkedinIcon size={18} /></a>
            <a href="https://www.instagram.com/boyunleung/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><InstagramIcon size={18} /></a>
            <a href="https://github.com/swiftplicity" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><GithubIcon size={18} /></a>
            <a href="mailto:boyun.leung@gmail.com" className="text-blue-700 hover:opacity-70 transition-opacity"><MailIcon size={18} /></a>
          </div>
        </div>
      </div>

      {/* ── Desktop layout (>= lg): 2-column ── */}
      <div ref={leftPanelRef} className="hidden lg:flex flex-[1] flex-col pl-4 md:pl-6 xl:pl-20 pr-10 pt-4 pb-10 overflow-hidden">
        <h1
          className="text-blue-900 text-2xl font-semibold leading-snug mb-4 shrink-0"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          Scaling the SN Design System
        </h1>

        <div className="flex-1 overflow-y-auto min-h-0">
          {sections.map((section, i) => (
            <div key={i}>
              <button
                onClick={() => {
                  setActiveIdx(i);
                  handleSectionClick(i);
                }}
                className={`w-full text-left py-1.5 text-base transition-colors duration-200 ${
                  i === activeIdx ? 'text-blue-900 font-semibold' : 'text-gray-500 font-light hover:text-gray-700'
                }`}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {section.label}
              </button>
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: i === activeIdx ? '1fr' : '0fr',
                  transition: 'grid-template-rows 400ms ease-in-out',
                }}
              >
                <div className="overflow-hidden">
                  <div className="pt-3 pb-5">{section.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 mt-4 shrink-0">
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/boyun-leung/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><LinkedinIcon size={18} /></a>
            <a href="https://www.instagram.com/boyunleung/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><InstagramIcon size={18} /></a>
            <a href="https://github.com/swiftplicity" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><GithubIcon size={18} /></a>
            <a href="mailto:boyun.leung@gmail.com" className="text-blue-700 hover:opacity-70 transition-opacity"><MailIcon size={18} /></a>
          </div>
        </div>
      </div>

      {/* Right Panel: scrollable snapping images */}
      <div
        ref={scrollRef}
        className="hidden lg:block flex-[2] overflow-y-auto snap-y snap-mandatory pl-8 pr-4 md:pr-6 xl:pr-20 pt-8 pb-0"
      >
        {sections.map((section, i) => (
          <div
            key={i}
            ref={el => { imageRefs.current[i] = el; }}
            id={i === 0 ? 'sn-design-intro-image' : undefined}
            className="snap-start snap-always mb-6 aspect-[3/2] max-h-[78vh] w-auto ml-auto"
            style={i === 0 ? { opacity: heroImageVisible ? 1 : 0, transition: 'opacity 150ms ease' } : undefined}
          >
            {section.visual ? React.cloneElement(section.visual as React.ReactElement, { isActive: i === activeIdx }) : section.image.endsWith('.mp4') ? (
              <video
                src={section.image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            ) : (
              <img
                src={section.image}
                alt={section.label}
className="w-full h-full object-cover rounded-2xl shadow-lg cursor-zoom-in"
                onClick={() => setLightboxSrc(section.image)}
              />
            )}
          </div>
        ))}
        <div className="flex justify-center pt-4 pb-14">
          <Link
            to="/"
            className="px-6 py-2 rounded-full border border-gray-300 text-gray-500 text-sm font-light hover:border-blue-900 hover:text-blue-900 transition-colors"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
