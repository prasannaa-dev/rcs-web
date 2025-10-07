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
    <div className="min-h-screen bg-gray-50 -pt-[140px]">
      {/* Carousel Banner */}
      <section className="relative -mt-[30px] z-10">
        {/* Mobile responsive carousel, desktop keeps original */}
        <div className="relative w-full overflow-hidden h-80 sm:h-96 lg:h-[600px]">
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
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </section>

      {/* Statistics Section - FIXED SPACING HERE */}
      <section className="relative z-20 -mb-16">
        <div className="w-[90%] mx-auto -mt-10 bg-gradient-to-b from-[#e3f2fd] to-[#90caf9] rounded-3xl shadow-lg py-6 px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            
            {/* 1. Total Cooperative Sectors */}
            <div className="flex items-center space-x-3">
              <img src="/Images/icon1.png" alt="Total Cooperative Sectors" className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-[#0d47a1]">25</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Total Cooperative Sectors</span>
              </div>
            </div>

            {/* 2. All Cooperatives */}
            <div className="flex items-center space-x-3">
              <img src="/Images/icon1.png" alt="All Cooperatives" className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-[#0d47a1]">23140</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700">All Cooperatives</span>
              </div>
            </div>

            {/* 3. Primary Cooperatives */}
            <div className="flex items-center space-x-3">
              <img src="/Images/icon3.png" alt="Primary Cooperatives" className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-[#0d47a1]">4494</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Primary Cooperatives</span>
              </div>
            </div>

            {/* 4. Apex Institution */}
            <div className="flex items-center space-x-3">
              <img src="/Images/icon4.png" alt="Apex Institution" className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-[#0d47a1]">1</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700">APEX Institution</span>
              </div>
            </div>

            {/* 5. District Level Cooperative */}
            <div className="flex items-center space-x-3">
              <img src="/Images/icon5.png" alt="District Level Cooperative" className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-[#0d47a1]">2950</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700">District Level Cooperative</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;