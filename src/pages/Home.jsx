import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const slides = [
  //   {
  //     image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1920',
  //     title: 'Expert Taxation & Compliance Services',
  //     subtitle: 'Comprehensive solutions for all your tax and regulatory needs',
  //     cta: 'Explore Services',
  //     ctaAction: () => onNavigate('services'),
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1920',
  //     title: 'Professional Audit & Assurance',
  //     subtitle: 'Delivering accuracy, transparency, and confidence in financial reporting',
  //     cta: 'Learn More',
  //     ctaAction: () => onNavigate('audit-assurance'),
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920',
  //     title: 'Strategic Business Advisory',
  //     subtitle: 'Empowering businesses with insights for sustainable growth',
  //     cta: 'Get Consultation',
  //     ctaAction: () => onNavigate('business-advisory'),
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1920',
  //     title: '15+ Years of Excellence',
  //     subtitle: 'Trusted by 500+ clients across diverse industries',
  //     cta: 'Our Experience',
  //     ctaAction: () => onNavigate('experience'),
  //   },
  // ];

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80',
      title: 'Expert Taxation & Compliance Services',
      subtitle: 'Comprehensive solutions for all your tax and regulatory needs',
      cta: 'Explore Services',
      ctaAction: () => onNavigate('services'),
    },
    {
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',
      title: 'Professional Audit & Assurance',
      subtitle: 'Delivering accuracy, transparency, and confidence in financial reporting',
      cta: 'Learn More',
      ctaAction: () => onNavigate('audit-assurance'),
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
      title: 'Strategic Business Advisory',
      subtitle: 'Empowering businesses with insights for sustainable growth',
      cta: 'Get Consultation',
      ctaAction: () => onNavigate('business-advisory'),
    },
    {
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80',
      title: '1+ Years of Excellence',
      subtitle: 'Trusted by 500+ clients across diverse industries',
      cta: 'Our Experience',
      ctaAction: () => onNavigate('experience'),
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main slider container - NOT using h-screen */}
      <div className="relative h-[calc(100vh-5.5rem)]"> {/* Subtract navbar height */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>

            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="eager"
            />

            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <button
                    onClick={slide.ctaAction}
                    className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700"
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="md:w-8 md:h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="md:w-8 md:h-8" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-white h-2 md:h-3 w-8 md:w-12'
                  : 'bg-white/50 hover:bg-white/75 h-2 md:h-3 w-2 md:w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}