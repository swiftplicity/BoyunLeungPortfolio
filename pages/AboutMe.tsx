import { LinkedinIcon, InstagramIcon, GithubIcon, MailIcon } from "lucide-react";
import { Link } from "react-router-dom";

const profileImage = '/assets/profile/boyun-leung.png';

export function AboutMe() {
  return (
    <>
    <div className="mx-auto max-w-6xl px-8 py-12 md:py-24">
      <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12 md:items-center">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start md:items-center">
          <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-md">
            <img 
              src={profileImage} 
              alt="Boyun Leung" 
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>
        
        {/* About Me Content */}
        <div className="max-w-3xl">
          <h2 className="mb-8 font-['Open_Sans',_sans-serif] text-[#1938D1] text-[18px] sm:text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            A little bit about me...
          </h2>
          
          <div className="space-y-6 font-['Open_Sans',_sans-serif] font-light text-[#222222] text-[14px] sm:text-[16px] leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p>
              I am a Master of Information student at the University of Toronto studying User Experience Design. With a Bachelor of Global Business and Digital Arts from the University of Waterloo, I have a multidisciplinary background with experience in project management, marketing, and visual design.
            </p>
            
            <p>
              When it comes to design I care about the details down to the pixel while remaining focused on the bigger picture.
            </p>
            
            <p>
              My formal design journey began back in high school as I took on the role of Editor-In-Chief of our yearbook. It was during this time that I found the power and joy of making meaningful experiences for others and embraced the challenges that followed suit. <Link to="/yearbook" className="text-[#1938D1] underline hover:opacity-80 transition-opacity">Read more about my process here.</Link>
            </p>
            
            <p>
              In my spare time you can usually find me working on event stationery, decor, and party favours for my small business at <a href="https://www.foryourdelight.ca/" target="_blank" rel="noopener noreferrer" className="text-[#1938D1] underline hover:opacity-80 transition-opacity">foryourdelight.to</a>
            </p>
            
            <p className="flex items-center gap-2">
              <span>Currently Interning at IBM</span>
              <span className="text-[20px]">👁🐝Ⓜ️</span>
            </p>
          </div>
        </div>
      </div>
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
            aria-label="InstagramIcon"
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
