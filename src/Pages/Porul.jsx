import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useLanguage } from '../context/LanguageContext';
import { Crown, TrendingUp, Scale, Swords, Users } from 'lucide-react';

const Porul = () => {
  const { language } = useLanguage();
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300, config: config.molasses });

  const content = {
    en: {
      title: "Porul (Wealth)",
      subtitle: "The Art of Governance and Prosperity",
      description: "Porul, the second section of Thiruvalluvar's Tirukkural, delves into the realms of material well-being, politics, and the art of governance. It provides timeless wisdom on leadership, economic prosperity, and statecraft.",
      sections: [
        {
          title: "Good Governance",
          content: "This section explores the principles of effective leadership and administration. It emphasizes the importance of justice, fairness, and ethical conduct in ruling a kingdom or managing public affairs.",
          icon: Crown
        },
        {
          title: "Economic Prosperity",
          content: "Thiruvalluvar discusses the significance of economic growth and wealth creation. He provides insights on trade, agriculture, and resource management to ensure the material well-being of society.",
          icon: TrendingUp
        },
        {
          title: "Social Order",
          content: "Maintaining social harmony and order is crucial for a thriving society. This segment offers strategies for upholding law and order, resolving conflicts, and promoting social cohesion.",
          icon: Scale
        },
        {
          title: "Diplomacy and Warfare",
          content: "The Tirukkural provides guidance on international relations, diplomacy, and the judicious use of force. It discusses when to negotiate, when to show strength, and how to conduct oneself in times of conflict.",
          icon: Swords
        },
        {
          title: "Public Administration",
          content: "Effective governance requires skilled administrators and public servants. This section outlines the qualities and responsibilities of those who serve the public and manage state affairs.",
          icon: Users
        },
      ],
      quote: "The world will follow the leader who leads by their own righteous actions. - Kural 668",
      additionalQuotes: [
        "A just king is the pillar of his people's prosperity. - Kural 542",
        "Morality is the cornerstone of material prosperity. - Kural 501"
      ],
      additionalWisdomTitle: "Additional Wisdom", // Added translation
      conclusion: "Porul offers invaluable insights into the art of governance, economic management, and social organization, providing a comprehensive guide for leaders and citizens alike in building a prosperous and just society.",
      conclusionTitle: "Conclusion" // Added translation
    },
    ta: {
      title: "பொருள்",
      subtitle: "ஆட்சிக் கலை மற்றும் செழிப்பு",
      description: "திருவள்ளுவரின் திருக்குறளின் இரண்டாவது பிரிவான பொருள், பொருள் நலன், அரசியல் மற்றும் ஆட்சிக் கலை ஆகியவற்றின் உலகங்களை ஆராய்கிறது. இது தலைமைத்துவம், பொருளாதார செழிப்பு மற்றும் அரசியல் பற்றிய காலத்தால் அழியாத ஞானத்தை வழங்குகிறது.",
      sections: [
        {
          title: "நல்லாட்சி",
          content: "இந்தப் பிரிவு திறமையான தலைமைத்துவம் மற்றும் நிர்வாகத்தின் கொள்கைகளை ஆராய்கிறது. இது ஒரு அரசை ஆள்வதில் அல்லது பொது விவகாரங்களை நிர்வகிப்பதில் நீதி, நியாயம் மற்றும் நெறிமுறை நடத்தையின் முக்கியத்துவத்தை வலியுறுத்துகிறது.",
          icon: Crown
        },
        {
          title: "பொருளாதார செழிப்பு",
          content: "திருவள்ளுவர் பொருளாதார வளர்ச்சி மற்றும் செல்வ உருவாக்கத்தின் முக்கியத்துவத்தை விவாதிக்கிறார். சமூகத்தின் பொருள் நலனை உறுதிப்படுத்த வர்த்தகம், விவசாயம் மற்றும் வள மேலாண்மை குறித்த நுண்ணறிவுகளை அவர் வழங்குகிறார்.",
          icon: TrendingUp
        },
        {
          title: "சமூக ஒழுங்கு",
          content: "சமூக நல்லிணக்கம் மற்றும் ஒழுங்கைப் பேணுவது செழித்தோங்கும் சமூகத்திற்கு முக்கியமானது. இந்தப் பகுதி சட்டம் ஒழுங்கைப் பேணுவதற்கும், முரண்பாடுகளைத் தீர்ப்பதற்கும், சமூக ஒற்றுமையை ஊக்குவிப்பதற்கும் உத்திகளை வழங்குகிறது.",
          icon: Scale
        },
        {
          title: "இராஜதந்திரம் மற்றும் போர்",
          content: "திருக்குறள் சர்வதேச உறவுகள், இராஜதந்திரம் மற்றும் சக்தியின் நியாயமான பயன்பாடு குறித்த வழிகாட்டுதலை வழங்குகிறது. எப்போது பேச்சுவார்த்தை நடத்த வேண்டும், எப்போது வலிமையைக் காட்ட வேண்டும், மோதல் காலங்களில் எவ்வாறு நடந்து கொள்ள வேண்டும் என்பது பற்றி விவாதிக்கிறது.",
          icon: Swords
        },
        {
          title: "பொது நிர்வாகம்",
          content: "திறமையான ஆட்சிக்கு திறமையான நிர்வாகிகள் மற்றும் அரசு ஊழியர்கள் தேவை. இந்தப் பிரிவு பொதுமக்களுக்குச் சேவை செய்பவர்கள் மற்றும் அரசு விவகாரங்களை நிர்வகிப்பவர்களின் பண்புகள் மற்றும் பொறுப்புகளை வரையறுக்கிறது.",
          icon: Users
        },
      ],
      quote: "தன்னுடைய நேர்மையான செயல்களால் வழிநடத்தும் தலைவரைப் பின்பற்றி உலகம் செல்லும். - குறள் 668",
      additionalQuotes: [
        "நீதியான அரசன் தன் மக்களின் செழிப்பின் தூணாக இருக்கிறான். - குறள் 542",
        "நெறிமுறை பொருள் செழிப்பின் அடித்தளமாகும். - குறள் 501"
      ],
      additionalWisdomTitle: "கூடுதல் ஞானம்", // Added translation
      conclusion: "பொருள் ஆட்சிக் கலை, பொருளாதார மேலாண்மை மற்றும் சமூக அமைப்பு பற்றிய மதிப்புமிக்க நுண்ணறிவுகளை வழங்குகிறது, செழிப்பான மற்றும் நீதியான சமூகத்தை உருவாக்குவதில் தலைவர்கள் மற்றும் குடிமக்களுக்கு விரிவான வழிகாட்டியை வழங்குகிறது.",
      conclusionTitle: "முடிவு" // Added translation
    }
  };

  const t = content[language];

  const sectionSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 300,
  });

  const blockquoteSpring = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    delay: 1200,
  });

  const conclusionSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1500,
  });

  const additionalQuoteSpring = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-50px)' },
    delay: 1800,
  });

  return (
    <animated.div style={fadeIn} className="min-h-screen bg-gradient-to-b from-blue-50 to-green-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-2 text-center text-blue-800">{t.title}</h1>
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">{t.subtitle}</h2>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">{t.description}</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.sections.map((section, index) => (
            <animated.div
              key={index}
              style={sectionSpring}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {React.createElement(section.icon, { className: "w-8 h-8 text-blue-500 mr-3" })}
                <h2 className="text-2xl font-semibold text-blue-700">{section.title}</h2>
              </div>
              <p className="text-gray-600">{section.content}</p>
            </animated.div>
          ))}
        </div>

        <animated.blockquote
          style={blockquoteSpring}
          className="text-2xl italic text-center mb-12 px-8 py-4 border-l-4 border-blue-500 bg-blue-100 rounded-lg shadow-md"
        >
          "{t.quote}"
        </animated.blockquote>

        <div className="text-center mb-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-blue-700">{t.additionalWisdomTitle}</h3>
          {t.additionalQuotes.map((quote, index) => (
            <animated.p key={index} style={additionalQuoteSpring} className="text-lg mb-4 text-gray-600">
              "{quote}"
            </animated.p>
          ))}
        </div>

        <animated.div style={conclusionSpring} className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">{t.conclusionTitle}</h3>
          <p className="text-lg text-gray-600">{t.conclusion}</p>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default Porul;
