import { LinkedinIcon, InstagramIcon, GithubIcon, MailIcon } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const yearbookCover = '/assets/yearbook/spiral-staircase-1718-yearbook-cover.png';
const colorPalette2016 = '/assets/yearbook/2016-2017-yearbook-colour-palette-and-typography.png';
const layout1 = '/assets/yearbook/student-survey-1617-layout.png';
const layout2 = '/assets/yearbook/gr 11/15515770_1190728611012301_978472638_o.jpg';
const layout3 = '/assets/yearbook/gr 11/baby photo Yearbook.jpg';
const layout4 = '/assets/yearbook/gr 11/2016 survey layout.jpg';
const layout5 = '/assets/yearbook/gr 11/letter.jpg';
const layout6 = '/assets/yearbook/gr 11/committe.jpg';
const layout7 = '/assets/yearbook/gr 11/contents.jpg';
const layout8 = '/assets/yearbook/gr 11/COVER PAGE YEARBOOK.jpg';
const layout9 = '/assets/yearbook/gr 11/Grade 11 cover (1).jpg';
const layout10 = '/assets/yearbook/gr 11/Endpage.jpg';
const layout11 = '/assets/yearbook/gr 11/sac vs.jpg';
const layout12 = '/assets/yearbook/gr 11/humans of ay.jpg';
const layout13 = '/assets/yearbook/gr 11/yearbook grade 10.jpg';
const illustrations2017 = '/assets/yearbook/illustrations-from-2017-2018-yearbook.png';
const layout2017_1 = '/assets/yearbook/spiral-staircase-1718-with-mlk-quote.png';
const layout2017_2 = '/assets/yearbook/gr 12/execs copy.jpg';
const layout2017_3 = "/assets/yearbook/gr 12/Editor's letter better.jpg";
const layout2017_4 = '/assets/yearbook/gr 12/Yearbook Cover Final.jpg';
const layout2017_5 = '/assets/yearbook/gr 12/table of contents.jpg';
const layout2017_6 = '/assets/yearbook/gr 12/committee good.jpg';
const layout2017_7 = '/assets/yearbook/gr 12/Admin.jpg';
const layout2017_8 = '/assets/yearbook/gr 12/staff survey final.jpg';
const layout2017_9 = '/assets/yearbook/gr 12/students cover.jpg';
const layout2017_10 = '/assets/yearbook/gr 12/superlatives right.jpg';
const layout2017_11 = '/assets/yearbook/gr 12/squad.jpg';
const layout2017_12 = '/assets/yearbook/gr 12/SAC Design good.jpg';
const layout2017_13 = '/assets/yearbook/gr 12/Club-Achievements.jpg';
const layout2017_14 = '/assets/yearbook/gr 12/clubs f5.jpg';
const layout2017_15 = '/assets/yearbook/gr 12/Sports 4 final.jpg';
const layout2017_16 = '/assets/yearbook/gr 12/Music pg 1.jpg';
const layout2017_17 = '/assets/yearbook/gr 12/classof2018.jpg';
const layout2017_18 = '/assets/yearbook/gr 12/events page 2.jpg';
const layout2017_19 = '/assets/yearbook/gr 12/scrap 1.jpg';
const layout2017_20 = '/assets/yearbook/gr 12/Back RBG.jpg';
const layout2017_21 = '/assets/yearbook/gr 12/art2 (1).jpg';
const layout2017_22 = '/assets/yearbook/gr 12/Student Survey RBG.jpg';
const colorPalette2017 = '/assets/yearbook/colour-palette-and-typography-for-2017-2018-yearbo.png';

