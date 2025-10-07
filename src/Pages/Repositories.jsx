import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const Repositories = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Thirukkural Repositories in Tamil Nadu',
      description: 'Explore notable repositories in Tamil Nadu that provide access to digitized versions, translations, and more about the Thirukkural.',
      repositories: [
        {
          name: 'Tamil Digital Library',
          url: 'https://www.tamildigitallibrary.in/',
          description: 'A comprehensive digital library based in Tamil Nadu with a vast collection of Tamil literature, including the Thirukkural.',
          image: '/Images/tamil-digital-library.jpg',
        },
        {
          name: 'Tamil Virtual University Library',
          url: 'https://www.tamilvu.org/',
          description: 'A digital library from Tamil Nadu providing access to various Tamil literary works and research materials.',
          image: '/Images/tamil-virtual-university.jpg',
        },
        {
          name: 'Thirukkural Digital Archive',
          url: 'https://www.tamilvu.org/ta/library-suvadi-s210-html-s2100001-212219',
          description: 'An archive dedicated to preserving and digitizing manuscripts of the Thirukkural.',
          image: '/Images/thirukkural-digital-archive.jpg',
        },
        {
          name: 'Tamil Nadu State Library',
          url: 'https://www.tndigitallibrary.ac.in/',
          description: 'The state library of Tamil Nadu with digitized resources, including literary works and historical documents related to the Thirukkural..',
          image: '/Images/tamil-nadu-state-library.jpg',
        },
        {
          name: 'Tamil University',
          url: 'https://www.tamiluniversity.ac.in/',
          description: 'A research center focusing on the Thirukkural and its relevance in modern times.',
          image: '/Images/tamil-university.jpg',
        },
      ],
      features: [
        {
          title: 'Environmental Controls',
          description: 'Systems are implemented to monitor and maintain optimal conditions, such as keeping the temperature around 20°C and relative humidity between 50-55%, ensuring the longevity of the manuscripts.',
        },
        {
          title: 'Lighting Maintenance',
          description: 'Low UV-emitting lights are utilized to minimize exposure and prevent degradation over time, ensuring the manuscripts remain in excellent condition.',
        },
        {
          title: 'Maintenance Tools',
          description: 'Advanced tools and equipment are employed to maintain and protect the manuscripts effectively.',
        },
        {
          title: 'Access Controls',
          description: 'Security measures are in place to regulate access to the repositories, ensuring manuscripts are handled and preserved safely.',
        },
        {
          title: 'Automated Monitoring',
          description: 'Sophisticated monitoring systems track environmental parameters and detect any anomalies, allowing for prompt corrective actions.',
        },
      ],
      visitWebsite: 'Visit Website',
      featuresTitle: 'Features',
    },
    ta: {
      title: 'திருக்குறள் பதிவுகள் தமிழ்நாட்டில்',
      description: 'தமிழ்நாட்டில் உள்ள திருக்குறள் தொடர்பான முக்கியமான பதிவுகளை எளிதாக அணுகுங்கள்.',
      repositories: [
        {
          name: 'தமிழ் டிஜிட்டல் நூலகம்',
          url: 'https://www.tamildigitallibrary.in/',
          description: 'தமிழ்நாட்டில் அமைந்த முழுமையான டிஜிட்டல் நூலகம்.',
          image: '/Images/tamil-digital-library.jpg',
        },
        {
          name: 'தமிழ் இணைய பல்கலைக்கழக நூலகம்',
          url: 'https://www.tamilvu.org/',
          description: 'தமிழ்நாட்டில் உள்ள ஒரு டிஜிட்டல் நூலகம்.',
          image: '/Images/tamil-virtual-university.jpg',
        },
        {
          name: 'திருக்குறள் டிஜிட்டல் அருவை',
          url: 'https://www.tamilvu.org/ta/library-suvadi-s210-html-s2100001-212219',
          description: 'திருக்குறள் கையெழுத்துக்களை பாதுகாப்பதற்காக அருவை.',
          image: '/Images/thirukkural-digital-archive.jpg',
        },
        {
          name: 'தமிழ்நாடு மாநில நூலகம்',
          url: 'https://www.tndigitallibrary.ac.in/',
          description: 'இலக்கியப் படைப்புகள், திருக்குறள் தொடர்பான வரலாற்று ஆவணங்கள் உள்ளிட்ட டிஜிட்டல் வளங்களைக் கொண்ட தமிழ்நாடு மாநில நூலகம்.',
          image: '/Images/tamil-nadu-state-library.jpg',
        },
        {
          name: 'தமிழ்ப் பல்கலைக்கழகம்',
          url: 'https://www.tamiluniversity.ac.in/',
          description: 'திருக்குறள் மற்றும் அதன் இன்றைய காலத்திற்கான முக்கியத்துவத்தைப் பற்றிய ஆராய்ச்சி மையம்.',
          image: '/Images/tamil-university.jpg',
        },
      ],
      features: [
        {
          title: 'சூழல் கட்டுப்பாடுகள்',
          description: 'சூழ்நிலை மாற்றங்களை கண்காணித்து, வெப்பநிலையை சுமார் 20°C ஆகக் கட்டுப்படுத்தவும், ஈரப்பதத்தை 50-55% ஆகக் கட்டுப்படுத்தவும் முறைகள் நிறுவப்பட்டுள்ளன.',
        },
        {
          title: 'வெளிச்ச பராமரிப்பு',
          description: 'UV வெளிச்சம் குறைந்த தங்கங்களைக் கொண்டு வெளிச்சமளிப்பது. நீண்டகால வெளிப்பாட்டால் பதிவுகளின் தரம் குறைவதைத் தவிர்க்க இவை பயன்படுத்தப்படுகின்றன.',
        },
        {
          title: 'பராமரிப்பு கருவிகள்',
          description: 'பதிவுகளை பராமரிக்கவும் பாதுகாப்பதற்கும் திறமையான கருவிகள் மற்றும் உபகரணங்கள் பயன்படுத்தப்படுகின்றன.',
        },
        {
          title: 'அணுகல் கட்டுப்பாடுகள்',
          description: 'பதிவுகளுக்கு அணுகலை கட்டுப்படுத்தி, பாதுகாப்பான முறையில் பராமரிக்கப்படுவதற்கு தேவையான பாதுகாப்பு முறைகள் உள்ளன.',
        },
        {
          title: 'சுயவிவர கண்காணிப்பு',
          description: 'தரவைச் சுத்தமாக பராமரிக்கவும், எந்தவொரு பிரச்சனையும் முந்தைய நிலைமைகளை கண்டறிந்து தீர்க்கும் திறமையான கண்காணிப்பு அமைப்புகள்.',
        },
      ],
      visitWebsite: 'விண்ணப்பதாரரைச் செல்லவும்',
      featuresTitle: 'அம்சங்கள்',
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0 },
      }}
      className="py-10 px-5 bg-blue-100"
    >
      <h2 className="text-3xl font-bold text-center mb-4">{content[language].title}</h2>
      <p className="text-lg text-center mb-10">{content[language].description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {content[language].repositories.map((repo) => (
          <motion.div
            key={repo.name}
            initial={{ scale: 0.8 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={repo.image}
                alt={repo.name}
                className="w-full h-40 object-cover hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{repo.name}</h3>
                <p className="text-gray-600">{repo.description}</p>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  {content[language].visitWebsite}
                </a>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Features Section */}
      <section className="mt-10 p-5 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-center mb-4">{content[language].featuresTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {content[language].features.map((feature) => (
            <div key={feature.title} className="bg-blue-50 rounded-lg p-4 shadow">
              <h4 className="text-lg font-semibold">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Repositories;