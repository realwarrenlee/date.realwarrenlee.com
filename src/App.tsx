import React, { useState } from 'react';
import { BrainCircuit, Rocket, Gamepad2, Lightbulb, Handshake, Plane, Feather, Star, Heart, Brain, Shield, Sparkles } from 'lucide-react';
import Hero from './components/Hero';
import DateForm from './components/DateForm';
import ContentModal from './components/ContentModal';
import DeathValley from './assets/images/death-valley.jpg';


const App = () => {
  const [showDateForm, setShowDateForm] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

  if (showDateForm) {
    return <DateForm onBack={() => setShowDateForm(false)} />;
  }
  
  const contentData = {
    chance: {
      isStory: true,
      source: {
        from: "Steve Jobs",
        to: "Steve Jobs",
        subject: "You can't plan to meet the people who will change your life",
        date: "June 7, 2005, 11:46 p.m."
      },
      content: [
        "You can't plan to meet the people who will change your life. I am invited to speak at Stanford's business school once or twice a year, and I always try to do it. I had accepted an invitation to speak one Thursday late in the afternoon, and I wasn't feeling very well and I had a dinner later that evening with some important customers up at a winery on Page Mill Road. The room for my talk wasn't large enough, and all the seats were full so some of the students were sitting in the aisles. One of the professors asked them to clear the aisles in case a fire marshal should appear, and one girl who was being evicted quickly sat down in one of the four seats they had left vacant in the front row for me and whatever entourage I might be bringing. When I arrived alone and sat down in the front row, it didn't take me long to notice this really cute girl sitting next to me. I think she was stunned when it was me that got up to speak. And I knew something was up when I was staring at her, forgetting what I was talking about mid-sentence. After my talk, I stayed around for a while to speak with some students, and she stayed too. But then she left. I didn't know who she was, and thought I might never see her again. So I wound things up and left too, and I caught up with her in the parking lot. I asked her if she would have dinner with me on Saturday.",
        "She said yes and gave me her phone number. As I was walking to my car, I asked myself: \"If this was the last day of my life, would I rather have dinner with these important customers or her?\" I raced back to her car, just as she was about to drive off, and asked her \"How about dinner tonight?\" She said: \"Sure,\" and we were married 18 months later. Yea, it might have worked out if I had waited until Saturday night, and those customers might have given us a few more orders if I had shown up.",
        "But who knows, maybe she had a hot date Friday night and things would have turned out much differently... You can't plan to meet the people who will change your life. It just happens. Maybe it's random, maybe it's fate. Either way, you can't plan for it. But you want to recognize it when it happens, and have the courage and clarity of mind to grab onto it."
      ]
    },
    freedom: {
      content: [
        "\"Those who would give up essential liberty, to purchase a little temporary safety, deserve neither liberty nor safety.\""
      ]
    },
    exceptionalism: {
      content: [
        "\"The penalty for being average has never been so severe, but the payout for being exceptional has never been higher."
      ]
    },
    superintelligence: {
      content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    space: {
      content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    games: {
      content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    startups: {
      content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    'venture capital': {
      content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    travel: {
      content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    loyalty: {
      content: ["Loyalty is the bedrock of any meaningful relationship. It's about unwavering support, trust, and commitment through both good times and bad. It’s a quiet strength that says, 'I am here for you, no matter what.'"]
    },
    intelligence: {
      content: ["I'm drawn to a sharp, curious mind. Intelligence isn't just about knowledge; it's about the ability to think critically, to see patterns, to ask the right questions, and to engage in deep, stimulating conversations about a wide range of topics."]
    },
    empathy: {
      content: ["Empathy is the ability to understand and share the feelings of another. It's about being present, listening deeply, and connecting on a human level. I value those who can put themselves in others' shoes and respond with compassion and kindness."]
    }
  };

  const profileData = {
    name: "Warren",
    interests: ["Superintelligence", "Space", "Games", "Startups", "Venture Capital", "Travel"],
    values: ["Freedom", "Exceptionalism"],
    lookingFor: ["Loyalty", "Intelligence", "Empathy"],
    story: ["Chance"]
  };

  const photos = [
    { id: 1, placeholder: "Death Valley", src: DeathValley},
    { id: 2, placeholder: "Grand Canyon" },
    { id: 3, placeholder: "Giant Sequoia" },
    { id: 4, placeholder: "Golden Gate Bridge" }
  ];

  const getInterestIcon = (interest: string) => {
    const icons: { [key: string]: React.ElementType } = {
      'Superintelligence': BrainCircuit, 'Space': Rocket, 'Games': Gamepad2,
      'Startups': Lightbulb, 'Venture Capital': Handshake, 'Travel': Plane
    };
    return icons[interest] || Star;
  };

  const getValueIcon = (value: string) => {
    const icons: { [key: string]: React.ElementType } = {
      'Freedom': Feather, 'Exceptionalism': Star
    };
    return icons[value] || Heart;
  };

  const getLookingForIcon = (item: string) => {
    const icons: { [key: string]: React.ElementType } = {
      'Loyalty': Heart, 'Intelligence': Brain, 'Ambition': Rocket
    };
    return icons[item] || Shield;
  };

  const getStoryIcon = (item: string) => {
    const icons: { [key: string]: React.ElementType } = {
      'Chance': Sparkles,
    };
    return icons[item] || Shield;
  };

  const handleItemClick = (item: string) => {
    const key = item.toLowerCase() as keyof typeof contentData;
    if (contentData[key]) {
      setModalContent(contentData[key]);
    }
  };

  return (
    <div className="min-h-screen w-full font-inter bg-gradient-radial from-pink-300 via-purple-300 to-blue-300 overflow-hidden">
      <div className="w-full h-screen overflow-y-auto p-4 sm:p-6 md:p-8 text-white">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <Hero />

          <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow">
            <div className="flex items-center gap-8 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-600 rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-[0_0_20px_rgba(255,100,0,0.6)]">
                🔥
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal gradient-text">{profileData.name}</h3>
              </div>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              Obsessed with building Superintelligence to understand the universe.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className={`
                  group bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm card-shadow overflow-hidden
                  ${!photo.src ? 'aspect-square flex items-center justify-center' : ''}
                `}
              >
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.placeholder}
                    className="w-full h-auto block transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                ) : (
                  <span className="text-lg text-center p-2 text-white/60">{photo.placeholder}</span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <div className="space-y-4 text-white/80">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow">
            <h3 className="text-2xl font-bold mb-4">Interests</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {profileData.interests.map((interest, index) => {
                const IconComponent = getInterestIcon(interest);
                return (
                  <div 
                    key={index} 
                    onClick={() => handleItemClick(interest)}
                    className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105"
                  >
                    <IconComponent size={18} className="text-white/70" />
                    <span className="text-white/80">{interest}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow">
            <h3 className="text-2xl font-bold mb-4">Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {profileData.values.map((value, index) => {
                const IconComponent = getValueIcon(value);
                return (
                  <div 
                    key={index} 
                    onClick={() => handleItemClick(value)}
                    className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105"
                  >
                    <IconComponent size={18} className="text-white/70" />
                    <span className="text-white/80">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow">
            <h3 className="text-2xl font-bold mb-4">Looking For</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {profileData.lookingFor.map((item, index) => {
                const IconComponent = getLookingForIcon(item);
                return (
                  <div 
                    key={index}
                    onClick={() => handleItemClick(item)}
                    className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105"
                  >
                    <IconComponent size={18} className="text-white/70" />
                    <span className="text-white/80">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow">
            <h3 className="text-2xl font-bold mb-4">Story</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {profileData.story.map((item, index) => {
                const IconComponent = getStoryIcon(item);
                return (
                  <div 
                    key={index} 
                    onClick={() => handleItemClick(item)}
                    className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105"
                  >
                    <IconComponent size={18} className="text-white/70" />
                    <span className="text-white/80">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center pt-6 pb-12">
            <button
              onClick={() => setShowDateForm(true)}
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-10 py-5 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span>Date</span>
            </button>
          </div>
          
          <div className="text-center pt-6">
            <p className="text-white/60 text-sm italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
          </div>
        </div>

        <ContentModal data={modalContent} onClose={() => setModalContent(null)} />

        <style jsx>{`
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </div>
  );
};

export default App;