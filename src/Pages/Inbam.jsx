import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Smile, Lock, Fingerprint, Users } from 'lucide-react';

const Inbam = () => {
  const { language } = useLanguage();
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300, config: config.molasses });

  const content = {
    en: {
      title: "Inbam (Love)",
      subtitle: "The Essence of Human Relationships",
      description: "Inbam, the third section of Thiruvalluvar's Tirukkural, delves into the profound nature of love and human relationships. It explores the various facets of romantic love, familial bonds, and the broader concept of love in society.",
      sections: [
        {
          title: "Beauty of Love",
          content: "This section celebrates the beauty and power of love. Thiruvalluvar describes how love enriches life, brings joy, and gives meaning to human existence.",
          icon: Heart
        },
        {
          title: "Joys and Sorrows",
          content: "Love brings both happiness and challenges. This segment explores the emotional spectrum of romantic relationships, from the elation of union to the pain of separation.",
          icon: Smile
        },
        {
          title: "Trust and Understanding",
          content: "Mutual trust and understanding form the foundation of strong relationships. Thiruvalluvar emphasizes the importance of these qualities in nurturing and sustaining love.",
          icon: Lock
        },
        {
          title: "Intimacy in Love",
          content: "The Tirukkural discusses the role of physical and emotional intimacy in love. It presents a nuanced view of how these aspects contribute to the depth and strength of romantic bonds.",
          icon: Fingerprint
        },
        {
          title: "Love in Society",
          content: "Beyond personal relationships, this section also touches upon the broader concept of love in society, including compassion, kindness, and the bonds that unite communities.",
          icon: Users
        },
      ],
      quote: "Love makes a heart tender, but it also strengthens it with courage. - Kural 1133",
      additionalQuotes: [
        "The ignorant say love belongs to those in life, but it truly belongs to those who have died to themselves. - Kural 72",
        "Love is a tender act within and a gentle word without. - Kural 92"
      ],
      additionalWisdom: "Additional Wisdom",
      conclusionTitle: "Conclusion",
      conclusion: "Inbam offers profound insights into the nature of love and human relationships, reminding us of the central role that love plays in personal happiness, social harmony, and the human experience as a whole."
    },
    ta: {
      title: "இன்பம்",
      subtitle: "மனித உறவுகளின் சாரம்",
      description: "திருவள்ளுவரின் திருக்குறளின் மூன்றாவது பிரிவான இன்பம், அன்பு மற்றும் மனித உறவுகளின் ஆழமான தன்மையை ஆராய்கிறது. இது காதல், குடும்ப பிணைப்புகள், மற்றும் சமூகத்தில் அன்பின் பரந்த கருத்து ஆகியவற்றின் பல்வேறு அம்சங்களை ஆராய்கிறது.",
      sections: [
        {
          title: "அன்பின் அழகு",
          content: "இந்தப் பிரிவு அன்பின் அழகு மற்றும் சக்தியைக் கொண்டாடுகிறது. அன்பு வாழ்க்கையை எவ்வாறு வளப்படுத்துகிறது, மகிழ்ச்சியைக் கொண்டு வருகிறது, மற்றும் மனித வாழ்க்கைக்கு அர்த்தம் கொடுக்கிறது என்பதை திருவள்ளுவர் விவரிக்கிறார்.",
          icon: Heart
        },
        {
          title: "மகிழ்ச்சிகளும் துயரங்களும்",
          content: "அன்பு மகிழ்ச்சியையும் சவால்களையும் கொண்டு வருகிறது. இந்தப் பகுதி காதல் உறவுகளின் உணர்ச்சி நிறமாலையை, ஒன்றிணைவின் உற்சாகம் முதல் பிரிவின் வலி வரை ஆராய்கிறது.",
          icon: Smile
        },
        {
          title: "நம்பிக்கை மற்றும் புரிதல்",
          content: "பரஸ்பர நம்பிக்கை மற்றும் புரிதல் ஆகியவை வலுவான உறவுகளின் அடித்தளமாக அமைகின்றன. அன்பை வளர்ப்பதிலும் நிலைநிறுத்துவதிலும் இந்த பண்புகளின் முக்கியத்துவத்தை திருவள்ளுவர் வலியுறுத்துகிறார்.",
          icon: Lock
        },
        {
          title: "அன்பில் நெருக்கம்",
          content: "திருக்குறள் அன்பில் உடல் மற்றும் உணர்ச்சிபூர்வமான நெருக்கத்தின் பங்கைப் பற்றி விவாதிக்கிறது. இந்த அம்சங்கள் காதல் பிணைப்புகளின் ஆழம் மற்றும் வலிமைக்கு எவ்வாறு பங்களிக்கின்றன என்பது குறித்த நுணுக்கமான பார்வையை இது வழங்குகிறது.",
          icon: Fingerprint
        },
        {
          title: "சமூகத்தில் அன்பு",
          content: "தனிப்பட்ட உறவுகளுக்கு அப்பால், இந்தப் பிரிவு சமூகத்தில் அன்பின் பரந்த கருத்தையும் தொடுகிறது, இதில் இரக்கம், கருணை மற்றும் சமூகங்களை ஒன்றிணைக்கும் பிணைப்புகள் ஆகியவை அடங்கும்.",
          icon: Users
        },
      ],
      quote: "அன்பு ஒரு இதயத்தை மென்மையாக்குகிறது, ஆனால் அது தைரியத்தாலும் அதை வலுப்படுத்துகிறது. - குறள் 1133",
      additionalQuotes: [
        "அறிவற்றவர் காதல் உயிருடன் இருப்பவர்களுக்கு உரியது என்கின்றனர், ஆனால் அது உண்மையில் தங்களுக்காக இறந்தவர்களுக்கு உரியது. - குறள் 72",
        "காதல் என்பது உள்ளே ஒரு மென்மையான செயலும், வெளியே ஒரு மென்மையான சொல்லும் ஆகும். - குறள் 92"
      ],
      additionalWisdom: "கூடுதல் ஞானம்",
      conclusionTitle: "முடிவு",
      conclusion: "இன்பம் அன்பு மற்றும் மனித உறவுகளின் இயல்பைப் பற்றிய ஆழமான நுண்ணறிவுகளை வழங்குகிறது, தனிப்பட்ட மகிழ்ச்சி, சமூக நல்லிணக்கம் மற்றும் மனித அனுபவம் முழுவதிலும் அன்பு வகிக்கும் மையப் பங்கை நமக்கு நினைவூட்டுகிறது."
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
    <animated.div style={fadeIn} className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-2 text-center text-purple-800">{t.title}</h1>
        <h2 className="text-2xl font-semibold mb-6 text-center text-purple-600">{t.subtitle}</h2>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">{t.description}</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.sections.map((section, index) => (
            <animated.div
              key={index}
              style={sectionSpring}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {React.createElement(section.icon, { className: "w-8 h-8 text-purple-500 mr-3" })}
                <h2 className="text-2xl font-semibold text-purple-700">{section.title}</h2>
              </div>
              <p className="text-gray-600">{section.content}</p>
            </animated.div>
          ))}
        </div>

        <animated.blockquote
          style={blockquoteSpring}
          className="text-2xl italic text-center mb-12 px-8 py-4 border-l-4 border-purple-500 bg-purple-100 rounded-lg shadow-md"
        >
          "{t.quote}"
        </animated.blockquote>

        <div className="text-center mb-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-purple-700">{t.additionalWisdom}</h3>
          {t.additionalQuotes.map((quote, index) => (
            <animated.p
              key={index}
              style={additionalQuoteSpring}
              className="text-lg italic mb-2 text-gray-700"
            >
              "{quote}"
            </animated.p>
          ))}
        </div>

        <animated.div style={conclusionSpring} className="bg-white shadow-lg rounded-lg p-8">
  <h3 className="text-2xl font-semibold mb-4 text-purple-700 text-center">{t.conclusionTitle}</h3> {/* Added text-center */}
  <p className="text-gray-600">{t.conclusion}</p>
</animated.div>
      </div>
    </animated.div>
  );
};

export default Inbam;
