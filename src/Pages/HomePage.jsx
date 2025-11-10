import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel Images - add more as needed
  const carouselImages = [
    '/Images/caro1.png',
    '/Images/caro2.png',
    '/Images/caro3.png',
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[144px] lg:pt-[148px]">
      {/* Carousel Banner */}
      <section className="relative z-10">
        {/* Mobile responsive carousel, desktop keeps original */}
        <div className="relative w-full overflow-hidden h-80 sm:h-96 lg:h-[500px]">
          {/* Carousel Images */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0 relative h-full">
                <img
                  src={image}
                  alt={`Government Meeting ${index + 1}`}
                  className="w-full h-full object-cover brightness-[0.7]"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            ))}
          </div>

          {/* Dot Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all ${
                  currentSlide === index
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section - ENHANCED UI with Straight Edges */}
      <section className="bg-gradient-to-br from-[#42a5f5] to-[#64b5f6] py-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {/* 1. Total Cooperative Sectors */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-100 hover:border-blue-300">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <img src="/Images/icon1.png" alt="Total Cooperative Sectors" className="w-10 h-10" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#42a5f5] to-[#64b5f6] bg-clip-text text-transparent mb-1">25</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">Total Cooperative Sectors</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* 2. All Cooperatives */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-100 hover:border-blue-300">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <img src="/Images/icon1.png" alt="All Cooperatives" className="w-10 h-10" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#42a5f5] to-[#64b5f6] bg-clip-text text-transparent mb-1">23,140</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">All Cooperatives</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* 3. Primary Cooperatives */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-100 hover:border-blue-300">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <img src="/Images/icon3.png" alt="Primary Cooperatives" className="w-10 h-10" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#42a5f5] to-[#64b5f6] bg-clip-text text-transparent mb-1">4,494</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">Primary Cooperatives</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* 4. Apex Institution */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-100 hover:border-blue-300">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <img src="/Images/icon4.png" alt="Apex Institution" className="w-10 h-10" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#42a5f5] to-[#64b5f6] bg-clip-text text-transparent mb-1">1</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">APEX Institution</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* 5. District Level Cooperative */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-100 hover:border-blue-300">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <img src="/Images/icon5.png" alt="District Level Cooperative" className="w-10 h-10" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#42a5f5] to-[#64b5f6] bg-clip-text text-transparent mb-1">2,950</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">District Level Cooperative</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;