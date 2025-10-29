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
    <section className="py-10 bg-gray-100" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            {t.sectionTitle}
          </h2>
          <div className="w-16 h-0.5 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 max-w-[95%] mx-auto">
          {t.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="group block rounded-xl shadow-md transition-all duration-300 p-5 transform hover:-translate-y-2 hover:shadow-xl
                         bg-sky-100 border-2 border-sky-200
                         hover:border-sky-300
                         hover:bg-sky-50 flex items-center justify-center min-h-[140px]"
            >
              {/* Logo container */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={link.logo}
                  alt={link.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'w-16 h-16 bg-gradient-to-br from-sky-200 to-blue-200 rounded-lg flex items-center justify-center text-sky-700 text-lg font-semibold shadow-sm';
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