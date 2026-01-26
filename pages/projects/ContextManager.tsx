import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Linkedin, Instagram, Github, Mail } from "lucide-react";
import contextManagerImage from 'figma:asset/d38aea7ce30b73bef56c57aad420032e2d661a54.png';

export function ContextManager() {
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
        IBM watsonX Workshop Context Manager
      </h1>
      
      <div className="mb-8 flex flex-wrap gap-2">
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          High fidelity
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          UI Design
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Design Systems
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          AI Web Application
        </span>
      </div>

      {/* Hero Image */}
      <div className="mb-8 aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={contextManagerImage}
          alt="IBM watsonX Workshop Context Manager"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="prose max-w-none">
        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Overview
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          Refined the IBM watsonX Workshop Context Manager, an AI-powered tool that helps users manage and organize contextual information for workshop sessions. The project focused on improving usability and ensuring consistency with IBM's Carbon Design System.
        </p>

        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Challenge
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          The existing context management interface lacked alignment with IBM's design standards and presented usability challenges for workshop facilitators managing multiple AI contexts simultaneously. Users needed a more intuitive way to organize, search, and apply context to their AI interactions.
        </p>

        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Solution
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          I created high-fidelity UI designs that aligned with the Carbon Design System, introducing improved information architecture and interaction patterns. The redesign included enhanced search functionality, better visual hierarchy, and streamlined workflows for context creation and application.
        </p>

        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Impact
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          The refined interface improved user efficiency and brought the application into full compliance with IBM's design standards, creating a more cohesive experience within the broader watsonX ecosystem.
        </p>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between items-center gap-4">
          <Link 
            to="/projects/support-system"
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