export function Yearbook() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2017, setCurrentSlide2017] = useState(0);
  
  const layouts = [
    { src: layout1, alt: "Student Survey 16/17 Layout" },
    { src: layout2, alt: "Spiral Staircase Pattern Layout" },
    { src: layout3, alt: "Who's Who Baby Photos Layout" },
    { src: layout4, alt: "Staff Survey and Quotes Layout" },
    { src: layout5, alt: "2016/2017 Opening Page" },
    { src: layout6, alt: "Yearbook Committee Members" },
    { src: layout7, alt: "Contents Page" },
    { src: layout8, alt: "Spiral Staircase Cover 2016/2017" },
    { src: layout9, alt: "Grade 11 Student Photo Collage" },
    { src: layout10, alt: "16/17 Introduction by Editor-in-Chief" },
    { src: layout11, alt: "SAC vs Teachers and Relay Assembly Events" },
    { src: layout12, alt: "Humans of AY Feature Page" },
    { src: layout13, alt: "Grade 10 Student Photo Collage" },
  ];

  const layouts2017 = [
    { src: layout2017_1, alt: "Spiral Staircase 17/18 with MLK Quote" },
    { src: layout2017_2, alt: "Yearbook Execs 2017-2018" },
    { src: layout2017_3, alt: "Introduction by Editor-in-Chief 2017-2018" },
    { src: layout2017_4, alt: "Spiral Staircase Cover 2017-2018" },
    { src: layout2017_5, alt: "Contents Page 2017-2018" },
    { src: layout2017_6, alt: "Committee Members 2017-2018" },
    { src: layout2017_7, alt: "Letter from the Principal 2017-2018" },
    { src: layout2017_8, alt: "Staff Survey 2017-2018" },
    { src: layout2017_9, alt: "Students Section Page 2017-2018" },
    { src: layout2017_10, alt: "Superlatives 2017-2018" },
    { src: layout2017_11, alt: "Homeroom Photos 2017-2018" },
    { src: layout2017_12, alt: "Student Activity Council 2017-2018" },
    { src: layout2017_13, alt: "Jaguar Achievements 2017-2018" },
    { src: layout2017_14, alt: "Clubs Spread 2017-2018" },
    { src: layout2017_15, alt: "Track and Field, Dance, and Badminton 2017-2018" },
    { src: layout2017_16, alt: "Orchestra Programs 2017-2018" },
    { src: layout2017_17, alt: "Graduating Class of 2017-2018" },
    { src: layout2017_18, alt: "Battle of the Bands, Mole Day, and Halloween 2017-2018" },
    { src: layout2017_19, alt: "Scrapbook and Science Fair 2017-2018" },
    { src: layout2017_20, alt: "Spiral Staircase with C.S. Lewis Quote 2017-2018" },
    { src: layout2017_21, alt: "Student Art Gallery 2017-2018" },
    { src: layout2017_22, alt: "Student Survey 2017-2018" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % layouts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + layouts.length) % layouts.length);
  };

  const nextSlide2017 = () => {
    setCurrentSlide2017((prev) => (prev + 1) % layouts2017.length);
  };

  const prevSlide2017 = () => {
    setCurrentSlide2017((prev) => (prev - 1 + layouts2017.length) % layouts2017.length);
  };

  return (
    <>
    <div className="w-full max-w-[1728px] mx-auto px-4 md:px-6 xl:px-20 py-12">

      {/* Project Header */}
      <h1 className="mb-4 text-[#1e3a5f] text-[32px] sm:text-[40px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        Spiral Staircase
      </h1>
      <p className="font-['Open_Sans',_sans-serif] font-light text-[#222222] text-[14px] sm:text-[16px] leading-relaxed pb-4">
        The history of the yearbook can be traced back through centuries and is a key component to documenting and creating a time capsule for each school year. At my high school, our yearbook was named after the central structural component of the building: a Spiral Staircase
      </p>

      {/* Hero Image */}
      <div className="mb-8 aspect-[16/10] w-full overflow-hidden rounded-md bg-gray-100">
        <img
          src={yearbookCover}
          alt="Spiral Staircase 17/18 Yearbook Cover"
          className="h-full w-full object-cover"
        />
      </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-8">

          {/* My Role */}
            <h2 className="mb-4 font-['Open_Sans',_sans-serif] text-[#1938D1] text-[24px] sm:text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              My Role
            </h2>
            <div className="space-y-4 font-['Open_Sans',_sans-serif] font-light text-[#222222] text-[14px] sm:text-[16px] leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>
                Over my grade eleven and grade twelve years, I held the role of Editor-In-Chief. My primary responsibilities included:
              </p>
              <ul>
                <li>• Running the application process and selecting my committee members</li>
                <li>• Communicating between my committee, vice-principal, staff advisor, and Friesens' representative</li>
                <li>• Determining the creative direction and structure (ladder) </li>
                <li>• Delegating pages and sections to committee members</li>
                <li>• Setting and tracking deadlines </li>
                <li>• Designing layouts </li>
                <li>• Reviewing, editing, and providing feedback for all committee submitted pages</li>
                <li>• Collecting and organizing senior grad quotes and photos</li>
              </ul>
            </div>

          {/* Intial Experience */}
            <h2 className="mb-4 font-['Open_Sans',_sans-serif] text-[#1938D1] text-[24px] sm:text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Intial Experience 
            </h2>
            <div className="space-y-4 font-['Open_Sans',_sans-serif] font-light text-[#222222] text-[14px] sm:text-[16px] leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>
               During my grade eleven year (2016-2017) the school was in need of a yearbook editor-in-chief. The previous editor-in-chief had failed to choose and mentor an editor for the upcoming year so the status of our yearbook was left with uncertainty. I had experience working on a yearbook from my junior high school but had no knowledge of the yearbook and printing process in my highschool. Regardless, I was passionate about it and decided to step up and take on the role of editor-in-chief. I let my senior editor, a graduating student at the time, take charge of the artistic direction of the yearbook. He took the yearbook in a very bright, bold, and abstract direction, something I would have never chosen to do on my own. I appreciated the chance to design something new to me and outside my comfort zone.
              </p>
            </div>
            
          {/* 2016-2017 Color Palette Image */}
            <div className="my-8">
              <div className="mb-3 rounded-md overflow-hidden shadow-lg">
                <img
                  src={colorPalette2016}
                  alt="2016-2017 Yearbook Colour Palette and Typography"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-center font-['Open_Sans',_sans-serif] font-light text-[#585858] text-[12px] sm:text-[14px] italic">
                Chosen Colour Palette and Fonts for 2016-2017 Yearbook
              </p>
            </div>
            <div className="space-y-4 font-['Open_Sans',_sans-serif] font-light text-[#222222] text-[14px] sm:text-[16px] leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>
                We received a lot of criticism about the bold design following distribution day but I was proud of the work we had accomplished. Looking back I understand how the bold design, during an era of “minimalism” might have generated some strong opinions. Without any instructions on how to run the yearbook from the previous editor-in-chief, I was just learning and being involved in the process simultaneously. This resulted in a lot of barely-reached deadlines and mistakes such as duplicate photos or spelling mistakes in the final yearbook. Determined to improve and create a better yearbook during my graduating year, I took a Sharpie to my printed copy and marked all the mistakes I could find.
              </p>
            </div>

            {/* 2016-2017 Layouts Carousel */}
            <div className="my-8">
              <div className="mb-3 rounded-md overflow-hidden shadow-lg relative bg-gray-300">
                <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center">
                  <img
                    src={layouts[currentSlide].src}
                    alt={layouts[currentSlide].alt}
                    className="h-full w-auto object-contain"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={24} className="text-[#1938D1]" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={24} className="text-[#1938D1]" />
                  </button>
                </div>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {layouts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? 'bg-[#1938D1] w-6' : 'bg-white/60'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-center font-['Open_Sans',_sans-serif] font-light text-[#585858] text-[12px] sm:text-[14px] italic">
                A selection of layouts from the 2016/2017 Yearbook
              </p>
            </div>
          
          {/* Learnings */}
            <h2 className="mb-4 font-['Open_Sans',_sans-serif] text-[#1938D1] text-[24px] sm:text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Learnings
            </h2>
            <div className="space-y-4 font-['Open_Sans',_sans-serif] font-light text-[#222222] text-[14px] sm:text-[16px] leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>
               One key thing that I took away from the 2016-2017 yearbook was the importance of attention to detail. I specifically focused on ensuring consistency of font sizes, double-checking copy for spelling and grammatical errors, and ensuring that the photos were appropriate sizes.
              </p>
            </div>

          {/* Moving Forward */}
            <h2 className="mb-4 font-['Open_Sans',_sans-serif] text-[#1938D1] text-[24px] sm:text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Moving Forward
            </h2>
            <div className="space-y-4 font-['Open_Sans',_sans-serif] font-light text-[#222222] text-[14px] sm:text-[16px] leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>
               With my newfound experience, I was able to pinpoint the pain points of the process and tackle those from the beginning. I took those lessons and implemented changes during the next (2017-2018) yearbook. For example, we had a lot of issues previously coordinating with the sports department. To relieve that pressure I created a sports lead role. This gave me the time to focus on additional details such as creating mini illustrations for the students missing graduation photos.
              </p>
            </div>

            {/* 2017-2018 Illustrations Image */}
            <div className="my-8">
              <div className="mb-3 rounded-md overflow-hidden shadow-lg">
                <img
                  src={illustrations2017}
                  alt="Illustrations from 2017-2018 yearbook"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center font-['Open_Sans',_sans-serif] font-light text-[#585858] text-[12px] sm:text-[14px] italic">
                An example of our illustrations in the 2017-2018 yearbook
              </p>
            </div>

          {/* Creating a new look and feel */}
            <h2 className="mb-4 font-['Open_Sans',_sans-serif] text-[#1938D1] text-[24px] sm:text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Creating a new look and feel 
            </h2>
            <div className="space-y-4 font-['Open_Sans',_sans-serif] font-light text-[#222222] text-[14px] sm:text-[16px] leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>
               My goal when deciding on the next yearbook theme was to create something that was different from the previous yearbooks and that would be received well by the student body. I chose to focus on more geometric shapes rather than the previous abstract shapes. For the colour palette, I played with paint swatches and colour picker apps to create different colour palettes until I settled for a muted blue, purple, and orange palette. With orange and black being our school colours, it was important to me to still include an orange in the colour palette. In order to communicate my design vision to the yearbook committee, I created a Pinterest board for inspiration.
              </p>
            {/* 2017-2018 Colour Palette and Fonts */}
            <div className="my-8">
              <div className="mb-3 rounded-md overflow-hidden shadow-lg">
                <img
                  src={colorPalette2017}
                  alt="Colour palette and typography for 2017-2018 yearbook"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center font-['Open_Sans',_sans-serif] font-light text-[#585858] text-[12px] sm:text-[14px] italic">
                Chosen Colour Palette and Fonts for 2017-2018 Yearbook
              </p>
            </div>
              <p>With a fresh year and a new vision, my second year as editor-in-chief definitely ran a lot smoother. We still encountered many problems such as having to constantly rearrange the ladder when new events were hosted at our school. However, by drawing from my previous experience we were better prepared to face these challenges. In the end, we created a yearbook that was well received by the student body and incorporated new sections to showcase more features of student life.
              </p>
            </div>


            {/* 2017-2018 Layouts Carousel */}
            <div className="my-8">
              <div className="mb-3 rounded-md overflow-hidden shadow-lg relative bg-gray-300">
                <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center">
                  <img
                    src={layouts2017[currentSlide2017].src}
                    alt={layouts2017[currentSlide2017].alt}
                    className="h-full w-auto object-contain"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide2017}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={24} className="text-[#1938D1]" />
                  </button>
                  <button
                    onClick={nextSlide2017}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={24} className="text-[#1938D1]" />
                  </button>
                </div>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {layouts2017.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide2017(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide2017 ? 'bg-[#1938D1] w-6' : 'bg-white/60'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-center font-['Open_Sans',_sans-serif] font-light text-[#585858] text-[12px] sm:text-[14px] italic">
                A selection of layouts from the 2017/2018 Yearbook (Note: Colours appear brighter due to CMYK printing format)
              </p>
            </div>

          {/* Final Takeaways */}
            <h2 className="mb-4 font-['Open_Sans',_sans-serif] text-[#1938D1] text-[24px] sm:text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Final Takeaways
            </h2>
            <div className="space-y-4 font-['Open_Sans',_sans-serif] font-light text-[#222222] text-[14px] sm:text-[16px] leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p>
               This project taught me how to adapt to unpredicted situations, adhere to ongoing deadlines, spearhead a team to create a final product, and mentor a future yearbook executive team. I learned what a real difference that details can make and how to properly delegate tasks so that we could all reach our full potential. Taking this role definitely wasn’t easy and caused me many sleepless nights. However, the experience of seeing something on a screen for months to being able to hold a physical book in your hands is one of the most rewarding feelings out there and something I would proudly do again.
              </p>
            </div>

            {/* Back to Home Button */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-[#1938D1] text-white font-['Open_Sans',_sans-serif] rounded-lg hover:opacity-90 transition-opacity"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Back to Home
              </button>
            </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-12 mt-12">
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

