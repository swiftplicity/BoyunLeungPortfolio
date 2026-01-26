import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Linkedin, Instagram, Github, Mail } from "lucide-react";
import designSystemImage from 'figma:asset/850075cb0dd0132df73f2746e4178c604c022ce6.png';
import colorPaletteImage from 'figma:asset/252f257c1492afb17b2ebeef97cf7bb1d4151b17.png';
import colorGroupingsImage from 'figma:asset/33f615b056ca7d0a801fbdf523ef4b3c29f69070.png';
import gridsViewpointsImage from 'figma:asset/ce5d5cad0f1289e00edbd7a6eb59b0dc402bec5d.png';
import badgesImage from 'figma:asset/a79a2d9d60fc66a09c6ef3414e900c51cd15c806.png';
import buttonsImage from 'figma:asset/66b661ec7ac2509e9a4448f37db697afb64d6952.png';
import calendarImage from 'figma:asset/eb22525e1b1ce87c9818df461e7e25ba08395609.png';
import inputFieldImage from 'figma:asset/98bb393cf9b7ab1f94ba7b2c9d3f059560c97f0f.png';
import toastNotificationImage from 'figma:asset/f2c2347666cf71695ed378439d07c5c6a95a45c8.png';
import tablePatternImage from 'figma:asset/fef403ef505d9c25646be02895ffa5d0240d6bbd.png';
import setRemindersPatternImage from 'figma:asset/ac0b5ec2801d873b4a4ee59dc05b41ebd0e34101.png';

