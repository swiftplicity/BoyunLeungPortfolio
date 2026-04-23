import { LinkedinIcon, InstagramIcon, GithubIcon, MailIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ResponsibilitiesConstellation } from "../../components/ResponsibilitiesConstellation";
import { ImpactMetrics } from "../../components/ImpactMetrics";

const supportSystemImage = '/assets/projects/support-system/support-cover-mock.webp';
const dashboardImage = '/assets/projects/support-system/ibm-skills-network-support.webp';
const overviewGif = '/assets/support demo.gif';
const oldTicketImage = '/assets/projects/support-system/old-ticket-issues-page.webp';
const agentFlowImage = '/assets/projects/support-system/defining-new-support-agent-flow.webp';
const newTicketImage = '/assets/projects/support-system/new-ticket-issues-page.webp';

const ps = { fontFamily: "'Open Sans', sans-serif" };

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-gray-800 text-sm mb-2" style={ps}>
      <span className="text-blue-700 shrink-0 mt-0.5">•</span>
      <span>{children}</span>
    </li>
  );
}

const sections = [
  {
    label: 'Introduction',
    image: supportSystemImage,
    content: (
      <div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
          <div>
            <p className="text-xs text-gray-800 mb-0.5" style={ps}>Company</p>
            <p className="text-sm text-blue-900 font-medium" style={ps}>IBM</p>
          </div>
          <div>
            <p className="text-xs text-gray-800 mb-0.5" style={ps}>Year</p>
            <p className="text-sm text-blue-900 font-medium" style={ps}>2025–2026</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs text-gray-800 mb-0.5" style={ps}>Role</p>
            <p className="text-sm text-blue-900 font-medium" style={ps}>Solo Designer & Product Manager</p>
          </div>
        </div>
        <p className="text-gray-800 text-sm leading-relaxed" style={ps}>
          I was tasked with improving an internal support product used across multiple products. What began as a product UI improvement evolved into a full redesign of the support experience, spanning user journeys, internal workflows, and system-level processes.
        </p>
      </div>
    ),
  },
  {
    label: 'Responsibilities',
    image: supportSystemImage,
    visual: <ResponsibilitiesConstellation />,
    content: (
      <ul>
        {[
          <span>Owned the <strong>end-to-end product design and delivery</strong></span>,
          <span>Defined <strong>product scope, priorities, and success metrics</strong></span>,
          <span>Conducted <strong>stakeholder interviews</strong> to understand workflows and constraints</span>,
          <span>Analyzed <strong>support ticket data</strong> to uncover recurring issues</span>,
          <span>Translated insights into <strong>product requirements and user flows</strong></span>,
          <span>Designed solutions to improve <strong>agent efficiency and response rates</strong></span>,
          <span>Introduced <strong>proactive support strategies</strong> to reduce ticket volume</span>,
          <span>Partnered closely with developers, contributing to <strong>front-end implementation</strong></span>,
          <span>Worked iteratively in an <strong>agile environment</strong></span>,
        ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
      </ul>
    ),
  },
  {
    label: 'Overview',
    image: overviewGif,
    content: (
      <div>
        <p className="text-gray-800 text-sm leading-relaxed mb-6" style={ps}>
          The organization supported millions of users across 10+ products, but support was fragmented, inefficient, and difficult to scale.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[{ num: '4M', label: 'Users' }, { num: '30', label: 'Support Agents' }, { num: '10+', label: 'Products' }].map(({ num, label }) => (
            <div key={label}>
              <p className="text-blue-900 text-3xl font-semibold leading-tight" style={ps}>{num}</p>
              <p className="text-gray-800 text-xs" style={ps}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'The Problem',
    image: oldTicketImage,
    content: (
      <div>
        <p className="text-blue-900 text-sm font-medium mb-2" style={ps}>Initial Framing</p>
        <ul className="mb-5">
          {['Inefficient agent interface', 'High volume of repetitive tickets', 'Low resolution rates', 'Limited visibility into performance'].map(i => <Bullet key={i}>{i}</Bullet>)}
        </ul>
        <p className="text-blue-900 text-sm font-medium mb-2" style={ps}>Scope Expansion</p>
        <ul className="mb-4">
          {[
            'Many tickets should have been resolved earlier in the user journey',
            'The AI assistant was not effectively resolving user needs',
            'Agents were compensating for upstream failures',
            'Support workflows and internal processes were misaligned',
          ].map(i => <Bullet key={i}>{i}</Bullet>)}
        </ul>
        <p className="text-gray-800 text-sm leading-relaxed" style={ps}>
          The challenge wasn't just improving a support product — it was redesigning the end-to-end experience across users, automation, and agents.
        </p>
      </div>
    ),
  },
  {
    label: 'Outcome',
    image: dashboardImage,
    visual: <ImpactMetrics />,
    content: (
      <div>
        <ul className="mb-4">
          {['50% reduction in incoming support requests', '6% → 100% increase in addressed support tickets', 'Improved efficiency and response consistency across products'].map(i => <Bullet key={i}>{i}</Bullet>)}
        </ul>
      </div>
    ),
  },
  {
    label: 'Approach',
    image: oldTicketImage,
    content: (
      <div>
        <p className="text-gray-800 text-sm leading-relaxed mb-4" style={ps}>
          This was an ongoing agile process, where insights were continuously surfaced and addressed through product iteration.
        </p>
        <p className="text-gray-800 text-sm mb-3" style={ps}>I worked across:</p>
        <ul>
          {[
            'Stakeholder interviews with support agents',
            'Continuous review of live tickets and escalation patterns',
            'Heuristic analysis of agent workflows and tools',
            'Ticket categorization and trend analysis over time',
          ].map(i => <Bullet key={i}>{i}</Bullet>)}
        </ul>
        <p className="text-gray-800 text-sm leading-relaxed mt-4" style={ps}>
          Each iteration revealed additional friction points across different layers of the system.
        </p>
      </div>
    ),
  },
  {
    label: 'Proactive AI Support',
    image: agentFlowImage,
    content: (
      <div>
        <ul className="mb-2">
          {[
            'Identified recurring issues from live ticket data',
            'Continuously updated AI assistant responses and coverage',
            'Improved accuracy and resolution rates over time',
          ].map(b => <Bullet key={b}>{b}</Bullet>)}
        </ul>
        <p className="text-blue-700 text-sm" style={ps}><span className="font-medium">Impact:</span> ~50% reduction in incoming support requests</p>
      </div>
    ),
  },
  {
    label: 'Agent Workflow Improvements',
    image: agentFlowImage,
    content: (
      <div>
        <ul className="mb-2">
          {[
            'Streamlined high-frequency support flows',
            'Reduced friction in ticket triage and response handling',
            'Improved clarity and consistency in tools and UI',
          ].map(b => <Bullet key={b}>{b}</Bullet>)}
        </ul>
        <p className="text-blue-700 text-sm" style={ps}><span className="font-medium">Impact:</span> Faster response times and improved resolution efficiency</p>
      </div>
    ),
  },
  {
    label: 'Cross-Team Feedback Loops',
    image: agentFlowImage,
    content: (
      <div>
        <ul className="mb-2">
          {[
            'Strengthened communication between users, agents, and internal teams',
            'Surfaced recurring issues more clearly across teams',
            'Enabled faster iteration on high-impact problems',
          ].map(b => <Bullet key={b}>{b}</Bullet>)}
        </ul>
        <p className="text-blue-700 text-sm" style={ps}><span className="font-medium">Impact:</span> Fewer repeated tickets and more consistent support responses</p>
      </div>
    ),
  },
  {
    label: 'Metrics & Visibility',
    image: agentFlowImage,
    content: (
      <div>
        <ul className="mb-2">
          {[
            'Introduced tracking for ticket trends, resolution rates, and recurring issues',
            'Enabled teams to prioritize improvements based on real data',
            'Supported continuous iteration across product and support systems',
          ].map(b => <Bullet key={b}>{b}</Bullet>)}
        </ul>
        <p className="text-blue-700 text-sm" style={ps}><span className="font-medium">Impact:</span> Improved decision-making and system visibility</p>
      </div>
    ),
  },
  {
    label: 'Conclusion',
    image: newTicketImage,
    content: (
      <div>
        <p className="text-gray-800 text-sm leading-relaxed mb-4" style={ps}>
          This project shifted support from a reactive system to a proactive experience.
        </p>
        <p className="text-gray-800 text-sm leading-relaxed mb-1" style={ps}>The biggest insight was that:</p>
        <p className="text-blue-900 text-sm font-medium leading-relaxed mb-4" style={ps}>
          The most effective way to scale support is not to handle more tickets — but to prevent them.
        </p>
        <p className="text-gray-800 text-sm mb-2" style={ps}>By combining product thinking, data analysis, and design execution, I was able to:</p>
        <ul className="mb-4">
          {['Reduce operational strain', 'Improve user outcomes', 'Build a system that continues to evolve'].map(b => <Bullet key={b}>{b}</Bullet>)}
        </ul>
        <p className="text-gray-800 text-sm mb-2" style={ps}>If I were to take this further, I would explore:</p>
        <ul>
          {['More advanced AI personalization', 'Predictive support experiences', 'Deeper integration across product ecosystems'].map(b => <Bullet key={b}>{b}</Bullet>)}
        </ul>
      </div>
    ),
  },
];

export function SupportSystem() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect which image is in view → update active section
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = imageRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );
    imageRefs.current.forEach(ref => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  // Click section → scroll image panel to that image
  const handleSectionClick = (idx: number) => {
    const container = scrollRef.current;
    const target = imageRefs.current[idx];
    if (container && target) {
      const top = target.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;
      container.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-1 min-h-0 flex overflow-hidden max-w-[1728px] mx-auto w-full">

      {/* ── Mobile layout (< lg): stacked sections ── */}
      <div className="lg:hidden flex-1 overflow-y-auto px-4 md:px-6 pt-8 pb-10">
        <h1
          className="text-blue-900 text-xl font-semibold leading-snug mb-8"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          Skills Network Support
        </h1>
        {sections.map((section, i) => (
          <div key={i} className="mb-12">
            <p
              className="text-blue-700 text-sm font-medium mb-3"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {section.label}
            </p>
            <div className="mb-5">{section.content}</div>
            {section.visual ?? (
              <img
                src={section.image}
                alt={section.label}
                className="w-full aspect-[3/2] object-cover rounded-2xl shadow-lg"
              />
            )}
          </div>
        ))}
        <div className="pt-6">
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/boyun-leung/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><LinkedinIcon size={18} /></a>
            <a href="https://www.instagram.com/boyunleung/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><InstagramIcon size={18} /></a>
            <a href="https://github.com/swiftplicity" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><GithubIcon size={18} /></a>
            <a href="mailto:boyun.leung@gmail.com" className="text-blue-700 hover:opacity-70 transition-opacity"><MailIcon size={18} /></a>
          </div>
        </div>
      </div>

      {/* ── Desktop layout (>= lg): 2-column ── */}
      {/* Left Panel: Title + collapsible accordion rows */}
      <div className="hidden lg:flex flex-[1] flex-col pl-4 md:pl-6 xl:pl-20 pr-10 pt-4 pb-10 overflow-y-auto">
        <h1
          className="text-blue-900 text-xl font-semibold leading-snug mb-8 shrink-0"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          Skills Network Support
        </h1>

        {/* Accordion rows */}
        <div className="flex-1">
          {sections.map((section, i) => (
            <div key={i}>
              <button
                onClick={() => {
                  setActiveIdx(i);
                  handleSectionClick(i);
                }}
                className={`w-full text-left py-1.5 text-base transition-colors duration-200 ${
                  i === activeIdx ? 'text-blue-900 font-semibold' : 'text-gray-500 font-light hover:text-gray-700'
                }`}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {section.label}
              </button>
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: i === activeIdx ? '1fr' : '0fr',
                  transition: 'grid-template-rows 400ms ease-in-out',
                }}
              >
                <div className="overflow-hidden">
                  <div className="pt-3 pb-5">{section.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 mt-4 shrink-0">
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/boyun-leung/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><LinkedinIcon size={18} /></a>
            <a href="https://www.instagram.com/boyunleung/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><InstagramIcon size={18} /></a>
            <a href="https://github.com/swiftplicity" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-70 transition-opacity"><GithubIcon size={18} /></a>
            <a href="mailto:boyun.leung@gmail.com" className="text-blue-700 hover:opacity-70 transition-opacity"><MailIcon size={18} /></a>
          </div>
        </div>
      </div>

      {/* Right Panel: scrollable snapping images */}
      <div
        ref={scrollRef}
        className="hidden lg:block flex-[2] overflow-y-auto snap-y snap-mandatory pl-8 pr-4 md:pr-6 xl:pr-20 pt-8 pb-0"
      >
        {sections.map((section, i) => (
          <div
            key={i}
            ref={el => { imageRefs.current[i] = el; }}
            className="snap-start snap-always mb-6 aspect-[3/2] max-h-[78vh] w-auto ml-auto"
          >
            {section.visual ?? (
              <img
                src={section.image}
                alt={section.label}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
