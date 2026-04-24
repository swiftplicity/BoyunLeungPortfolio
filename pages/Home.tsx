import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const designSystemImage = '/assets/projects/design-system/harmony-design-system.png';
const markAIImage = '/assets/projects/mark-ai-grader.png';
const supportSystemImage = '/assets/projects/support-system/support-cover-mock.jpg';

type FeaturedProject = {
  id: string;
  label: string;
  route: string;
  headline: string;
  image: string;
  comingSoon?: boolean;
};

type ExploreProject = {
  title: string;
  description: string;
  image: string;
  route: string;
  isExternal?: boolean;
  comingSoon?: boolean;
};

const featuredProjects: FeaturedProject[] = [
  {
    id: 'sn-support',
    label: 'SN Support',
    route: '/projects/support-system',
    headline: 'I managed and designed the end-to-end implementation of a support system web application',
    image: supportSystemImage,
  },
];

const exploreProjects: ExploreProject[] = [
  {
    title: "IBM Skills Network Support",
    description: "I managed and designed the end-to-end implementation of a support system web application",
    image: supportSystemImage,
    route: "/projects/support-system",
  },
  {
    title: "Mark AI Grader",
    description: "I designed features to enhance the author's and learner's experience for an AI grader",
    image: markAIImage,
    route: "https://mark-ai-grader.com/",
    isExternal: true,
  },
  {
    title: "Harmony Design System",
    description: "I updated and transitioned an outdated design system to be consistent, scalable, and modular",
    image: designSystemImage,
    route: "/projects/design-system",
  },
];

export default function Home() {
  const [hoveredFeatured, setHoveredFeatured] = useState<string | null>(null);
  const [leavingProject, setLeavingProject] = useState<FeaturedProject | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const hoveredProject = featuredProjects.find(p => p.id === hoveredFeatured) ?? null;
  const activeProject = hoveredProject ?? leavingProject;
  const isLeaving = !hoveredProject && !!leavingProject;

  const handleProjectEnter = (id: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setLeavingProject(null);
    setHoveredFeatured(id);
  };

  const handleProjectLeave = () => {
    const current = featuredProjects.find(p => p.id === hoveredFeatured) ?? null;
    setHoveredFeatured(null);
    setLeavingProject(current);
    leaveTimer.current = setTimeout(() => setLeavingProject(null), 500);
  };

  const handleExploreClick = (project: ExploreProject) => {
    if (project.comingSoon) return;
    if (project.isExternal) {
      window.open(project.route, '_blank');
    } else {
      navigate(project.route);
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full relative">
    <div className="flex-1 flex flex-col px-4 md:px-6 xl:px-20 py-6 pb-16 w-full max-w-[1728px] mx-auto">
      {/* Two-column row */}
      <div className="flex items-start">
        {/* Left column */}
        <div className="flex-1 flex flex-col pr-8 min-w-0">
          {activeProject ? (
            // Featured project preview
            <div key={activeProject.id} className={`flex flex-col gap-4 ${isLeaving ? 'animate-slide-down' : ''}`}>
              <p
                className={`${!isLeaving ? 'animate-slide-up' : ''} text-white text-3xl md:text-4xl leading-snug flex-shrink-0 font-light`}
                style={{ fontFamily: "'IBM Plex Serif', serif" }}
              >
                {activeProject.headline}
              </p>
              <div className={`${!isLeaving ? 'animate-slide-up-delayed' : ''} rounded-md overflow-hidden`} style={{ height: 'calc(100vh - 280px)' }}>
                <img
                  src={activeProject.image}
                  alt={activeProject.label}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            // Default intro content + explore
            <div className="flex flex-col gap-6 md:gap-4">
              <p className="animate-slide-up text-white text-2xl font-light">
                Hey! I'm Boyun
              </p>
              <h1
                className="animate-slide-up-d1 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-regular leading-tight"
                style={{ fontFamily: "'IBM Plex Serif', serif" }}
              >
                Let's cut to the chase
              </h1>
              <p className="animate-slide-up-d1 text-white text-3xl"
               style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                I design delightful experiences
              </p>
              <p className="animate-slide-up-d1 text-white/80 text-xl font-light">
                Currently Designer @{" "}
                <a href="https://skills.network/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors underline underline-offset-2">IBM Skills Network</a>
                {" "}and Cofounder of{" "}
                <a href="https://www.foryourdelight.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors underline underline-offset-2">foryourdelight</a>
              </p>

              <div className="animate-slide-up-d2 mt-10 grid grid-cols-3 gap-4">
                  {exploreProjects.map((project, index) => (
                    <div
                      key={index}
                      onClick={() => handleExploreClick(project)}
                      className={`group bg-white rounded-md overflow-hidden flex flex-col ${!project.comingSoon ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden flex-shrink-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {!project.comingSoon && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40">
                            <span className="text-white text-xs tracking-widest uppercase font-normal">Learn more</span>
                          </div>
                        )}
                        {project.comingSoon && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white text-xs">Coming Soon</span>
                          </div>
                        )}
                      </div>
                      {/* Text */}
                      <div className="p-4 flex flex-col gap-0.5">
                        <span className="text-sm text-gray-500">{project.title}</span>
                        <p className="text-sm text-gray-800 font-light leading-snug">{project.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column — Featured Projects */}
        <div className="flex flex-col items-end gap-4 w-56 flex-shrink-0">
          <p className="text-white font-light text-2xl">
            Featured Project
          </p>
          <div className="flex flex-col gap-3 items-end">
            {featuredProjects.map((project) => (
              <button
                key={project.id}
                onMouseEnter={() => handleProjectEnter(project.id)}
                onMouseLeave={handleProjectLeave}
                onClick={() => !project.comingSoon && navigate(project.route)}
                className={`px-5 py-2 rounded-full text-sm border transition-all duration-200 ${
                  hoveredFeatured === project.id
                    ? 'bg-white text-[#1e3a5f] border-white'
                    : 'bg-transparent text-white border-white/50 hover:border-white'
                } ${project.comingSoon ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
              >
                {project.label}
              </button>
            ))}
          </div>
        </div>
      </div>{/* end two-column row */}
    </div>

    {/* Full-width footer */}
    {!activeProject && (
      <div className="fixed bottom-0 left-0 right-0 z-20 pb-12">
        <div className="px-4 md:px-6 xl:px-20 w-full max-w-[1728px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/boyun-leung/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/boyunleung/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://github.com/swiftplicity" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
            <a href="mailto:boyun.leung@gmail.com" aria-label="Email" className="text-white/70 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
          <p className="text-white/70 text-xs">
            &copy; 2026 Created by Boyun with the help of Claude
          </p>
        </div>
      </div>
    )}
    </div>
  );
}
