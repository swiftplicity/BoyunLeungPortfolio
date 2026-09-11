import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";

const SLIDE_COUNT = 20;
const slides = Array.from(
  { length: SLIDE_COUNT },
  (_, i) => `/assets/projects/visual-design/visual design showcase (${i + 1}).jpg`
);

const ps = { fontFamily: "'Open Sans', sans-serif" };

export function VisualDesignShowcase() {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goPrev = () => setIndex(i => (i - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  const goNext = () => setIndex(i => (i + 1) % SLIDE_COUNT);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center px-4 md:px-6 xl:px-20 py-16">
      <h1
        className="text-blue-900 text-2xl md:text-3xl font-semibold leading-snug mb-4 text-center"
        style={ps}
      >
        Visual Design Showcase
      </h1>
      <p className="text-gray-800 text-sm md:text-base max-w-2xl mb-10 text-center leading-relaxed" style={ps}>
        I believe that good design leads to good experiences regardless of the format. This section is where I bring the same thinking I apply to product, clarity, intention, and a deep care for the end user, to other kinds of design work. Whatever the format, the goal stays the same: <strong className="italic">to create something delightful for the person experiencing it.</strong>
      </p>

      <div className="w-full max-w-4xl">
        <div className="relative">
          <button
            onClick={() => setLightboxOpen(true)}
            className="w-full aspect-video bg-white rounded-2xl shadow-lg overflow-hidden cursor-zoom-in"
          >
            <img
              src={slides[index]}
              alt={`Visual design showcase slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </button>

          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-blue-900 shadow-md transition-colors"
          >
            <ChevronLeftIcon size={20} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-blue-900 shadow-md transition-colors"
          >
            <ChevronRightIcon size={20} />
          </button>
        </div>

        <p className="text-gray-500 text-sm text-center mt-4" style={ps}>
          {index + 1} / {SLIDE_COUNT}
        </p>
      </div>

      <Link
        to="/"
        className="mt-10 px-6 py-2 rounded-full border border-gray-300 text-gray-500 text-sm font-light hover:border-blue-900 hover:text-blue-900 transition-colors"
        style={ps}
      >
        Home
      </Link>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/80 hover:text-white"
          >
            <XIcon size={28} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous slide"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <img
            src={slides[index]}
            alt={`Visual design showcase slide ${index + 1}`}
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={e => { e.stopPropagation(); goNext(); }}
            aria-label="Next slide"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRightIcon size={24} />
          </button>
          <p className="absolute bottom-6 text-white/70 text-sm" style={ps}>
            {index + 1} / {SLIDE_COUNT}
          </p>
        </div>
      )}
    </div>
  );
}
