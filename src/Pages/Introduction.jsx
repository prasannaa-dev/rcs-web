import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LinksComponent from './Links';
import FindBranches from './FindBranches';
import { ChevronLeft, ChevronRight, Scale, Landmark, Users } from 'lucide-react';


const IntroductionPage = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = {
    en: {
      title: 'Introduction',
      mainText: 'Tamil Nadu has been a pioneer in India\'s cooperative movement, focusing on serving rural communities. Cooperatives play a crucial role in boosting agricultural productivity and farmers\' incomes by providing timely crop loans, including interest-free loans for prompt repayment, as well as short-term, medium-term, long-term, jewel, and produce pledge loans. They also implement the Crop Insurance Scheme.Cooperatives manage the Public Distribution System through fair price shops and stabilize market prices under the Market Intervention Scheme (MIS) by procuring essential commodities like tur dal, urad dal, chillies, tamarind, gingelly oil, and onions at reasonable rates for sale at cooperative outlets. Additionally, they operate "Farm Fresh" consumer outlets for affordable vegetables and "Amma Marundagam" pharmacies offering discounted quality medicines.',
      readMore: 'Read more',
      whatsNewTitle: "What's New ?",
      newsTitle: 'Development of Legal Information System & Technology (LIST) Solution for Registrar of Cooperative Societies (RCS)',
      newsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    ta: {
      title: 'அறிமுகம்',
      mainText: 'தமிழ்நாடு இந்தியாவின் கூட்டுறவு இயக்கத்தில் முன்னோடியாக இருந்து வருகிறது, கிராமப்புற சமுதாயங்களுக்கு சேவை செய்வதில் கவனம் செலுத்துகிறது. விவசாயிகளின் உற்பத்தித்திறனை அதிகரிக்கவும், விவசாயிகளின் வருமானத்தை பெருக்கவும் கூட்டுறவு நிறுவனங்கள் முக்கிய பங்கு வகிக்கின்றன. உரிய நேரத்தில் பயிர் கடன்கள், உடனடி திருப்பிச் செலுத்துவதற்கான வட்டியில்லா கடன்கள், குறுகிய கால, நடுத்தர கால, நீண்ட கால, நகை மற்றும் விளைபொருள் அடகு கடன்கள் வழங்குகின்றன. அவர்கள் பயிர் காப்பீட்டு திட்டத்தையும் செயல்படுத்துகின்றனர். கூட்டுறவு நிறுவனங்கள் நியாயமான விலை கடைகள் மூலம் பொதுவிநியோக அமைப்பை நிர்வகிக்கின்றன மற்றும் சந்தை தலையீட்டு திட்டத்தின் (MIS) கீழ் துவரம் பருப்பு, உளுந்தம் பருப்பு, மிளகாய், புளி, நல்லெண்ணெய் மற்றும் வெங்காயம் போன்ற அத்தியாவசிய பொருட்களை நியாயமான விலையில் வாங்கி கூட்டுறவு கடைகளில் விற்பனை செய்வதன் மூலம் சந்தை விலைகளை நிலைப்படுத்துகின்றன. கூடுதலாக, அவர்கள் மலிவு காய்கறிகளுக்கு "பண்ணை புதிய" நுகர்வோர் கடைகள் மற்றும் தரமான மருந்துகள் தள்ளுபடி விலையில் வழங்கும் "அம்மா மருந்தகம்" மருந்தகங்களை இயக்குகின்றனர்.',
      readMore: 'மேலும் படிக்க',
      whatsNewTitle: "புதிதாக என்ன ?",
      newsTitle: 'கூட்டுறவு நிறுவனங்கள் பதிவாளருக்கான (RCS) சட்ட தகவல் அமைப்பு மற்றும் தொழில்நுட்ப (LIST) தீர்வின் வளர்ச்சி',
      newsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  };

  const t = content[language];

  // Slides data
  const slides = [
    {
      type: 'image',
      src: '/images/intro-meeting.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (slides.length + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (slides.length + 1)) % (slides.length + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 mt-6 -mb-5" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Title Section - Compact with wheat background */}
      <section className="py-3 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
        <div className="container mx-auto px-4"> 
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              {t.title}
            </h1>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto"></div>
            {/* Introduction Text - Compact padding with subtle background */}
            <div className="py-4 px-4 md:px-6 mt-3 bg-white/60 backdrop-blur-sm rounded-lg">
              <div className="max-w-6xl mx-auto">
                <p className="text-gray-800 leading-relaxed text-sm md:text-base text-justify">
                  {t.mainText}
                  <button className="text-amber-700 hover:text-amber-800 ml-1 font-medium transition-colors duration-200 underline">
                    {t.readMore}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Content Section - Compact with warm background */}
<section className="py-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden relative">
  <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
    
    {/* Justice Scale Icon */}
    <div className="absolute top-1/4 left-1/4 text-amber-400/50 animate-pulse-slow">
      <Scale size={80} className="opacity-40" /> 
    </div>
    
    {/* Users/Community Icon */}
    <div className="absolute bottom-1/4 right-1/4 text-orange-400/50 animate-float-slow">
      <Users size={100} className="opacity-40" />
    </div>

    {/* Landmark/Government Building Icon */}
    <div className="absolute top-1/2 right-10 text-amber-400/50 animate-pulse-slow delay-1000"> 
      <Landmark size={60} className="opacity-30" />
    </div>

  </div>
  
  <div className="container mx-auto px-4 relative z-10"> 
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[90%] mx-auto"> 

      {/* Image Card - Compact */}
      <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden border border-amber-100">
        <div className="relative group">
          <img
            src="/Images/intro.png"
            alt="Government Meeting"
            className="w-full h-64 object-cover"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-amber-100/90 hover:bg-amber-200 text-gray-800 p-1.5 rounded-full shadow-md transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-amber-100/90 hover:bg-amber-200 text-gray-800 p-1.5 rounded-full shadow-md transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* What's New Card - Compact with warm colors */}
      <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-sm p-5 border border-amber-100">
        <div className="text-center mb-3">
          <h3 className="text-xl font-semibold text-gray-900">
            {t.whatsNewTitle}
          </h3>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto mt-2"></div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-amber-800 text-base leading-snug">
            {t.newsTitle}
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            {t.newsDescription}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Map Section */}
      <FindBranches />
      {/* Links Section */}
      <LinksComponent />
    </div>
  );
};

export default IntroductionPage;