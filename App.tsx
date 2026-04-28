import { HashRouter, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Heartlogo1Traced from "./imports/Heartlogo1Traced1";
import { useState, useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./components/ui/sheet";
import Home from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Yearbook } from "./pages/Yearbook";
import { SupportSystem } from "./pages/projects/SupportSystem";
import { DesignSystem } from "./pages/projects/DesignSystem";
import { SNDesignSystem } from "./pages/projects/SNDesignSystem";

type HeroFromRect = { top: number; left: number; width: number; height: number };

const HERO_ROUTE_CONFIG: Record<string, { targetId: string; imageSrc: string; endRadius: string }> = {
  '/projects/support-system': {
    targetId: 'support-intro-image',
    imageSrc: '/assets/projects/support-system/support-cover-mock.webp',
    endRadius: '1rem',
  },
  '/projects/sn-design-system': {
    targetId: 'sn-design-intro-image',
    imageSrc: '/assets/projects/SN Design/sn-design-cover.webp',
    endRadius: '1rem',
  },
  '/projects/design-system': {
    targetId: 'design-system-intro-image',
    imageSrc: '/assets/projects/design-system/harmony-design-system.png',
    endRadius: '0px',
  },
};

function HeroTransition() {
  const location = useLocation();
  const config = HERO_ROUTE_CONFIG[location.pathname];
  const fromRectRef = useRef<HeroFromRect | undefined>(
    config
      ? (location.state as { heroFromRect?: HeroFromRect })?.heroFromRect
      : undefined
  );
  const fromRect = fromRectRef.current;
  const imgRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(!!fromRect);

  useEffect(() => {
    if (!fromRect || !config) return;
    const img = imgRef.current;
    if (!img) return;

    let retries = 0;
    const tryAnimate = () => {
      retries++;
      if (retries > 60) { setVisible(false); return; }
      const target = document.getElementById(config.targetId);
      if (!target) { requestAnimationFrame(tryAnimate); return; }

      const targetRect = target.getBoundingClientRect();
      img.getBoundingClientRect();

      requestAnimationFrame(() => {
        img.style.transition = [
          'top 600ms cubic-bezier(0.4,0,0.2,1)',
          'left 600ms cubic-bezier(0.4,0,0.2,1)',
          'width 600ms cubic-bezier(0.4,0,0.2,1)',
          'height 600ms cubic-bezier(0.4,0,0.2,1)',
          'border-radius 600ms cubic-bezier(0.4,0,0.2,1)',
          'opacity 150ms ease 600ms',
        ].join(', ');
        img.style.top = `${targetRect.top}px`;
        img.style.left = `${targetRect.left}px`;
        img.style.width = `${targetRect.width}px`;
        img.style.height = `${targetRect.height}px`;
        img.style.borderRadius = config.endRadius;
        img.style.opacity = '0';
      });

      setTimeout(() => setVisible(false), 820);
    };

    const timer = setTimeout(() => requestAnimationFrame(tryAnimate), 30);
    return () => clearTimeout(timer);
  }, []);

  if (!visible || !fromRect || !config) return null;

  return (
    <img
      ref={imgRef}
      src={config.imageSrc}
      alt=""
      style={{
        position: 'fixed',
        top: fromRect.top,
        left: fromRect.left,
        width: fromRect.width,
        height: fromRect.height,
        objectFit: 'cover',
        borderRadius: '6px',
        zIndex: 9000,
        pointerEvents: 'none',
      }}
    />
  );
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const location = useLocation();
  
  // Handle scrolling to hash on location change
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  

  useEffect(() => {
    if (location.pathname !== '/') return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let scene: any = null;

    const initScene = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const US = (window as any).UnicornStudio;
      if (!US?.addScene) return;
      scene = await US.addScene({
        elementId: 'unicorn-bg',
        projectId: '94dMBvGEIl2kfoUsVxfC',
        fps: 60,
        scale: 1,
        dpi: 1.5,
        lazyLoad: false,
      });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).UnicornStudio?.addScene) {
      initScene();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.9/dist/unicornStudio.umd.js';
      script.onload = initScene;
      document.head.appendChild(script);
    }

    return () => {
      scene?.destroy();
    };
  }, [location.pathname]);

  useEffect(() => {
    let sparkleId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newSparkle: Sparkle = {
        id: sparkleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 12,
        delay: Math.random() * 0.3,
      };
      
      setSparkles(prev => [...prev, newSparkle]);
      
      // Remove sparkle after animation completes
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 1000);
    };
    
    // Throttle sparkle creation
    let throttleTimer: number | null = null;
    const throttledMouseMove = (e: MouseEvent) => {
      if (throttleTimer === null) {
        handleMouseMove(e);
        throttleTimer = window.setTimeout(() => {
          throttleTimer = null;
        }, 50);
      }
    };
    
    window.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (throttleTimer !== null) {
        clearTimeout(throttleTimer);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Sparkle Cursor Effect */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="pointer-events-none fixed z-[9999]"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animation: `sparkle 1s ease-out forwards`,
            animationDelay: `${sparkle.delay}s`,
            filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%' }}
          >
            <path
              d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
              fill="#FAE258"
              opacity="0.9"
            />
          </svg>
        </div>
      ))}
      
      {/* Background Gradients */}
      {/* Teal — very large, left-center, fades into yellow and blue-purple */}
      <div className="absolute h-[2000px] left-[-400px] top-[-100px] w-[2000px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2000 2000">
          <ellipse cx="1000" cy="1000" fill="url(#paint0_radial_1_78)" rx="1000" ry="1000" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(1000 1000) rotate(90) scale(1000 1000)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_78" r="1">
              <stop stopColor="#B5EBE8" stopOpacity="0.4" />
              <stop offset="0.6" stopColor="#B5EBE8" stopOpacity="0.1" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Pink — top right, very large so it bleeds across the top */}
      <div className="absolute h-[1800px] left-[400px] top-[-600px] w-[2000px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2000 1800">
          <ellipse cx="1000" cy="900" fill="url(#paint0_radial_1_74)" rx="1000" ry="900" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(1000 900) rotate(90) scale(900 1000)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_74" r="1">
              <stop stopColor="#EBB5DF" stopOpacity="0.45" />
              <stop offset="0.6" stopColor="#EBB5DF" stopOpacity="0.1" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Blue-purple — left side anchor */}
      <div className="absolute h-[1600px] left-[-600px] top-[0px] w-[1600px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1600 1600">
          <ellipse cx="800" cy="800" fill="url(#paint0_radial_1_72)" fillOpacity="1" rx="800" ry="800" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(800 800) rotate(90) scale(800 800)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_72" r="1">
              <stop stopColor="#B5BEEB" stopOpacity="0.6" />
              <stop offset="0.6" stopColor="#B5BEEB" stopOpacity="0.15" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Purple — top center */}
      <div className="absolute h-[1600px] left-[-200px] top-[-700px] w-[1800px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1800 1600">
          <ellipse cx="900" cy="800" fill="url(#paint0_radial_1_76)" rx="900" ry="800" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(900 800) rotate(90) scale(800 900)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_76" r="1">
              <stop stopColor="#B6B5EB" stopOpacity="0.5" />
              <stop offset="0.6" stopColor="#B6B5EB" stopOpacity="0.1" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Yellow — very large, right side, overlaps teal and pink */}
      <div className="absolute h-[2000px] left-[500px] top-[-200px] w-[2200px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2200 2000">
          <ellipse cx="1100" cy="1000" fill="url(#paint0_radial_1_70)" rx="1100" ry="1000" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(1100 1000) rotate(90) scale(1000 1100)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_70" r="1">
              <stop stopColor="#FAE258" stopOpacity="0.28" />
              <stop offset="0.6" stopColor="#FAE258" stopOpacity="0.07" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Unicorn Scene Background - Home only */}
      {location.pathname === '/' && (
        <div id="unicorn-bg" className="absolute inset-0 pointer-events-none" style={{ height: '100vh', zIndex: 5 }} />
      )}

      {/* Grain overlay - all pages except home */}
      {location.pathname !== '/' && (
        <div className="grain-overlay" />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen overflow-hidden">
        {/* Navigation */}
        <nav className="py-6 pt-12">
          <div className="px-4 md:px-6 xl:px-20 w-full max-w-[1728px] mx-auto">
          <div className="flex items-center justify-between">
            {/* Left: Menu drawer */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className={`font-regular transition-colors text-sm ${location.pathname === '/' ? 'text-white/70 hover:text-white' : 'text-[#1938D1]/70 hover:text-[#1938D1]'}`}>
                  Menu
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 bg-white/95 backdrop-blur-sm">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to different sections of the portfolio
                </SheetDescription>
                <div className="flex flex-col gap-8 mt-12 pl-10 h-full pb-12">
                  <Link
                    to="/"
                    className="font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <div className="flex flex-col gap-5">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Case Studies</span>
                    <Link
                      to="/projects/support-system"
                      className="font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      IBM Skills Network Support
                    </Link>
                    <a
                      href="https://mark-ai-grader.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Mark AI Grader ↗
                    </a>
                    <Link
                      to="/projects/sn-design-system"
                      className="font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SN Design System
                    </Link>
                    <Link
                      to="/projects/design-system"
                      className="font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Harmony Design System
                    </Link>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1R-n2lwAQBe7h4YEzRpXrCl4HqPYnYE-4/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resume
                  </a>
                  <Link
                    to="/about"
                    className="font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Me
                  </Link>
                  <div className="flex items-center gap-4 mt-auto">
                    <a href="https://www.linkedin.com/in/boyun-leung/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#9CA3AF] hover:text-[#1938d1] transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/boyunleung/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#9CA3AF] hover:text-[#1938d1] transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </a>
                    <a href="https://github.com/swiftplicity" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#9CA3AF] hover:text-[#1938d1] transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                      </svg>
                    </a>
                    <a href="mailto:boyun.leung@gmail.com" aria-label="Email" className="text-[#9CA3AF] hover:text-[#1938d1] transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Center: Logo */}
            <Link to="/">
              <Heartlogo1Traced className={location.pathname === '/' ? 'text-white hover:text-[#1C4ED8]' : 'text-[#1938D1]/70 hover:text-[#1938D1]'} />
            </Link>

            {/* Right: Resume */}
            <a
              href="https://drive.google.com/file/d/1R-n2lwAQBe7h4YEzRpXrCl4HqPYnYE-4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-regular transition-colors text-sm ${location.pathname === '/' ? 'text-white/70 hover:text-white' : 'text-[#1938D1]/70 hover:text-[#1938D1]'}`}
            >
              Resume
            </a>
          </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className={`flex-1 flex flex-col ${location.pathname === '/' ? 'overflow-hidden' : 'overflow-y-auto'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/yearbook" element={<Yearbook />} />
          <Route path="/projects/support-system" element={<SupportSystem />} />
          <Route path="/projects/design-system" element={<DesignSystem />} />
          <Route path="/projects/sn-design-system" element={<SNDesignSystem />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </div>
      </div>
      <HeroTransition key={location.key} />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}
