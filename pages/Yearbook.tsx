import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Linkedin, Instagram, Github, Mail } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import yearbookCover from 'figma:asset/027f074caf782e03c58fe114ff82c5360d5987cb.png';
import colorPalette2016 from 'figma:asset/c981f94a0fdb177ae6d3132fa065f1672c75f84b.png';
import layout1 from 'figma:asset/53dc547f58d358e0ea1a131985391f69f92eb655.png';
import layout2 from 'figma:asset/04ecc3746e4d139c215450e01fee475539b7cbb9.png';
import layout3 from 'figma:asset/efcf6c0f626bd33d6ca4a28e9f0ee3d21147ca08.png';
import layout4 from 'figma:asset/dded26fa56cdce2e2eba52837df8e6f12d7e463b.png';
import layout5 from 'figma:asset/bf12aa0632f0af6bea086e0d71e37a6051f1bffd.png';
import layout6 from 'figma:asset/9afc815d394e887a60dc8d9b34794dae8b50c138.png';
import layout7 from 'figma:asset/2b17856f363b6233c96f3fa8de573133033daaa5.png';
import layout8 from 'figma:asset/ea2d765dab7d2cb4743f2aaf1b0d07771b5927e5.png';
import layout9 from 'figma:asset/3df0593e3933f2702975e239556b679074809410.png';
import layout10 from 'figma:asset/b64f29d42e4e67fd390aaf8976cf6e82924119be.png';
import layout11 from 'figma:asset/8cc0243ff994c016d35b9ff6c2f56125d3826189.png';
import layout12 from 'figma:asset/caae592d473952196710170a7f88ef3b86f92da9.png';
import layout13 from 'figma:asset/e138bf8c1beee24fba3e3afc4b8648a7fee569fa.png';
import illustrations2017 from 'figma:asset/0fae35070064461f19c5e92f122bb7e495e5d6d9.png';
import layout2017_1 from 'figma:asset/ff2a8499adb74674da082d6d8c2017c2b1b863b9.png';
import layout2017_2 from 'figma:asset/687ddb2476f9a786d4fc1aa82cc449504616da31.png';
import layout2017_3 from 'figma:asset/ad70f88666593206fece59538d1e8613ff78aa4c.png';
import layout2017_4 from 'figma:asset/b4aceec7433303a545c50417b01b130fdfc5a05a.png';
import layout2017_5 from 'figma:asset/3dc8d6daee7981a42c8257120e614903a12ebc3f.png';
import layout2017_6 from 'figma:asset/f7b4164f206394197388a308d0aafdec2bd48da8.png';
import layout2017_7 from 'figma:asset/6a5e179122ae6daf1336aaaf4bf3d0a92c8997e0.png';
import layout2017_8 from 'figma:asset/7c8773003ffa8d37d2c730dad49ea8b791ed80f1.png';
import layout2017_9 from 'figma:asset/d89823c55265b873c7eba514ba20dc08ecc32c87.png';
import layout2017_10 from 'figma:asset/d467c724890befad26a39b6ce25ba033f0220e57.png';
import layout2017_11 from 'figma:asset/785dbb5189d62f4accffd9f511abf87bed4c0728.png';
import layout2017_12 from 'figma:asset/ed8d4864bcf271e79c3e3e1421e94f3088a8099b.png';
import layout2017_13 from 'figma:asset/c8aae287f643b69a689789809ebe633ab6afab2a.png';
import layout2017_14 from 'figma:asset/1d2fe291e05b35e5e9092371d56275fdd3fd8c7f.png';
import layout2017_15 from 'figma:asset/d7cca628fdd38b99aecde8e7f9937e7d79800429.png';
import layout2017_16 from 'figma:asset/04a3af782804c4e74a7f1dd869d94e0b998924be.png';
import layout2017_17 from 'figma:asset/885264540728908ebff0a15f0ef8931f6b95cb47.png';
import layout2017_18 from 'figma:asset/ed01f0fa364403c2bf57da12f0c747ece774a3d2.png';
import layout2017_19 from 'figma:asset/f2c0396bb18bf74afbcc2f903ade043854fcb29d.png';
import layout2017_20 from 'figma:asset/b5790e098416a0a0628764a93638f2454d362ba4.png';
import layout2017_21 from 'figma:asset/ae7e2cd139eca55a49c04a9b28d4b0e3da222705.png';
import layout2017_22 from 'figma:asset/fdaefc6c9f6e6d2a76589360febb25a5ce1e3288.png';
import colorPalette2017 from 'figma:asset/430f1eda13d31b251f79862ff7b5e738ae7b3991.png';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <div className="mx-auto max-w-4xl px-8 py-12">

      {/* Project Header */}
      <h1 className="mb-4 text-[#1e3a5f] text-[32px] sm:text-[40px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        Spiral Staircase
      </h1>
      <p className="font-['Open_Sans',_sans-serif] font-light text-[#222222] text-[14px] sm:text-[16px] leading-relaxed pb-4">
        The history of the yearbook can be traced back through centuries and is a key component to documenting and creating a time capsule for each school year. At my high school, our yearbook was named after the central structural component of the building: a Spiral Staircase
      </p>

      {/* Hero Image */}
      <div className="mb-8 aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100">
        <ImageWithFallback
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
              <div className="mb-3 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
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
              <div className="mb-3 rounded-lg overflow-hidden shadow-lg relative bg-gray-300">
                <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center">
                  <ImageWithFallback
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
              <div className="mb-3 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
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
              <div className="mb-3 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
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
              <div className="mb-3 rounded-lg overflow-hidden shadow-lg relative bg-gray-300">
                <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center">
                  <ImageWithFallback
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

