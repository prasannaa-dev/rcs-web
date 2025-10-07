import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Book, Users, Heart, Star } from 'lucide-react';

const Aram = () => {
  const { language } = useLanguage();
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300, config: config.molasses });

  const content = {
    en: {
      title: "Aram (Virtue)",
      subtitle: "The Foundation of Ethical Living",
      description: "Aram, the first section of Thiruvalluvar's Tirukkural, is a comprehensive guide to ethical living and moral excellence. It forms the foundation of personal integrity and societal harmony.",
      sections: [
        {
          title: "Domestic Virtue",
          content: "This section emphasizes the importance of leading a righteous life within the family unit. It covers topics such as the duties of a householder, the significance of hospitality, and the value of raising virtuous children.",
          icon: Sun
        },
        {
          title: "Ascetic Virtue",
          content: "Here, Thiruvalluvar explores the higher realms of spiritual and moral living. It discusses renunciation, compassion, and the path to ultimate enlightenment through ethical conduct.",
          icon: Star
        },
        {
          title: "Fate",
          content: "This intriguing segment delves into the concept of destiny and its interplay with personal actions. It encourages readers to ponder the balance between fate and free will in shaping one's life.",
          icon: Book
        },
        {
          title: "Social Responsibility",
          content: "Thiruvalluvar highlights the importance of community and social obligations. This section explores how individuals can contribute to societal well-being and the moral duties towards others.",
          icon: Users
        },
        {
          title: "Forgiveness",
          content: "This powerful concept encourages readers to practice forgiveness as a means of achieving inner peace and moral clarity. It discusses the virtues of letting go and the strength in compassion.",
          icon: Heart
        },
      ],
      quote: "What is virtuous conduct? It is never destroying life, for killing leads to every other sin. - Kural 321",
      additionalQuotes: [
        "The best among us are those who are virtuous in their conduct. - Kural 481",
        "A person's true wealth is their character and virtue. - Kural 960"
      ],
      additionalWisdomTitle: "Additional Wisdom",
      conclusionTitle: "Conclusion",
      conclusion: "Aram serves as a timeless guide for ethical living, offering profound insights that resonate across cultures and generations."
    },
    ta: {
      title: "அறம்",
      subtitle: "நெறிமுறைக் வாழ்வின் அடிப்படை",
      description: "திருவள்ளுவரின் திருக்குறளின் முதல் பகுதி அறம், ஒழுக்கமாக வாழ்வதற்கான மற்றும் நெறிமுறைக் குணச்சான்றுகளை உள்ளடக்கிய முழுமையான வழிகாட்டியாகும். இது நபரின் நேர்மையும் சமுதாய ஒற்றுமையின் அடித்தளமாகத் திகழ்கிறது.",
      sections: [
        {
          title: "இல்வாழ்க்கை அறம்",
          content: "இந்த பகுதியில் குடும்பத்தில் நேர்மையாக வாழ்வதன் முக்கியத்துவத்தை வள்ளுவர் வலியுறுத்துகிறார். இது ஒரு இல்லதாரரின் கடமைகள், விருந்தோம்பல், நல்ல குழந்தைகளை வளர்க்கும் மதிப்புகள் போன்றவை குறித்துக் கூறுகிறது.",
          icon: Sun
        },
        {
          title: "துறவறம்",
          content: "திருவள்ளுவர் ஆத்மீக மற்றும் நெறிமுறைக்கான உயர்ந்த வாழ்க்கையை இங்கே ஆராய்கிறார். இது துறவு, கருணை மற்றும் ஒழுக்கம் வழியாக பரமோயை அடையக் கூறுகிறது.",
          icon: Star
        },
        {
          title: "விதி",
          content: "விதியின் சாரத்தைவும் மனித செயல்களோடு அதன் தொடர்பையும் இங்கு ஆராய்கிறார். மனித வாழ்க்கையை விதி மற்றும் சுதந்திர எண்ணம் எவ்வாறு கட்டுப்படுத்துகிறது என்பதையும் இது ஆராய்கிறது.",
          icon: Book
        },
        {
          title: "சமூகப் பொறுப்பு",
          content: "திருவள்ளுவர் சமூக மற்றும் சமூக கடமைகளை வலியுறுத்துகிறார். நபர்கள் சமுதாய நலனுக்காக எப்படி பங்களிக்க முடியும் மற்றும் பிறருக்கு எதிரான நெறிமுறை கடமைகள் என்ன என்பதைக் கூறுகிறது.",
          icon: Users
        },
        {
          title: "மன்னிப்பு",
          content: "உள்ளமைதியையும் நெறிமுறைக் கொள்கையையும் அடைவதற்கான வழியாக மன்னிப்பின் அருமையை வலியுறுத்துகிறான். மன்னிப்பின் வலிமை மற்றும் கருணை என்ன என்பதையும் விவரிக்கிறது.",
          icon: Heart
        },
      ],
      quote: "அறவினை யாதெனின் கொல்லாமை கோறல் பிறவினை எல்லாந் தரும். - குறள் 321",
      additionalQuotes: [
        "நற்செய்வார் மேலார், பிறர்க்கின்னா செய்மையின் நீங்கிப் பிற. - குறள் 481",
        "ஒழுக்கத்தின் பெருமை மனித வாழ்க்கையின் செல்வமாகும். - குறள் 960"
      ],
      additionalWisdomTitle: "கூடுதல் ஞானம்",
      conclusionTitle: "முடிவு",
      conclusion: "அறம் என்பது ஒழுக்கமான வாழ்விற்கு காலத்தைத் தாண்டிய ஒரு வழிகாட்டியாக திகழ்கிறது, இது பல நாகரிகங்களிலும் மற்றும் தலைமுறைகளிலும் பெரும் தாக்கத்தை அளிக்கின்றது."
    }
  };

  const t = content[language];

  const sectionSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 300,
    reset: true,
    config: config.molasses,
    onRest: () => {}
  });

  const blockquoteSpring = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    delay: 1200,
    reset: true,
    config: config.molasses,
    onRest: () => {},
  });

  const additionalQuoteSpring = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-50px)' },
    delay: 1800,
    reset: true,
    config: config.molasses,
    onRest: () => {}
  });

  const conclusionSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1500,
    reset: true,
    config: config.molasses,
    onRest: () => {}
  });

  return (
    <animated.div style={fadeIn} className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-2 text-center text-orange-800">{t.title}</h1>
        <h2 className="text-2xl font-semibold mb-6 text-center text-orange-600">{t.subtitle}</h2>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">{t.description}</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.sections.map((section, index) => (
            <animated.div
              key={index}
              style={sectionSpring}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {React.createElement(section.icon, { className: "w-8 h-8 text-orange-500 mr-3" })}
                <h2 className="text-2xl font-semibold text-orange-700">{section.title}</h2>
              </div>
              <p className="text-gray-600">{section.content}</p>
            </animated.div>
          ))}
        </div>

        <animated.blockquote
          style={blockquoteSpring}
          className="text-center italic text-2xl font-semibold text-orange-600 max-w-3xl mx-auto mb-12"
        >
          {t.quote}
        </animated.blockquote>

        <animated.div style={additionalQuoteSpring} className="text-center mb-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-orange-700">{t.additionalWisdomTitle}</h3>
          {t.additionalQuotes.map((quote, index) => (
            <p key={index} className="text-lg mb-4 text-gray-600">
              "{quote}"
            </p>
          ))}
        </animated.div>

        <animated.div style={conclusionSpring} className="text-center">
          <h3 className="text-2xl font-semibold text-orange-700 mb-4">{t.conclusionTitle}</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.conclusion}</p>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default Aram;
