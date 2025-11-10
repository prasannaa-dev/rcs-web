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
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Title Section - Neutral Clean Header */}
      <section className="py-6 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto px-4"> 
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t.title}
            </h1>
            <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
            {/* Introduction Text */}
            <div className="py-6 px-4 md:px-8 mt-4 bg-gray-50 border border-gray-200">
              <div className="max-w-6xl mx-auto">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                  {t.mainText}
                  <button className="text-gray-800 hover:text-black ml-1 font-semibold transition-colors duration-200 underline">
                    {t.readMore}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Clean White Background */}
      <section className="py-8 bg-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-3 pointer-events-none">
          {/* Justice Scale Icon */}
          <div className="absolute top-1/4 left-1/4 text-gray-300 animate-pulse-slow">
            <Scale size={80} className="opacity-20" /> 
          </div>
          
          {/* Users/Community Icon */}
          <div className="absolute bottom-1/4 right-1/4 text-gray-300 animate-float-slow">
            <Users size={100} className="opacity-20" />
          </div>

          {/* Landmark/Government Building Icon */}
          <div className="absolute top-1/2 right-10 text-gray-300 animate-pulse-slow delay-1000"> 
            <Landmark size={60} className="opacity-20" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10"> 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto"> 

            {/* Image Card */}
            <div className="bg-white shadow-lg overflow-hidden border border-gray-300">
              <div className="relative group">
                <img
                  src="/Images/intro.png"
                  alt="Government Meeting"
                  className="w-full h-80 object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 shadow-md transition-all"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 shadow-md transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* What's New Card */}
            <div className="bg-gray-50 shadow-lg p-6 border border-gray-300">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t.whatsNewTitle}
                </h3>
                <div className="w-20 h-1 bg-gray-800 mx-auto mt-2"></div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 text-lg leading-snug">
                  {t.newsTitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.newsDescription}
                </p>
                <button className="text-gray-800 hover:text-black font-semibold transition-colors duration-200 underline">
                  Read Full Article →
                </button>
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