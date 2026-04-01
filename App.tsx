import { HashRouter, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Heartlogo1Traced from "./imports/Heartlogo1Traced1";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./components/ui/sheet";
import Home from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Yearbook } from "./pages/Yearbook";
import { SupportSystem } from "./pages/projects/SupportSystem";
import { DesignSystem } from "./pages/projects/DesignSystem";

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
      
      {/* Background Gradients - Same as resume */}
      <div className="absolute flex h-[872px] items-center justify-center left-[-277px] top-[426px] w-[937px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[872px] relative w-[937px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 937 872">
              <ellipse cx="468.5" cy="436" fill="url(#paint0_radial_1_78)" id="Ellipse 3" rx="468.5" ry="436" />
              <defs>
                <radialGradient cx="0" cy="0" gradientTransform="translate(468.5 436) rotate(90) scale(436 468.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_78" r="1">
                  <stop stopColor="#B5EBE8" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[875px] items-center justify-center left-[-675px] top-[-340px] w-[1083px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[875px] relative w-[1083px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1083 875">
              <ellipse cx="541.5" cy="437.5" fill="url(#paint0_radial_1_74)" id="Ellipse 5" rx="541.5" ry="437.5" />
              <defs>
                <radialGradient cx="0" cy="0" gradientTransform="translate(541.5 437.5) rotate(90) scale(437.5 541.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_74" r="1">
                  <stop stopColor="#EBB5DF" stopOpacity="0.4" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[766px] left-[-539px] top-[186px] w-[861px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 861 766">
          <ellipse cx="430.5" cy="383" fill="url(#paint0_radial_1_72)" fillOpacity="0.8" id="Ellipse 2" rx="430.5" ry="383" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(430.5 383) rotate(90) scale(383 430.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_72" r="1">
              <stop stopColor="#B5BEEB" stopOpacity="0.6" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex h-[1176px] items-center justify-center left-[-60px] top-[-553px] w-[1319px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[1176px] relative w-[1319px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1319 1176">
              <ellipse cx="659.5" cy="588" fill="url(#paint0_radial_1_76)" id="Ellipse 6" rx="659.5" ry="588" />
              <defs>
                <radialGradient cx="0" cy="0" gradientTransform="translate(659.5 588) rotate(90) scale(588 659.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_76" r="1">
                  <stop stopColor="#B6B5EB" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[1226px] left-[-44px] top-[137px] w-[1648px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1648 1226">
          <ellipse cx="824" cy="613" fill="url(#paint0_radial_1_70)" id="Ellipse 5" rx="824" ry="613" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(824 613) rotate(90) scale(613 824)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_70" r="1">
              <stop stopColor="#FAE258" stopOpacity="0.2" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="mx-auto max-w-6xl px-8 py-6 pt-12">
          <div className="flex items-center justify-between">
            <Link to="/" className="transition-opacity hover:opacity-80">
              <Heartlogo1Traced />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-12">
              {/* Projects Dropdown */}
              <div className="relative group">
                <Link 
                  to="/#projects" 
                  className="font-['Open_Sans',_sans-serif] font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-[14px]" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      const element = document.querySelector('#projects');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  Projects
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[280px]">
                    <Link 
                      to="/projects/support-system"
                      className="block px-4 py-2 font-['Open_Sans',_sans-serif] font-light text-[#585858] hover:text-[#1938d1] hover:bg-gray-50 transition-colors text-[14px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Skills Network Support
                    </Link>
                    <a 
                      href="https://mark-ai-grader.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 font-['Open_Sans',_sans-serif] font-light text-[#585858] hover:text-[#1938d1] hover:bg-gray-50 transition-colors text-[14px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Mark AI Grader
                    </a>
                    <Link 
                      to="/projects/design-system"
                      className="block px-4 py-2 font-['Open_Sans',_sans-serif] font-light text-[#585858] hover:text-[#1938d1] hover:bg-gray-50 transition-colors text-[14px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Harmony Design System
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="font-['Open_Sans',_sans-serif] font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                About Me
              </Link>
              <a href="https://drive.google.com/file/d/1R-n2lwAQBe7h4YEzRpXrCl4HqPYnYE-4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-['Open_Sans',_sans-serif] font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Resume
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button className="text-[#9CA3AF] hover:text-[#1938d1] transition-colors">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-sm">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to different sections of the portfolio
                </SheetDescription>
                <div className="flex flex-col gap-8 mt-12 pl-[40px]">
                  <Link 
                    to="/#projects" 
                    className="font-['Open_Sans',_sans-serif] font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-[18px]" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (location.pathname === '/') {
                        e.preventDefault();
                        setTimeout(() => {
                          const element = document.querySelector('#projects');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 300);
                      }
                    }}
                  >
                    Projects
                  </Link>
                  <Link 
                    to="/about" 
                    className="font-['Open_Sans',_sans-serif] font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-[18px]" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Me
                  </Link>
                  <a 
                    href="https://drive.google.com/file/d/1R-n2lwAQBe7h4YEzRpXrCl4HqPYnYE-4/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Open_Sans',_sans-serif] font-light text-[#9CA3AF] hover:text-[#1938d1] transition-colors text-[18px]" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resume
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/yearbook" element={<Yearbook />} />
          <Route path="/projects/support-system" element={<SupportSystem />} />
          <Route path="/projects/design-system" element={<DesignSystem />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
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
