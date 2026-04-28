import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LinkedinIcon, InstagramIcon, GithubIcon, MailIcon } from "lucide-react";

const designSystemImage = '/assets/projects/design-system/harmony-design-system.png';
const colorPaletteImage = '/assets/projects/design-system/color-palette-guidelines.png';
const colorGroupingsImage = '/assets/projects/design-system/recommended-colour-groupings.png';
const gridsViewpointsImage = '/assets/projects/design-system/grids-and-viewpoints.png';
const badgesImage = '/assets/projects/design-system/badges-component.png';
const buttonsImage = '/assets/projects/design-system/buttons-component.png';
const calendarImage = '/assets/projects/design-system/calendar-component.png';
const inputFieldImage = '/assets/projects/design-system/input-field-component.png';
const toastNotificationImage = '/assets/projects/design-system/toast-notification-component.png';
const tablePatternImage = '/assets/projects/design-system/table-pattern.png';
const setRemindersPatternImage = '/assets/projects/design-system/set-reminders-pattern.png';

function SectionRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-20 py-12">
      <div className="pt-1">
        <span className="text-xl text-[#6B7280] font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>{label}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

export function DesignSystem() {
  const location = useLocation();
  const hasHeroTransition = !!(location.state as { heroFromRect?: unknown })?.heroFromRect;
  const [heroImageVisible, setHeroImageVisible] = useState(!hasHeroTransition);

  useEffect(() => {
    if (!hasHeroTransition) return;
    const timer = setTimeout(() => setHeroImageVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className="w-full">

      {/* Hero — full width with overlay */}
      <div id="design-system-intro-image" className="relative w-full" style={{ minHeight: '60vh', opacity: heroImageVisible ? 1 : 0, transition: 'opacity 150ms ease' }}>
        <img
          src={designSystemImage}
          alt="Harmony Design System"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative px-4 md:px-6 xl:px-20 pb-10 md:pb-16 pt-[30vh]">
          <h1
            className="text-white text-[36px] sm:text-[48px] md:text-[60px] leading-tight mb-3"
            style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
          >
            Harmony Design System
          </h1>
          <p
            className="text-white/75 text-[16px] md:text-[20px]"
            style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
          >
            Building a scalable, consistent design language from the ground up
          </p>
        </div>
      </div>

      {/* All content inside padded container */}
      <div className="w-full max-w-[1728px] mx-auto px-4 md:px-6 xl:px-20">

        {/* Introduction */}
        <SectionRow label="Introduction">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-[12px] text-[#9CA3AF] mb-1" style={{ fontFamily: "'Open Sans', sans-serif" }}>Company</p>
              <p className="text-[15px] text-[#1e3a5f]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>Triyosoft</p>
            </div>
            <div>
              <p className="text-[12px] text-[#9CA3AF] mb-1" style={{ fontFamily: "'Open Sans', sans-serif" }}>Year</p>
              <p className="text-[15px] text-[#1e3a5f]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>2021</p>
            </div>
            <div>
              <p className="text-[12px] text-[#9CA3AF] mb-1" style={{ fontFamily: "'Open Sans', sans-serif" }}>Role</p>
              <p className="text-[15px] text-[#1e3a5f]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>UX Design Intern</p>
            </div>
          </div>
          <p className="text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
            During my 2021 Triyosoft remote internship, I worked as a member of the product team. In addition to designing web app and Microsoft Office Add-in prototypes, I alongside the other UX Intern, Kim Pita spearheaded the creation of a brand new design system. We spent two months on this project and worked in collaboration to create the first iteration to be handed off to the next set of interns.
          </p>
        </SectionRow>

        {/* Challenge */}
        <SectionRow label="Challenge">
          <div className="rounded-xl bg-gradient-to-r from-[#1938D1]/10 to-[#FAE258]/20 border-l-4 border-[#1938D1] p-6">
            <p className="text-[#1938D1] text-[18px] leading-relaxed italic" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              "How might we create a new design system that can be easily used and integrated into current and future products?"
            </p>
          </div>
        </SectionRow>

        {/* The Old System */}
        <SectionRow label="The Old System">
          <p className="mb-4 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
            When we pushed for a move from Adobe XD to Figma, we also realized this would be the perfect opportunity to overhaul the old design guide and create a brand new comprehensive design system following industry best practices. We researched and referenced many public design systems with our main inspirations drawing from Carbon.
          </p>
          <p className="mb-8 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
            We began by identifying Pain Points within the current system. With these pain points in mind, we developed solutions that would improve the future use of the design system. Our key discoveries were:
          </p>

          <div className="space-y-8">
            {[
              {
                title: "Colours and Typography",
                pain: "Designers and Developers would select random colours and font sizes as there was no defined documentation specifying use cases.",
                solution: "Create colour and type face tokens with detailed documentation that accounted for accessibility.",
              },
              {
                title: "Components",
                pain: "The old design system was simply a collection of components that lacked any explanation of what they were or how they should be used. After evaluating previous designs, we found elements that should have been components and were not in addition to a large selection of components that seemed unnecessary or redundant.",
                solution: "Determine recurring components and elements that can be used as building blocks when creating new designs.",
              },
              {
                title: "Layouts",
                pain: "Since the designs had passed through many hands there was a lot of inconsistent spacing and a mixture of \"new\" and \"old\" design elements without any clear documentation of which ones should be used.",
                solution: "Determine which elements were in use or being phased out, and create a standard by setting spacing, grids, and viewpoint guidelines.",
              },
            ].map(({ title, pain, solution }) => (
              <div key={title}>
                <p className="mb-3 text-[#1938D1] text-[18px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>{title}</p>
                <p className="mb-2 text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
                  <strong style={{ fontWeight: 500 }}>Pain Point:</strong> {pain}
                </p>
                <p className="text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
                  <strong style={{ fontWeight: 500 }}>Solution:</strong> {solution}
                </p>
              </div>
            ))}
          </div>
        </SectionRow>

        {/* The New System */}
        <SectionRow label="The New System">
          <div className="space-y-6 mb-6">
            {[
              {
                title: "Consistent",
                body: "A component looks the same, achieves the same function, and behaves the same way across all pages and experiences. Users always know what to expect, making their experience with the platform as smooth as possible.",
              },
              {
                title: "Modular",
                body: "By defining the basic elements (tokens, components, and patterns) that make up an interface, Harmony helps designers and developers optimize their time by enabling them to reuse as much as possible.",
              },
              {
                title: "Scalable",
                body: "Components are designed to be usable, accessible, and visually coherent for all potential use cases, with error states and edge cases thoroughly defined.",
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <p className="mb-2 text-[#1e3a5f] text-[20px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>{title}</p>
                <p className="text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>{body}</p>
              </div>
            ))}
          </div>
          <p className="text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
            We organized Harmony into three sections: Guidelines, Components, and Patterns. The following is a selection from the final design system.
          </p>
        </SectionRow>

        {/* Guidelines */}
        <SectionRow label="Guidelines">
          <div className="space-y-6">
            <div className="w-full overflow-hidden rounded-md">
              <img src={colorPaletteImage} alt="Color palette guidelines" className="w-full" />
            </div>
            <div className="w-full overflow-hidden rounded-md">
              <img src={colorGroupingsImage} alt="Recommended colour groupings" className="w-full" />
            </div>
            <div className="w-full overflow-hidden rounded-md">
              <img src={gridsViewpointsImage} alt="Grids and viewpoints" className="w-full" />
            </div>
          </div>
        </SectionRow>

        {/* Components */}
        <SectionRow label="Components">
          <div className="space-y-6">
            <div className="w-full overflow-hidden rounded-md">
              <img src={badgesImage} alt="Badges component" className="w-full" />
            </div>
            <div className="w-full overflow-hidden rounded-md">
              <img src={buttonsImage} alt="Buttons component" className="w-full" />
            </div>
            <div className="w-full overflow-hidden rounded-md">
              <img src={calendarImage} alt="Calendar component" className="w-full" />
            </div>
            <div className="w-full overflow-hidden rounded-md">
              <img src={inputFieldImage} alt="Input field component" className="w-full" />
            </div>
            <div className="w-full overflow-hidden rounded-md">
              <img src={toastNotificationImage} alt="Toast notification component" className="w-full" />
            </div>
          </div>
        </SectionRow>

        {/* Patterns */}
        <SectionRow label="Patterns">
          <div className="space-y-6">
            <div className="w-full overflow-hidden rounded-md">
              <img src={tablePatternImage} alt="Table pattern" className="w-full" />
            </div>
            <div className="w-full overflow-hidden rounded-md">
              <img src={setRemindersPatternImage} alt="Set reminders pattern" className="w-full" />
            </div>
          </div>
        </SectionRow>

        {/* Takeaways */}
        <SectionRow label="Takeaways">
          <ol className="space-y-4 list-decimal pl-5">
            {[
              "How to create a design system that caters to both future designers and developers",
              "How to properly build components in Figma and set the proper restraints so that they are useful building blocks when creating designs",
              "How to thoroughly consider the functionality and use cases of each UI pattern and element in order to build a well-thought-out system",
            ].map((item) => (
              <li key={item} className="text-[#585858] text-[16px] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>{item}</li>
            ))}
          </ol>
        </SectionRow>


      </div>
    </div>

    {/* Footer */}
    <div className="w-full max-w-[1728px] mx-auto px-4 md:px-6 xl:px-20 pb-16">
      <div className="border-t border-gray-200 pt-12">
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/boyun-leung/" target="_blank" rel="noopener noreferrer" className="text-[#1938D1] hover:opacity-70 transition-opacity" aria-label="LinkedIn"><LinkedinIcon size={28} /></a>
          <a href="https://www.instagram.com/boyunleung/" target="_blank" rel="noopener noreferrer" className="text-[#1938D1] hover:opacity-70 transition-opacity" aria-label="Instagram"><InstagramIcon size={28} /></a>
          <a href="https://github.com/swiftplicity" target="_blank" rel="noopener noreferrer" className="text-[#1938D1] hover:opacity-70 transition-opacity" aria-label="GitHub"><GithubIcon size={28} /></a>
          <a href="mailto:boyun.leung@gmail.com" className="text-[#1938D1] hover:opacity-70 transition-opacity" aria-label="Email"><MailIcon size={28} /></a>
        </div>
      </div>
    </div>
    </>
  );
}
