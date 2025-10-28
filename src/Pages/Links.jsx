import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LinksComponent = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      sectionTitle: 'Quick Links',
      links: [
        {
          title: 'Animal Husbandry',
          logo: '/Images/ah1.png',
          url: '#'
        },
        {
          title: 'Fisheries',
          logo: '/Images/pds.png',
          url: '#'
        },
        {
          title: 'Dairy Development',
          logo: '/Images/tncsc.jpg',
          url: '#'
        },
        {
          title: 'NABARD',
          logo: '/Images/nabard.png',
          url: '#'
        },
        {
          title: 'NCDC',
          logo: '/Images/ncdc.png',
          url: '#'
        },
        {
          title: 'TRIFED',
          logo: '/Images/trifed.png',
          url: '#'
        },
        {
          title: 'NAFED',
          logo: '/Images/Nafed-India.png',
          url: '#'
        }
      ]
    },
    ta: {
      sectionTitle: 'விரைவு இணைப்புகள்',
      links: [
        {
          title: 'கால்நடை வளர்ப்பு',
          logo: '/public/animal-husbandry-logo.png',
          url: '#'
        },
        {
          title: 'மீன்பிடித்தல்',
          logo: '/public/pds-logo.png',
          url: '#'
        },
        {
          title: 'பால் வளர்ச்சி',
          logo: '/public/tncsc-logo.png',
          url: '#'
        },
        {
          title: 'நபார்ட்',
          logo: '/public/nabard-logo.png',
          url: '#'
        },
        {
          title: 'என்சிடிசி',
          logo: '/public/ncdc-logo.png',
          url: '#'
        },
        {
          title: 'ட்ரைபெட்',
          logo: '/public/trifed-logo.png',
          url: '#'
        },
        {
          title: 'நாபெட்',
          logo: '/public/nafed-logo.png',
          url: '#'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -mt-60">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {t.sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Links Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
  {t.links.map((link, index) => (
    <a
      key={index}
      href={link.url}
      className="group block rounded-xl shadow-md transition-all duration-300 p-4 transform hover:-translate-y-1 hover:scale-105 h-32 flex flex-col
                 bg-white border border-transparent
                 hover:border-transparent
                 hover:bg-gradient-to-b hover:from-white hover:to-[#006AA5]/20"
    >
      {/* Logo container */}
      <div className="flex-1 flex items-center justify-center mb-2">
        <img
          src={link.logo}
          alt={link.title}
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded flex items-center justify-center text-blue-700 text-sm font-semibold';
            placeholder.textContent = link.title.charAt(0);
            e.target.parentNode.appendChild(placeholder);
          }}
        />
      </div>
    </a>
  ))}
</div>

      </div>
    </section>
  );
};

export default LinksComponent;