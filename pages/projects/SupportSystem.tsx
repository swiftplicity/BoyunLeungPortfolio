import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Linkedin, Instagram, Github, Mail, X } from "lucide-react";
import { useState } from "react";
import supportSystemImage from 'figma:asset/0118a6518dee130d65796f2ed4ea41f14048ef7b.png';
import dashboardImage from 'figma:asset/96b8a19f33ef19266a51fc87826824e50ddcaca6.png';
import oldTicketImage from 'figma:asset/047e3c4aca9f6b48ceafdb26c7096a714b726e39.png';
import agentFlowImage from 'figma:asset/fd69de1621565fb3566f4621de245a8e85c7860d.png';
import newTicketImage from 'figma:asset/74ed1ab8e6283b2bda1b7eeab3e652ece1dce512.png';

export function SupportSystem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlowModalOpen, setIsFlowModalOpen] = useState(false);
  const [isNewTicketModalOpen, setIsNewTicketModalOpen] = useState(false);

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
        IBM Skills Network Support
      </h1>
      
      <div className="mb-8 flex flex-wrap gap-2">
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          UX Design
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Product Management
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Web Application
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          End-to-end
        </span>
      </div>

      {/* Hero Image */}
      <div className="mb-8 aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100">
        <ImageWithFallback
          src={supportSystemImage}
          alt="Skills Network Support"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="prose max-w-none">
        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Overview
        </h2>

        {/* Project Details */}
        <div className="mb-8 space-y-3">
          <div>
            <span className="text-[#1e3a5f] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>Role: </span>
            <span className="text-[#585858] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>Solo Designer & Product Manager</span>
          </div>
          <div>
            <span className="text-[#1e3a5f] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>Timeline: </span>
            <span className="text-[#585858] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>August 2025 onwards</span>
          </div>
          <div>
            <span className="text-[#1e3a5f] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>Background: </span>
            <span className="text-[#585858] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>A custom support web application system to unify support across multiple products and user types, under constraints that prevented the use of external platforms.</span>
          </div>
          <div>
            <span className="text-[#1e3a5f] text-[16px] block mb-2" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>Responsibilities: </span>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-[#585858] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>Owned the end-to-end design and implementation of a support system web application</li>
              <li className="text-[#585858] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>Acted as product manager, defining scope, priorities, and success metrics</li>
              <li className="text-[#585858] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>Planned and conducted stakeholder interviews to understand operational needs and constraints</li>
              <li className="text-[#585858] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>Analyzed support ticket data to identify recurring issues and systemic pain points</li>
              <li className="text-[#585858] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>Translated insights into product requirements, and improved user flows</li>
              <li className="text-[#585858] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>Designed solutions to improve support staff efficiency and response rates</li>
              <li className="text-[#585858] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>Introduced proactive design strategies to reduce incoming support requests</li>
              <li className="text-[#585858] text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>Partnered closely with developers and worked on font-end code to deliver iteratively in an agile environment</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-8 rounded-lg bg-gradient-to-r from-[#1938D1]/10 to-[#FAE258]/20 border-l-4 border-[#1938D1] p-6">
          <p className="text-[#1938D1] text-[18px] leading-relaxed italic" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            This case study highlights a selected portion of the overall project. I’m happy to share more details about the entire project upon request.
          </p>
        </div>
        
      {/* Issues Page */}
        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          An improved ticket issues page
        </h2>

        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
         The issues ticket page is the primary workspace for support agents. Here agents are able to review ticket details, examine raw data and chat history, communicate with learners when additional context is needed, and ultimately resolve the ticket.
        </p>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>
         Given its role in the core workflow, clarity on this page is critical to support agent efficiency and producing a quality experience.
        </p>
        
        {/* Dashboard Image */}
        <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
          <img
            src={dashboardImage}
            alt="Support System Dashboard"
            className="h-full w-full object-cover"
          />
        </div>

        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Identifying painpoints and opprotunities
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          To understand the challenges faced by support agents and uncover opportunities for improvement, I employed a mix of qualitative and quantitative research methods:
          <br /><br />
          <strong>Stakeholder Interviews:</strong> Conducted interviews with support agents to understand their workflows and determine which information is most critical to their work.
          <br /><br />
          <strong>Heuristic Analysis:</strong> Reviewed the page myself to identify usability issues and friction points in the existing interface.
          <br /><br />
          <strong>Live Ticket Review:</strong> Examined real support tickets to detect patterns of mistakes or inefficiencies, and assessed how the current design may have contributed.
          <br /><br />
          <strong>Ticket Type Analysis:</strong> Analyzed the types of tickets support agents receive to inform prioritization and design decisions.
        </p>

        {/* Old Ticket Issues Image */}
        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100 cursor-pointer relative group" onClick={() => setIsModalOpen(true)}>
          <img
            src={oldTicketImage}
            alt="Old ticket issues page analysis"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>Click to expand</span>
          </div>
        </div>

        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          An improved work flow
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          To improve the support ticket page, I redesigned it with the key goal of <strong>reducing cognitive overload</strong> and bringing the most important information to the forefront. At the same time, I defined a <strong>structured workflow for support agents</strong> that not only reduced the amount of work required per ticket but also improved communication between our system and learners. This approach ensured that the page supported both efficiency and clarity, empowering agents to resolve tickets faster while maintaining a better learner experience.        </p>

        {/* Support Agent Flow Image */}
        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100 cursor-pointer relative group" onClick={() => setIsFlowModalOpen(true)}>
          <img
            src={agentFlowImage}
            alt="Support agent flow diagram"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>Click to expand</span>
          </div>
        </div>

        {/* New Ticket Issues Page Image */}
        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100 cursor-pointer relative group" onClick={() => setIsNewTicketModalOpen(true)}>
          <img
            src={newTicketImage}
            alt="New ticket issues page design"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-[16px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>Click to expand</span>
          </div>
        </div>

        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          The Big Picture
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          Through this process, I took a step back to examine the bigger picture. While reviewing support tickets manually, I noticed patterns in the types of tickets submitted. Many of the tickets we received could have or should have been resolved by our AI assistant. Since learners must first attempt to resolve their issue with the AI before submitting a ticket, I realized that improving support didn't rely solely on agents but also on enhancing the AI Agent experience. By updating the AI assistant's knowledge base with solutions derived from ticket issues, we were able to proactively reduce ticket volume. <strong>This approach resulted in an average 50% decrease in incoming support requests.</strong>
        </p>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between items-center gap-4">
          <Link 
            to="/projects/design-system"
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

    {/* Old Ticket Image Modal */}
    {isModalOpen && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={() => setIsModalOpen(false)}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>
        <div className="max-w-7xl max-h-[90vh] overflow-auto">
          <img
            src={oldTicketImage}
            alt="Old ticket issues page analysis"
            className="w-full h-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )}

    {/* Agent Flow Image Modal */}
    {isFlowModalOpen && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={() => setIsFlowModalOpen(false)}
      >
        <button
          onClick={() => setIsFlowModalOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>
        <div className="max-w-7xl max-h-[90vh] overflow-auto">
          <img
            src={agentFlowImage}
            alt="Support agent flow diagram"
            className="w-full h-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )}

    {/* New Ticket Image Modal */}
    {isNewTicketModalOpen && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={() => setIsNewTicketModalOpen(false)}
      >
        <button
          onClick={() => setIsNewTicketModalOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>
        <div className="max-w-7xl max-h-[90vh] overflow-auto">
          <img
            src={newTicketImage}
            alt="New ticket issues page design"
            className="w-full h-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )}

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