export function DesignSystem() {
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
        Harmony Design System
      </h1>
      
      <div className="mb-8 flex flex-wrap gap-2">
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Design Systems
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Component Library
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Scalability
        </span>
        <span className="rounded-full bg-[#1938D1]/10 px-3 py-1 text-[#1938D1] text-[11px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Documentation
        </span>
      </div>

      {/* Hero Image */}
      <div className="mb-8 aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100">
        <ImageWithFallback
          src={designSystemImage}
          alt="Harmony Design System"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="prose max-w-none">
        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Overview
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          During my 2021 Triyosoft remote internship, I worked as a member of the product team. In addition to designing web app and Microsoft Office Add-in prototypes, I alongside the other UX Intern, Kim Pita spearheaded the creation of a brand new design system. We spent two months on this project and worked in collaboration to create the first iteration to be handed off to the next set of interns.
        </p>

        {/* How Might We Statement */}
        <div className="mb-8 rounded-lg bg-gradient-to-r from-[#1938D1]/10 to-[#FAE258]/20 border-l-4 border-[#1938D1] p-6">
          <p className="text-[#1938D1] text-[18px] leading-relaxed italic" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            "How might we create a new design system that can be easily used and integrated into current and future products?"
          </p>
        </div>

        {/* The Old System */}
        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          The Old System
        </h2>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          When we pushed for a move from Adobe XD to Figma, we also realized this would be the perfect opportunity to overhaul the old design guide and create a brand new comprehensive design system following industry best practices. We researched and referenced many public design systems with our main inspirations drawing from Carbon.         </p>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          We began by identifying Pain Points within the current system. With these pain points in mind, we developed solutions that would improve the future use of the design system. Our key discoveries were: 
        </p>

        <h4 className="mb-3 text-[#1938D1] text-[18px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Colours and Typography
        </h4>

        <p className="mb-2 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          <strong style={{ fontWeight: 500 }}>Pain Point:</strong> Designers and Developers would select random colours and font sizes as there was no defined documentation specifying use cases. 
        </p>

        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          <strong style={{ fontWeight: 500 }}>Solution:</strong> Create colour and type face tokens with detailed documentation that accounted for accessibility.
        </p>

        <h4 className="mb-3 text-[#1938D1] text-[18px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Components
        </h4>

        <p className="mb-2 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          <strong style={{ fontWeight: 500 }}>Pain Point:</strong> The old design system was simply a collection of components that lacked any explanation of what they were or how they should be used. After evaluating previous designs, we found elements that should have been components and were not in addition to a large selection of components that seemed unnecessary or redundant.
        </p>

        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          <strong style={{ fontWeight: 500 }}>Solution:</strong> Determine recurring components and elements that can be used as building blocks when creating new designs. 
        </p>

        <h4 className="mb-3 text-[#1938D1] text-[18px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Layouts
        </h4>

        <p className="mb-2 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          <strong style={{ fontWeight: 500 }}>Pain Point:</strong> Since the designs had passed through many hands there was a lot of inconsistent spacing and a mixture of “new” and “old” design elements without any clear documentation of which ones should be used.
        </p>

        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          <strong style={{ fontWeight: 500 }}>Solution:</strong> Determine which elements were in use or being phased out, and create a standard by setting spacing, grids, and viewpoint guidelines. 
        </p>
        
        {/* The New System */}
        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          The New System
        </h2>
      
        <h3 className="mb-3 text-[#1938D1] text-[20px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Consistent
        </h3>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          A component looks the same, achieves the same function, and behaves the same way across all pages and experiences. Users always know what to expect, making their experience with the platform as smooth as possible.
        </p>

        <h3 className="mb-3 text-[#1938D1] text-[20px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Modular
        </h3>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          By defining the basic elements (tokens, components, and patterns) that make up an interface, Harmony helps designers and developers optimize their time by enabling them to reuse as much as possible.
        </p>
        
        <h3 className="mb-3 text-[#1938D1] text-[20px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Scalable
        </h3>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          Components are designed to be usable, accessible, and visually coherent for all potential use cases, with error states and edge cases thoroughly defined.
        </p>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          We organized Harmony into three sections: Guidelines, Components, and Patterns. The following is a selection from the final design system. 
        </p>

        {/*Guidelines */}
        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Guidelines
        </h2>
        
        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100">
          <ImageWithFallback
            src={colorPaletteImage}
            alt="Color palette guidelines"
            className="w-full object-contain"
          />
        </div>

        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100">
          <ImageWithFallback
            src={colorGroupingsImage}
            alt="Recommended colour groupings"
            className="w-full object-contain"
          />
        </div>

        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100">
          <ImageWithFallback
            src={gridsViewpointsImage}
            alt="Grids and viewpoints"
            className="w-full object-contain"
          />
        </div>

        {/*Components */}
        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Components
        </h2>

        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100">
          <ImageWithFallback
            src={badgesImage}
            alt="Badges component"
            className="w-full object-contain"
          />
        </div>

        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100">
          <ImageWithFallback
            src={buttonsImage}
            alt="Buttons component"
            className="w-full object-contain"
          />
        </div>

        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100">
          <ImageWithFallback
            src={calendarImage}
            alt="Calendar component"
            className="w-full object-contain"
          />
        </div>

        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100">
          <ImageWithFallback
            src={inputFieldImage}
            alt="Input field component"
            className="w-full object-contain"
          />
        </div>

        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100">
          <ImageWithFallback
            src={toastNotificationImage}
            alt="Toast notification component"
            className="w-full object-contain"
          />
        </div>

        {/*Patterns */}
        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Patterns
        </h2>

        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100">
          <ImageWithFallback
            src={tablePatternImage}
            alt="Table pattern"
            className="w-full object-contain"
          />
        </div>

        <div className="mb-8 w-full overflow-hidden rounded-lg bg-gray-100">
          <ImageWithFallback
            src={setRemindersPatternImage}
            alt="Set reminders pattern"
            className="w-full object-contain"
          />
        </div>

        {/*Takeaways */}
        <h2 className="mb-4 text-[#1e3a5f] text-[24px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Takeaways
        </h2>
        
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          1. How to create a design system that caters to both future designers and developers
        </p>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          2. How to properly build components in Figma and set the proper restraints so that they are useful building blocks when creating designs 
        </p>
        <p className="mb-6 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          3. How to thoroughly consider the functionality and use cases of each UI pattern and element in order to build a well-thought-out system
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
            to="/projects/support-system"
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
