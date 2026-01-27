import { ProjectCard } from "../components/ProjectCard";
import { Linkedin, Instagram, Github, Mail } from "lucide-react";

const designSystemImage = '/assets/projects/design-system/harmony-design-system.png';
const cognitiveClassImage = 'https://placehold.co/800x600/e5e7eb/6b7280?text=Cognitive+Class';
const markAIImage = '/assets/projects/mark-ai-grader.png';
const supportSystemImage = '/assets/projects/support-system/ibm-skills-network-support.png';
const contextManagerImage = '/assets/projects/ibm-watsonx-workshop-context-manager.png';
const learningSessionsImage = 'https://placehold.co/800x600/e5e7eb/6b7280?text=Learning+Sessions';

export default function Home() {
  const projects = [
    {
      title: "IBM Skills Network Support",
      description: "I  managed and designed the implementation of a support system web application",
      image: supportSystemImage,
      tags: ["UX Design", "Product Management", "Web Application", "End-to-end"],
      route: "/projects/support-system",
    },
    {
      title: "IBM watsonX Workshop Context Manager",
      description: "I refined an AI context tool by improving usability and aligning the experience with the Carbon Design System",
      image: contextManagerImage,
      tags: ["High fidelity", "UI Design", "Design Systems", "AI Web Application"],
      route: "/projects/context-manager",
      comingSoon: true,
    },
    {
      title: "Mark AI Grader",
      description: "I designed features to enhance the author's and learner's experience for an AI grader",
      image: markAIImage,
      tags: ["AI Integration", "Wireframing", "Prototyping", "User Experience"],
      route: "https://mark-ai-grader.com/",
      isExternal: true,
    },
    {
      title: "Harmony Design System",
      description: "I updated and transitioned an outdated design system to be consistent, scalable, and modular",
      image: designSystemImage,
      tags: ["Design Systems", "Component Library", "Scalability", "Documentation"],
      route: "/projects/design-system",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="mx-auto max-w-6xl px-8 pt-8 md:pt-16 pb-2 md:pb-6">
        <h1 className="mb-6 md:mb-8 font-['Open_Sans',_sans-serif] text-[#1e3a5f] text-[32px] sm:text-[40px] md:text-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Hey, I'm Boyun!
        </h1>
        <p className="font-['Open_Sans',_sans-serif] text-[#1e3a5f] text-[18px] sm:text-[32px] md:text-[40px] leading-[1.3]" style={{ fontVariationSettings: "'wdth' 100" }}>
          I'm a Product Designer with a passion for creating. Whether it's a product, a service, or an event, I aim to make experiences 
          <span className="italic text-[rgb(25,56,209)]"> delightful ✨</span>
        </p>
        <h2 className="mb-6 md:mb-8 font-['Open_Sans',_sans-serif] text-[#1e3a5f] text-[16px] sm:text-[20px] md:text-[24px] py-4 font-light">
          Currently Designer @ <a href="https://skills.network/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1938D1] transition-colors">IBM Skills Network</a> and Cofounder of <a href="https://www.foryourdelight.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1938D1] transition-colors">foryourdelight</a>
        </h2>
      </div>

      {/* Projects Section */}
      <div id="projects" className="mx-auto max-w-6xl px-8 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto max-w-6xl px-8 pb-16">
        <div className="border-t border-gray-200 pt-12">
          <h2 className="mb-6 font-['Open_Sans',_sans-serif] text-[#1938D1] text-[18px] sm:text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Let's Connect
          </h2>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/boyun-leung/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#1938D1] hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://www.instagram.com/boyunleung/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#1938D1] hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a 
              href="https://github.com/swiftplicity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#1938D1] hover:opacity-70 transition-opacity"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a 
              href="mailto:boyun.leung@gmail.com" 
              className="text-[#1938D1] hover:opacity-70 transition-opacity"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
