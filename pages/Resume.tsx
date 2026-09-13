import React from "react";
import { LinkedinIcon, InstagramIcon, GithubIcon, MailIcon, FileDownIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ps = { fontFamily: "'Open Sans', sans-serif" };

/** The downloadable copy of this CV. */
const RESUME_PDF_URL =
  "https://drive.google.com/file/d/1Z9i5vpS4O2aidPJrrCkFEfrM7ZcBpzET/view?usp=sharing";

/** An inline link inside a bullet, matching the underlined links in the PDF. */
function Ref({ to, href, children }: { to?: string; href?: string; children: React.ReactNode }) {
  const className =
    "text-[#1938D1] underline underline-offset-2 hover:opacity-70 transition-opacity";
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

type Entry = {
  title: string;
  org: string;
  period: string;
  bullets: React.ReactNode[];
};

const experience: Entry[] = [
  {
    title: "Co-Founder & Creative Director",
    org: "For Your Delight",
    period: "September 2024 – Current",
    bullets: [
      "Co-founded a Toronto-based custom stationery and event design business offering wedding packages, live painting services, party favours, printmaking, and personalized illustrations",
      "Designed and produced print materials including wedding invitation suites, envelopes, menus, signage, thank-you cards, and branded packaging, managing projects from concept through print production",
      "Developed and maintained the studio's brand identity and visual standards across all client-facing materials, digital platforms, and social media",
      "Built and managed the business website, creating all digital content and marketing assets",
      "Coordinated with external vendors including printers and photographers to ensure high-quality execution of event materials",
      "Managed client relationships end-to-end, conducting consultations to translate client vision into cohesive, custom designs for weddings and events",
    ],
  },
  {
    title: "Product Designer",
    org: "IBM Canada",
    period: "September 2024 – May 2026",
    bullets: [
      <>
        Lead designer and product owner for an internal{" "}
        <Ref to="/projects/support-system">support system</Ref> serving 70+ support staff across 16
        products; reviewed 2,400+ tickets and ran stakeholder interviews to identify recurring pain
        points, improving response times and reducing incoming requests
      </>,
      <>
        Developed and refined components for the team's{" "}
        <Ref to="/projects/sn-design-system">design system</Ref>, ensuring WCAG compliance and
        scalability across products
      </>,
      "Owned designs for personalized learning path, authenticated homepage, and user skills on a portal platform serving 8M+ learners across IBM's enterprise and consumer products",
      <>
        Designed UI/UX for <Ref href="https://mark-ai-grader.com/">Mark</Ref>, a multimodal AI
        assignment grader used by 181K+ learners across 402K+ submissions for enterprise
        certification and paid learners
      </>,
      "Developed high-fidelity wireframes and developer specs for a learning content authoring platform and multiple AI assistants",
      "Led design and front-end implementation for a portal's new e-commerce capability and full brand refresh, collaborating with the CTO, engineering, and external partners",
      "Designed additional learning products including a Carbon-based video player (13K users, 100K views/year) and an interactive podcast tool (400+ creators, 30K+ podcasts), distributed across Coursera, edX, and IBM enterprise tools",
      "Presented design talks to the team, mentored incoming designers, interviewed candidates, and baked extensively for team morale :)",
    ],
  },
  {
    title: "Designer",
    org: "Nordlands",
    period: "April 2022 – December 2023",
    bullets: [
      "Designed new gravestone layouts based on client specifications",
      "Demonstrated attention to detail and problem solving by editing Chinese characters and layouts to match pre existing designs",
      "Prepared layouts to be cut by ensuring designs follow necessary parameters",
    ],
  },
  {
    title: "User Experience Design Intern",
    org: "TRIYO",
    period: "May 2021 – August 2021",
    bullets: [
      "Designed web app and Microsoft Office Add-in prototypes, meeting usability and business requirements",
      <>
        Followed industry best practices to create a consistent, modular, and scalable{" "}
        <Ref to="/projects/design-system">design system</Ref> to be used company wide for all future
        work
      </>,
      "Co-led the company transition from Adobe XD to Figma, improving design file organization and collaboration with engineering and marketing team",
      "Identified navigation errors, redundancies, and confusing UI elements through usability testing sessions",
    ],
  },
  {
    title: "Marketing & Social Media",
    org: "V.O.C. Events/Devoted to You",
    period: "May 2020 – January 2021",
    bullets: [
      "Designed, wrote copy for, and scheduled social media campaigns across brand and client's social media channels",
      "Developed and managed social media platforms including Instagram, Twitter, Facebook, Pinterest, and LinkedIn",
      "Assisted in the execution of in-person events and weddings",
    ],
  },
  {
    title: "Constituency Assistant",
    org: "MPP Markham Unionville",
    period: "May 2019 – August 2019",
    bullets: [
      "Photographed events and created digital content on Photoshop and Premiere in order to maintain social media platforms",
      "Exhibited attention to detail and proficiency through data entry on Excel and Salesforce database",
      "Demonstrated interpersonal skills by interacting with constituents through in person events and over the phone",
    ],
  },
];

const community: Entry[] = [
  {
    title: "Guiding Leader",
    org: "Girl Guides of Canada",
    period: "September 2007 – Current",
    bullets: [
      "Planned, hosted, and oversaw activities, camps, and event days",
      "Organized and tracked member progress to encourage skills development",
      "Treasurer for local unit: collected donations and fees, budgeted for activities",
    ],
  },
  {
    title: "Pet Adoption Counsellor",
    org: "Toronto Cat Rescue",
    period: "November 2024 – August 2025",
    bullets: [
      "Coordinating and Interviewing potential adopters to help cats find their forever homes!",
    ],
  },
  {
    title: "User Experience Design",
    org: "lleTTonna",
    period: "September 2020 – April 2021",
    bullets: [
      "Collaborated with the UX team to conduct user research on the needs of mothers experiencing postpartum depression",
      "Visualized research findings through user personas and journey maps",
      "Designed low-fidelity prototypes of landing, booking, explore, and conferencing pages",
    ],
  },
  {
    title: "Edition Magazine Layout",
    org: "Creators Collective",
    period: "October 2019 – March 2020",
    bullets: [
      "Collaborated with a team to develop a visual theme and create print-ready magazine layouts using Adobe Photoshop, InDesign, and Figma",
    ],
  },
  {
    title: "Junior Director of Operations",
    org: "GBDA Society",
    period: "September 2018 – March 2020",
    bullets: ["Established and managed the creative direction of GBDA society"],
  },
  {
    title: "Yearbook Editor-In-Chief",
    org: "A.Y Jackson S.S",
    period: "September 2015 – July 2018",
    bullets: [
      "Executed leadership skills through managing yearbook direction, theme, ladder and deadlines",
      "Edited and created layout pages and spreads",
      "Performed interpersonal skills by working and communicating with committee, printing company, staff advisor and admin",
    ],
  },
];

const education = [
  {
    school: "University of Toronto",
    credential: "Master of Information, User Experience Design",
    period: "2023 – 2026",
  },
  {
    school: "University of Waterloo",
    credential: "Bachelor of Global Business and Digital Arts | Dean's Honours List",
    period: "2018 – 2022",
  },
];

const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Skills",
    items: [
      "Design Systems",
      "Rapid Prototyping",
      "Wireframing",
      "User Research",
      "User Personas",
      "Usability Testing",
      "Storyboarding",
      "Agile Development",
      "Visual Design",
      "Storytelling",
      "Information Architecture",
      "Video Editing",
      "Photography",
      "Front End Development",
      "Vibe Coding",
    ],
  },
  {
    label: "Tools",
    items: [
      "Figma",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "AdobeXD",
      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
      "Miro",
      "Jira",
      "R",
      "Python",
      "Balsamiq",
      "SignLabs",
      "Sketch",
      "Git",
      "Framer",
      "Playwright (end-to-end testing)",
    ],
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[#1938D1] text-[13px] uppercase tracking-[0.18em] font-medium mb-6"
      style={ps}
    >
      {children}
    </h2>
  );
}

function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-6 gap-y-1 mb-1">
        <h3 className="text-[#222222] text-[16px] font-medium" style={ps}>
          {entry.title}
          <span className="text-gray-400 font-normal"> · </span>
          <span className="text-[#1938D1] font-normal">{entry.org}</span>
        </h3>
        <p className="text-gray-500 text-[13px] font-normal shrink-0" style={ps}>
          {entry.period}
        </p>
      </div>
      <ul className="mt-3">
        {entry.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-[#222222] text-[14px] font-normal leading-relaxed mb-2"
            style={ps}
          >
            <span className="text-[#1938D1] shrink-0 mt-0.5" aria-hidden="true">
              •
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Resume() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-6 sm:px-8 py-12 md:py-20">
        {/* Header */}
        <header className="pb-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h1
                className="text-[#222222] text-[32px] sm:text-[40px] leading-tight mb-2"
                style={{ ...ps, fontVariationSettings: "'wdth' 100" }}
              >
                Boyun Leung
              </h1>
              <p
                className="text-[#1938D1] text-[15px] sm:text-[17px] font-normal"
                style={{ ...ps, fontVariationSettings: "'wdth' 100" }}
              >
                Product Designer
              </p>
            </div>

            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 shrink-0 self-start sm:self-auto px-5 py-2 rounded-full border border-gray-300 text-gray-600 text-[13px] font-normal hover:border-[#1938D1] hover:text-[#1938D1] transition-colors"
              style={ps}
            >
              <FileDownIcon size={15} />
              Download Resume
            </a>
          </div>
        </header>

        {/* Experience */}
        <section className="pt-7 pb-10 border-b border-gray-200">
          <SectionHeading>Experience</SectionHeading>
          <div className="flex flex-col gap-9">
            {experience.map(entry => (
              <EntryBlock key={`${entry.org}-${entry.title}`} entry={entry} />
            ))}
          </div>
        </section>

        {/* Community */}
        <section className="py-10 border-b border-gray-200">
          <SectionHeading>Community</SectionHeading>
          <div className="flex flex-col gap-9">
            {community.map(entry => (
              <EntryBlock key={`${entry.org}-${entry.title}`} entry={entry} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="py-10 border-b border-gray-200">
          <SectionHeading>Education</SectionHeading>
          <div className="flex flex-col gap-5">
            {education.map(entry => (
              <div key={entry.school}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-6 gap-y-1">
                  <h3 className="text-[#222222] text-[16px] font-medium" style={ps}>
                    {entry.school}
                  </h3>
                  <p className="text-gray-500 text-[13px] font-normal shrink-0" style={ps}>
                    {entry.period}
                  </p>
                </div>
                <p className="text-gray-600 text-[14px] font-normal mt-0.5" style={ps}>
                  {entry.credential}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="py-10">
          <SectionHeading>Skills</SectionHeading>
          <div className="flex flex-col gap-6">
            {skillGroups.map(group => (
              <div key={group.label}>
                <p className="text-gray-500 text-[12px] font-normal mb-2.5" style={ps}>
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-[#222222] text-[13px] font-normal"
                      style={ps}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="w-full max-w-[1728px] mx-auto px-4 md:px-6 xl:px-20 pb-16">
        <div className="border-t border-gray-200 pt-12">
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/boyun-leung/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1938D1] hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={28} />
            </a>
            <a
              href="https://www.instagram.com/boyunleung/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1938D1] hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <InstagramIcon size={28} />
            </a>
            <a
              href="https://github.com/swiftplicity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1938D1] hover:opacity-70 transition-opacity"
              aria-label="GitHub"
            >
              <GithubIcon size={28} />
            </a>
            <a
              href="mailto:boyun.leung@gmail.com"
              className="text-[#1938D1] hover:opacity-70 transition-opacity"
              aria-label="Email"
            >
              <MailIcon size={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
