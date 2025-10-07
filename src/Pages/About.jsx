import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Book, Globe, Scale, Users } from 'lucide-react';
import '@fontsource/playfair-display';
import '@fontsource/poppins';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Thirukkural: Timeless Wisdom for Modern Governance",
      subtitle: "A Tamil Literary Masterpiece by Thiruvalluvar",
      introduction: "Thirukkural, an ancient Tamil text composed by the revered sage Thiruvalluvar, stands as a cornerstone of Tamil literature and ethics. This collection of 1,330 couplets provides profound insights into virtue, wealth, and love, offering guidance for harmonious living and effective governance.",
      sections: [
        {
          title: "Historical Significance",
          content: "Dating back to the 1st century BCE to 5th century CE, Thirukkural has shaped Tamil culture and moral philosophy for over two millennia. Its universal teachings have earned it the title 'Ulaga Podhu Marai' (Universal Common Creed).",
          icon: <Book className="w-12 h-12 text-indigo-600" />
        },
        {
          title: "Global Recognition",
          content: "Translated into over 100 languages, Thirukkural has garnered worldwide acclaim. Its ethical principles resonate across cultures, making it a truly universal guide to righteous living and governance.",
          icon: <Globe className="w-12 h-12 text-indigo-600" />
        },
        {
          title: "Relevance in Modern Governance",
          content: "The Tamil Nadu government recognizes Thirukkural as a guiding light for ethical governance and societal development. Its teachings on justice, education, and leadership continue to inspire policies and initiatives.",
          icon: <Scale className="w-12 h-12 text-indigo-600" />
        },
        {
          title: "Social Impact",
          content: "Thirukkural's principles on social equality, environmental stewardship, and ethical conduct have profound implications for contemporary social issues, offering timeless solutions to modern challenges.",
          icon: <Users className="w-12 h-12 text-indigo-600" />
        }
      ],
      structure: {
        title: "Structure and Content",
        description: "Thirukkural is meticulously organized into three books, each focusing on a fundamental aspect of life and governance:",
        books: [
          { name: "Aram (Virtue)", description: "Explores ethical living and moral values" },
          { name: "Porul (Wealth)", description: "Discusses statecraft, economy, and society" },
          { name: "Inbam (Love)", description: "Examines human relationships and emotions" }
        ]
      },
      quote: {
        text: "The worth of a man is determined by his conduct. Everything else is just sound.",
        author: "Thiruvalluvar"
      },
    },
    ta: {
      title: "திருக்குறள்: நவீன ஆட்சிக்கான காலமற்ற ஞானம்",
      subtitle: "திருவள்ளுவரால் எழுதப்பட்ட தமிழ் இலக்கியத்தின் மாஸ்டர்பீஸ்",
      introduction: "திருக்குறள், மதிப்பிற்குரிய ஞானியர் திருவள்ளுவரால் உருவாக்கப்பட்ட பண்டைய தமிழ் உரை, தமிழ் இலக்கியம் மற்றும் நீதிக்கு அடித்தளமாக விளங்குகிறது. 1,330 கூட்டுகள் கொண்ட இந்த தொகுப்பு, தனிப்பட்ட வாழ்விலும், ஆட்சியில் கருணை வழங்குவதற்கான ஆழமான புரிதல்களை வழங்குகிறது.",
      sections: [
        {
          title: " வரலாற்று முக்கியத்துவம்",
          content: "கிபி 1ஆம் நூற்றாண்டிலிருந்து 5ஆம் நூற்றாண்டு வரை வரலாற்று முக்கியத்துவம் பெற்றுள்ள திருக்குறள், இரு ஆயிரம் ஆண்டுகளுக்கு மேலாக தமிழ் பண்பாட்டையும் நெறியியல் தத்துவத்தையும் உருவாக்கியுள்ளது. இதன் சுறுமுறுப்பான பாடல்கள் 'உலக பொதுமரையாக்கம்' எனும் பெயரில் அழைக்கப்படுகிறது.",
          icon: <Book className="w-12 h-12 text-indigo-600" />
        },
        {
          title: "உலகளாவிய பரிசோதனை",
          content: "100க்கும் மேற்பட்ட மொழிகளில் மொழிபெயர்க்கப்பட்ட திருக்குறள் உலகளாவிய புகழைப் பெற்றுள்ளது. இதன் நெறிமுறை சிந்தனைகள் பல்வேறு பண்பாடுகளில் ஒத்துக் கொண்டு, அது உண்மையிலேயே நேர்மையான வாழ்விற்கும் ஆட்சிக்குமான வழிகாட்டியாக அமைந்துள்ளது.",
          icon: <Globe className="w-12 h-12 text-indigo-600" />
        },
        {
          title: "நவீன ஆட்சியில் முக்கியத்துவம்",
          content: "தமிழ்நாடு அரசு திருக்குறளை ஆட்சியியல் மற்றும் சமூக மேம்பாட்டிற்கான வழிகாட்டியாக அங்கீகாரம் அளிக்கிறது. நீதியும், கல்வியும், வழிகாட்டியாளர்களுக்கான இதன் பாடல்கள், கொள்கைகளையும் முயற்சிகளையும் ஊக்குவிக்க தொடர்ந்தும் பல்வேறு வகைகளில் ஈடுபட்டுள்ளன.",
          icon: <Scale className="w-12 h-12 text-indigo-600" />
        },
        {
          title: "சமூக தாக்கம்",
          content: "திருக்குறளின் சமுதாய சமத்துவம், சுற்றுப்புற பராமரிப்பு மற்றும் நீதிமுறை நடைமுறைகள் போன்ற கொள்கைகள் நவீன சமூக பிரச்சினைகளுக்கான தீவிரமான விளைவுகளை ஏற்படுத்துகின்றன, காலத்திற்கேற்ற தீர்வுகளை வழங்குகின்றன.",
          icon: <Users className="w-12 h-12 text-indigo-600" />
        }
      ],
      structure: {
        title: "சாராம்சம் மற்றும் உள்ளடக்கம்",
        description: "திருக்குறள், வாழ்க்கை மற்றும் ஆட்சியின் அடிப்படைக் கூறுகளை மையமாகக் கொண்டு மூன்று புத்தகங்களாக சீராக அமைக்கப்பட்டுள்ளது:",
        books: [
          { name: "அறம்", description: "நெறிமுறை மற்றும் ஒழுங்கு பற்றிய உரை" },
          { name: "பொருள்", description: "ஆட்சித்துறை, பொருளாதாரம் மற்றும் சமூகத்தைப் பற்றிய உரை" },
          { name: "இன்பம்", description: "மனித உறவுகள் மற்றும் உணர்வுகளைப் பற்றிய உரை" }
        ]
      },
      quote: {
        text: "ஒரு மனிதனின் மதிப்பு அவனது நடத்தையால் அளவிடப்படுகிறது. மற்ற அனைத்தும் மட்டுமே சத்தமாகும்.",
        author: "திருவள்ளுவர்"
      },
    },
  };

  const t = content[language] || content.en;

  // Scroll animations for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * index, duration: 0.6 }
    }),
  };

  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <header className="bg-indigo-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-serif mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-80"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.p
          className="text-xl text-gray-700 mb-12 leading-relaxed text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.introduction}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {(t.sections || []).map((section, index) => (  // Safe access to sections
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                boxShadow: '0px 4px 15px rgba(135, 206, 250, 0.7)', // Darker light blue shadow
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              custom={index}
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h3 className="text-2xl font-semibold text-indigo-600 ml-4">
                  {section.title}
                </h3>
              </div>
              <p className="text-gray-600">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">{t.structure.title}</h2>
          <p className="text-gray-600 mb-4">{t.structure.description}</p>
          <ul className="list-disc list-inside">
            {(t.structure.books || []).map((book, index) => (
              <li key={index} className="text-gray-600">
                <strong>{book.name}:</strong> {book.description}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.blockquote
          className="mt-12 border-l-4 border-indigo-600 pl-4 italic text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl">{t.quote.text}</p>
          <footer className="mt-2 text-sm text-gray-500">{t.quote.author}</footer>
        </motion.blockquote>
      </main>

      
    </div>
  );
};

export default About;
