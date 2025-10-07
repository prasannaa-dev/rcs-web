import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Features of Thirukkural",
      features: [
        {
          title: "Ancient Wisdom",
          description: "Explore the timeless wisdom of Tamil literature dating back to the 1st century BCE."
        },
        {
          title: "Ethical Guidance",
          description: "Discover practical advice on virtuous living, politics, and love."
        },
        {
          title: "Poetic Beauty",
          description: "Experience the beauty of Tamil poetry through concise and profound couplets."
        },
        {
          title: "Universal Applicability",
          description: "Learn principles that transcend time and culture, applicable to modern life."
        }
      ]
    },
    ta: {
      title: "திருக்குறளின் சிறப்பம்சங்கள்",
      features: [
        {
          title: "பழமையான ஞானம்",
          description: "கி.மு. முதலாம் நூற்றாண்டைச் சேர்ந்த தமிழ் இலக்கியத்தின் காலத்தால் அழியாத ஞானத்தை ஆராயுங்கள்."
        },
        {
          title: "நெறிமுறை வழிகாட்டல்",
          description: "நல்வாழ்க்கை, அரசியல், மற்றும் அன்பு பற்றிய நடைமுறை அறிவுரைகளைக் கண்டறியுங்கள்."
        },
        {
          title: "கவித்துவ அழகு",
          description: "சுருக்கமான மற்றும் ஆழமான குறள்கள் மூலம் தமிழ்க் கவிதையின் அழகை அனுபவியுங்கள்."
        },
        {
          title: "உலகளாவிய பொருந்தக்கூடியது",
          description: "நவீன வாழ்க்கைக்கும் பொருந்தக்கூடிய, காலம் மற்றும் கலாச்சாரத்தைக் கடந்த கொள்கைகளைக் கற்றுக்கொள்ளுங்கள்."
        }
      ]
    }
  };

  const { title, features } = content[language];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;