import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Linkedin, Instagram, Github, Mail } from "lucide-react";
import cognitiveClassImage from 'figma:asset/57313053cf026aef4fcf861970d5cd48079c721a.png';

export function LearningPlatform() {
  return (
    <>
    <div className="mx-auto max-w-4xl px-8 py-12">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-[#1938D1] hover:opacity-70 transition-opacity mb-8 text-[14px]"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      {/* Project Header */}
      <h1 className="mb-4 text-[#1e3a5f] text-[32px] sm:text-[40px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        CognitiveClass.ai
      </h1>
      
      <div className="mb-8 flex flex-wrap gap-2">
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Visual Design
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Front-end Development
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          HTML/CSS
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          UX Design
        </span>
      </div>

      {/* Hero Image */}
      <div className="mb-8 aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100">
        <ImageWithFallback
          src={cognitiveClassImage}
          alt="CognitiveClass.ai"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="prose max-w-none">
        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Overview
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          Spearheaded a full visual refresh and contributed to front-end code using HTML and CSS for an online learning platform serving over 3 million users.
        </p>

        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Challenge
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          The learning platform needed a modern visual update to improve user engagement and make the interface more intuitive for millions of users across different devices and screen sizes.
        </p>

        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Solution
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          I led the visual design overhaul, creating a fresh, modern aesthetic while ensuring consistency across all pages. Working directly with the development team, I also contributed front-end code to bring the designs to life.
        </p>

        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Impact
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          The redesign successfully modernized the platform's appearance, improving user satisfaction and engagement metrics across the 3+ million user base.
        </p>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between items-center gap-4">
          <Link 
            to="/projects/context-manager"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1938D1] bg-transparent px-6 py-3 text-[#1938D1] hover:bg-[#1938D1]/5 transition-colors text-[14px] w-[140px]"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            <ArrowLeft size={16} />
            Previous
          </Link>
          <Link 
            to="/projects/design-system"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1938D1] bg-transparent px-6 py-3 text-[#1938D1] hover:bg-[#1938D1]/5 transition-colors text-[14px] w-[140px]"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Next
            <ArrowRight size={16} />
          </Link>
        </div>
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
