import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HOME_SLIDES } from '../constants/homeConstants';

const TICK_INTERVAL = 85;

// Corner words per slide — all positioned on the RIGHT side only
// so they never overlap the left-side title/subtitle/CTA content
const SLIDE_WORDS = [
  [
    { text: 'Independence', pos: 'rt1' },
    { text: 'Integrity',    pos: 'rt2' },
    { text: 'Equanimity',   pos: 'rb1' },
    { text: '= Excellence', pos: 'rb2', gold: true },
  ],
  [
    { text: 'Experience',  pos: 'rt1' },
    { text: 'Equanimity',  pos: 'rt2' },
    { text: 'Enterprise',  pos: 'rb2' },
    { text: 'Energy',      pos: 'rb1' },
    { text: 'Enthusiasm',  pos: 'rc',  gold: true },
  ],
  [
    { text: 'Advisory',    pos: 'rt1' },
    { text: 'Strategy',    pos: 'rt2' },
    { text: 'Growth',      pos: 'rb1' },
    { text: 'Innovation',  pos: 'rb2', gold: true },
  ],
  [
    { text: 'Trust',       pos: 'rt1' },
    { text: 'Expertise',   pos: 'rt2' },
    { text: 'Excellence',  pos: 'rb1', gold: true },
    { text: 'Legacy',      pos: 'rb2' },
  ],
];

const WORD_DELAYS = [0, 700, 1400, 2200, 3000];

// All positions are on the RIGHT half of the screen
const posStyle = {
  rt1: { top: '12%',  right: '6%',  textAlign: 'right' },   // top-right upper
  rt2: { top: '28%',  right: '6%',  textAlign: 'right' },   // top-right lower
  rc:  { top: '50%',  right: '6%',  textAlign: 'right', transform: 'translateY(-50%)' }, // right middle
  rb1: { bottom: '28%', right: '6%', textAlign: 'right' },  // bottom-right upper
  rb2: { bottom: '12%', right: '6%', textAlign: 'right' },  // bottom-right lower
};

function CornerWords({ slideIndex, animKey }) {
  const words = SLIDE_WORDS[slideIndex] || [];
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    setVisible([]);
    const timers = words.map((_, i) =>
      setTimeout(() => setVisible((v) => [...v, i]), WORD_DELAYS[i] ?? i * 700)
    );
    return () => timers.forEach(clearTimeout);
  }, [animKey]);

  return (
    <>
      {words.map((word, i) =>
        visible.includes(i) ? (
          <span
            key={`${animKey}-${i}`}
            style={{
              position: 'absolute',
              zIndex: 25,
              fontFamily: "'Raleway', 'Segoe UI', sans-serif",
              fontSize: 'clamp(13px, 1.6vw, 22px)',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: word.gold ? '#f5c518' : 'rgba(255,255,255,0.88)',
              pointerEvents: 'none',
              animation: 'zoomInWord 0.65s cubic-bezier(0.22,1,0.36,1) both',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              ...posStyle[word.pos],
            }}
          >
            {word.text}
          </span>
        ) : null
      )}
    </>
  );
}

export default function Home({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [textKey, setTextKey] = useState(0);
  const progressRef = useRef(0);
  const intervalRef = useRef(null);

  const slides = HOME_SLIDES.map((slide) => ({
    ...slide,
    ctaAction: () => onNavigate(slide.ctaTarget),
  }));

  const startProgress = () => {
    clearInterval(intervalRef.current);
    progressRef.current = 0;
    setProgress(0);
    setTextKey((k) => k + 1);

    intervalRef.current = setInterval(() => {
      progressRef.current += 1;
      setProgress(progressRef.current);
      if (progressRef.current >= 100) {
        clearInterval(intervalRef.current);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, TICK_INTERVAL);
  };

  useEffect(() => {
    startProgress();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    clearInterval(intervalRef.current);
    setCurrentSlide(index);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <>
      <style>{`
        @keyframes zoomInWord {
          0%   { opacity: 0; transform: scale(0.3) translateZ(0); }
          65%  { opacity: 1; transform: scale(1.1) translateZ(0); }
          100% { opacity: 1; transform: scale(1)   translateZ(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInBtn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .slide-title    { animation: slideInLeft 0.75s cubic-bezier(0.22,1,0.36,1) both; }
        .slide-subtitle { animation: slideInUp   0.75s 0.22s cubic-bezier(0.22,1,0.36,1) both; }
        .slide-cta      { animation: fadeInBtn   0.75s 0.44s cubic-bezier(0.22,1,0.36,1) both; }

        .progress-bar-track {
          height: 3px;
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
          overflow: hidden;
          width: 40px;
          transition: width 0.3s ease;
          cursor: pointer;
          border: 0;
          padding: 0;
        }
        .progress-bar-track.active { width: 72px; }
        .progress-bar-fill {
          height: 100%;
          background: #fff;
          border-radius: 2px;
          transition: width 0.08s linear;
        }
      `}</style>

      <div className="relative w-full overflow-hidden">
        <div className="relative h-[calc(100vh-5.5rem)]">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Gradient: strong on left for text legibility, fades right */}
              <div className="absolute inset-0 z-10"
                style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)' }}
              />

              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Corner words — right side only, never touch left content */}
              {index === currentSlide && (
                <CornerWords slideIndex={index} animKey={textKey} />
              )}

              {/* Left-side text content */}
              {index === currentSlide && (
                <div key={textKey} className="absolute inset-0 z-20 flex items-center">
                  <div className="w-full px-6 md:px-12 lg:px-16">
                    {/* Constrain text to left 55% so it never touches the right-side words */}
                    <div style={{ maxWidth: '55%', minWidth: '280px' }}>
                      <h1 className="slide-title font-bold text-white leading-tight mb-4 md:mb-6"
                        style={{ fontSize: 'clamp(28px, 4.5vw, 68px)' }}>
                        {slide.title}
                      </h1>
                      <p className="slide-subtitle text-gray-200 leading-relaxed mb-6 md:mb-8"
                        style={{ fontSize: 'clamp(14px, 1.6vw, 22px)' }}>
                        {slide.subtitle}
                      </p>
                      <button
                        onClick={slide.ctaAction}
                        className="slide-cta btn-primary"
                        style={{ fontSize: 'clamp(13px, 1.1vw, 17px)', padding: '12px 28px' }}
                      >
                        {slide.cta}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Prev / Next */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/35 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/35 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>

          {/* Progress bar indicators */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-3">
            {slides.map((_, index) => {
              const isActive = index === currentSlide;
              const isDone   = index < currentSlide;
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`progress-bar-track ${isActive ? 'active' : ''}`}
                  style={{ background: 'rgba(255,255,255,0.3)' }}
                >
                  <div
                    className="progress-bar-fill"
                    style={{ width: isActive ? `${progress}%` : isDone ? '100%' : '0%' }}
                  />
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
