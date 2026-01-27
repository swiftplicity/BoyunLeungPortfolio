import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  route: string;
  github?: string;
  isExternal?: boolean;
  comingSoon?: boolean;
}

export function ProjectCard({ title, description, image, tags, route, github, isExternal, comingSoon }: ProjectCardProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  // Different props for coming soon vs regular cards
  const commonProps = comingSoon ? {
    className: 'group relative flex flex-col overflow-hidden rounded-lg bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 border border-gray-100 cursor-default opacity-80',
  } : {
    className: 'group relative flex flex-col overflow-hidden rounded-lg bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 border border-gray-100 cursor-pointer hover:shadow-lg',
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  const content = (
    <>
    {/* Custom Cursor for regular cards */}
    {isHovering && !comingSoon && (
      <div
        className="absolute pointer-events-none z-50"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      >
        {/* Learn More Button */}
        <div className="bg-[#1938d1] rounded-[4px] px-[8px] py-[4px]">
          <p className="font-['Open_Sans:Light',_sans-serif] font-light leading-[16px] text-[10px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Learn More
          </p>
        </div>
      </div>
    )}
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
      {/* Coming Soon overlay for coming soon cards */}
      {comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none z-10">
          <div className="bg-[#1938d1] rounded-[4px] px-[8px] py-[4px]">
            <p className="font-['Open_Sans:Light',_sans-serif] font-light leading-[16px] text-[10px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Coming Soon
            </p>
          </div>
        </div>
      )}
      <img
        src={image}
        alt={title}
        className={`h-full w-full object-cover ${comingSoon ? '' : 'transition-transform duration-300 group-hover:scale-105'}`}
      />
    </div>
    
    <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
      <div className="flex-1">
        <h3 className="mb-2 text-[#585858] text-[13px] sm:text-[14px]" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>
          {title}
        </h3>
        <p className="mb-4 text-[#222222] text-[16px] sm:text-[18px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          {description}
        </p>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-[#1938D1]/10 px-2.5 sm:px-3 py-1 text-[#1938D1] text-[10px] sm:text-[11px]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </>
  );

  if (comingSoon) {
    return (
      <div {...commonProps}>
        {content}
      </div>
    );
  }

  return isExternal ? (
    <a href={route} target="_blank" rel="noopener noreferrer" {...commonProps}>
      {content}
    </a>
  ) : (
    <Link to={route} {...commonProps}>
      {content}
    </Link>
  );
}
