import React, { useState, useEffect } from 'react';
// 1. Import useNavigate from React Router
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Heart, Code, BrainCircuit, Rocket, Gamepad2,
  Lightbulb, Handshake, Plane, Star, Feather, Brain, Shield, Sparkles
} from 'lucide-react';
import ContentModal from './ContentModal';

interface ProfileProps {
  onBack: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onBack }) => {
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<any>(null);

  useEffect(() => {
    if (modalContent) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalContent]);

  const contentData = {
    chance: { isStory: true, source: { from: "Steve Jobs", to: "Steve Jobs", subject: "You can't plan to meet the people who will change your life", date: "June 7, 2005, 11:46 p.m." }, content: ["You can't plan to meet the people who will change your life. I am invited to speak at Stanford's business school once or twice a year, and I always try to do it. I had accepted an invitation to speak one Thursday late in the afternoon, and I wasn't feeling very well and I had a dinner later that evening with some important customers up at a winery on Page Mill Road. The room for my talk wasn't large enough, and all the seats were full so some of the students were sitting in the aisles. One of the professors asked them to clear the aisles in case a fire marshal should appear, and one girl who was being evicted quickly sat down in one of the four seats they had left vacant in the front row for me and whatever entourage I might be bringing. When I arrived alone and sat down in the front row, it didn't take me long to notice this really cute girl sitting next to me. I think she was stunned when it was me that got up to speak. And I knew something was up when I was staring at her, forgetting what I was talking about mid-sentence. After my talk, I stayed around for a while to speak with some students, and she stayed too. But then she left. I didn't know who she was, and thought I might never see her again. So I wound things up and left too, and I caught up with her in the parking lot. I asked her if she would have dinner with me on Saturday.", "She said yes and gave me her phone number. As I was walking to my car, I asked myself: \"If this was the last day of my life, would I rather have dinner with these important customers or her?\" I raced back to her car, just as she was about to drive off, and asked her \"How about dinner tonight?\" She said: \"Sure,\" and we were married 18 months later. Yea, it might have worked out if I had waited until Saturday night, and those customers might have given us a few more orders if I had shown up.", "But who knows, maybe she had a hot date Friday night and things would have turned out much differently... You can't plan to meet the people who will change your life. It just happens. Maybe it's random, maybe it's fate. Either way, you can't plan for it. But you want to recognize it when it happens, and have the courage and clarity of mind to grab onto it."] },
    freedom: { content: ["\"Those who would give up essential liberty, to purchase a little temporary safety, deserve neither liberty nor safety.\""] },
    agency: { content: ["\"Text.\""] },
    exceptionalism: { content: ["\"The penalty for being average has never been so severe, but the payout for being exceptional has never been higher.\""] },
    superintelligence: { content: ["I've always been fascinated by how we tricked rocks into thinking, and ChatGPT accelerated it further. Since 2023, I've been completely consumed by the AI black hole - what started as curiosity about AGI evolved into obsession with superintelligence (or as Dario Amodei perfectly puts it, \"a country of geniuses in a datacenter\").", "What blows my mind is how the transformer architecture - with its humorous \"Attention Is All You Need\" paper title - somehow works brilliantly across every modality. Text, images, code, music - the same fundamental mechanism just scales beautifully. Then you add scaling laws into the mix, and suddenly we have this predictable path to increasingly capable systems. There's something deeply satisfying about the mathematical elegance of it all, especially when you love big, ambitious projects like I do.", "Lately, I'm most excited watching the open-source developments coming out of China. While everyone's focused on the OpenAI's drama, Chinese labs are quietly releasing incredibly capable models that anyone can run locally. It's democratizing access to powerful AI in ways that feel genuinely revolutionary.", "I'm massively optimistic about this. We're living through the steam engine moment, the PC revolution, the internet boom - except this time it's AI, and I genuinely believe we're close to something transformative. This isn't just another tech trend; it's the next great wave that'll reshape productivity, extend human capabilities, and drive unprecedented economic growth.", "The research questions alone are endlessly fascinating. How do we align superintelligent systems with human values? What happens when AI can conduct novel scientific research autonomously? How do we govern systems that might be smarter than their creators? These aren't just academic exercises - they're the defining challenges of our generation.", "Of course I want to work on this. How could you not want a front-row seat to the most interesting time in human history?"] },
    space: { content: ["Like most kids, I was naturally captivated watching rockets blast off into the infinite black. But what keeps me hooked today is witnessing history unfold - Starship making a skyscraper-sized vehicle look graceful as it \"parallel parks\" back on Earth, as one of Steve Jurvetson's friends perfectly described it. We're literally watching the future of human spaceflight being written with each test flight.", "Space represents the ultimate sci-fi dream made real, but it's also where we confront the most profound philosophical questions. Carl Sagan's \"pale blue dot\" perspective hits different when you really think about it - this humbling realization that we're just a tiny speck in an incomprehensibly vast universe containing billions of galaxies, each with billions of stars. It makes you wonder: why are we fighting over patches of land and killing each other when we're all floating together on this precious, fragile rock that's the only known harbor of life in the cosmic ocean?", "That perspective shift is powerful, but I'm equally fascinated by the practical engineering challenges that could transform our civilization. We're talking about constructing Dyson spheres to harness stellar energy, mining asteroids for rare earth elements that are literally floating treasure chests in space, and understanding the mind-bending physics of neutron stars, black holes, and the fabric of spacetime itself. The engineering problems are so audacious they make terrestrial challenges look quaint.", "The geopolitical landscape has completely shifted too. The space race isn't about national pride anymore - it's basically SpaceX versus China's rapidly advancing space program while NASA scrambles to stay relevant with decades-old bureaucracy. SpaceX alone has fundamentally changed what's possible, making space access routine and cheap enough that we're talking about actual Mars colonization within our lifetimes, not centuries.", "But then you get those James Webb telescope images - those impossibly detailed glimpses into the early universe, showing us galaxies that formed when the cosmos was just a baby - and you remember why this all matters. We're expanding human consciousness beyond our planetary cradle, securing our species' survival against existential risks, and potentially discovering we're not alone in this vast cosmos."] },
    games: { content: ["I'm completely obsessed with open-world games, especially Nintendo's masterpieces. Tears of the Kingdom consumed 150 hours of my life - the most I've ever spent on a single game - because it's just that incredible. Looking back, I barely scratched the surface of Breath of the Wild in primary school (only 30 hours while I was busy with Super Mario Odyssey), but now I fully appreciate Nintendo's genius for creating experiences that are both universally appealing and deeply engaging.", "I'm drawn to the storytelling and exploration aspects, usually gaming solo to fully immerse myself in these worlds. I dabble in mobile games but they rarely hold my attention beyond a few months - there's something about console gaming that just hits different than PC.", "Honestly, I think most AAA Western studios have lost the plot. They're too focused on forcing politically progressive narratives and checking boxes instead of creating beautiful, immersive experiences that let players actually have fun. Games from China and Japan understand their audience better - they prioritize great design and engaging stories over lecturing players about inclusivity.", "The future excites me though. With world models and AI development, people like Demis Hassabis and Elon are positioning to revolutionize gaming entirely. Gaming is the biggest entertainment medium, so by 2030 we might see AI-generated games that are completely personalized and infinitely creative."] },
    startups: { content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."] },
    'venture capital': { content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."] },
    travel: { content: ["Like every Singaporean kid, I grew up with family trips to Japan - Tokyo, Kyoto, Osaka, Hiroshima. The most memorable weren't the famous landmarks but the unique experiences: feeding deer in Nara, exploring rabbit island, walking through bamboo forests, and standing before the golden temple. There's something magical about those moments that photos can't capture.", "China opened my eyes to scale and history. The Terracotta Warriors, the Great Wall, carved stone Buddhas in Luoyang, climbing Hua Shan mountain - it's incredible how the bullet train connects this massive country and all its hidden temples and ancient sites. Plus, where else can you casually buy a literal sword as a souvenir?", "But my recent trip to the western US was transformative. By then, I'd shifted toward traveling for nature - Joshua Tree, Death Valley, Grand Canyon, Sequoia, Yosemite. Having read so much about America online, finally experiencing it firsthand was surreal. The landscapes Singapore simply can't offer, the vastness, the raw beauty.", "The tech pilgrimage was equally incredible. Walking through Silicon Valley, seeing the HP garage where it all started, Steve Jobs' childhood home, the spaceship designs of Apple and Nvidia headquarters. We somehow managed to get inside Nvidia HQ - the Endeavor building design is breathtaking, and you can feel the energy of being inside the world's most valuable company.", "Travel fundamentally expands your worldview. You see how people live differently, experience cultures firsthand, and witness natural beauty that makes you appreciate both diversity and home. Honestly, it also makes you realize how exceptional Singapore's governance is - we're spoiled by our infrastructure and purchasing power abroad.", "I want to see as much of the world as possible while I still can. Every trip teaches you something new about the world and yourself."] },
    loyalty: { content: ["Loyalty is the bedrock of any meaningful relationship. It's about unwavering support, trust, and commitment through both good times and bad. It's a quiet strength that says, 'I am here for you, no matter what.'"] },
    intelligence: { content: ["I'm drawn to a sharp, curious mind. Intelligence isn't just about knowledge; it's about the ability to think critically, to see patterns, to ask the right questions, and to engage in deep, stimulating conversations about a wide range of topics."] },
    empathy: { content: ["Empathy is the ability to understand and share the feelings of another. It's about being present, listening deeply, and connecting on a human level. I value those who can put themselves in others' shoes and respond with compassion and kindness."] }
  };

  const profileData = {
    name: "Profile",
    interests: ["Superintelligence", "Space", "Games", "Startups", "Venture Capital", "Travel"],
    values: ["Freedom", "Agency", "Exceptionalism"],
    lookingFor: ["Loyalty", "Intelligence", "Empathy"],
    story: ["Chance"]
  };

  const getInterestIcon = (interest: string) => ({ 'Superintelligence': BrainCircuit, 'Space': Rocket, 'Games': Gamepad2, 'Startups': Lightbulb, 'Venture Capital': Handshake, 'Travel': Plane }[interest] || Star);
  const getValueIcon = (value: string) => ({ 'Freedom': Feather, 'Agency': Feather, 'Exceptionalism': Star }[value] || Heart);
  const getLookingForIcon = (item: string) => ({ 'Loyalty': Heart, 'Intelligence': Brain, 'Ambition': Rocket }[item] || Shield);
  const getStoryIcon = (item: string) => ({ 'Chance': Sparkles }[item] || Shield);

  const handleItemClick = (item: string) => {
    const key = item.toLowerCase() as keyof typeof contentData;
    if (contentData[key]) setModalContent(contentData[key]);
  };

  // 3. This conditional rendering block is removed.
  // The router will handle showing the Form component on the /form route.
  /*
  if (showForm) {
    return <Form onBack={() => setShowForm(false)} />;
  }
  */

  // This return statement is now the only one, it always renders the profile.
  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 text-white">
      <div className="sticky top-6 z-10">
        <button onClick={onBack} className="flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 transition-colors duration-200 group button-shadow hover:button-shadow-hover bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">{profileData.name}</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
        </div>
        <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <div className="space-y-4 text-white/80">
            <p>Born in 2006, I'm a computer engineering student at NTU with a rather unconventional setup. I'm doing my degree while serving as a Digital Specialist in National Service. It's a four-year program where I alternate between studying at university and working on Singapore's digital infrastructure.</p>
            <p>Most of my free time is spent glued to my computer, tinkering with new projects and obsessively checking out the latest LLM models. I get genuinely excited about all things AI - whether it's the latest image generation breakthrough or voice synthesis that sounds eerily human. But what really gets me going is the bigger picture: superintelligence and what that means for humanity.</p>
            <p>I decided to build this site after reading about the "date me docs" phenomenon and the shift back to IRL dating. But instead of a plain Google Doc, I thought: why not build something that actually reflects who I am? Plus, I figured if someone's going to date an engineer, they should know what they're getting into from the start.</p>
            <p>Fair warning: I'm what you might call "romantically inexperienced" (okay fine, ultra virgin), but I'm optimistic about changing that status with the right person who appreciates both my ambition and my complete inability to not talk about AI.</p>
          </div>
        </div>
        <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow">
          <h3 className="text-2xl font-bold mb-4">Interests</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {profileData.interests.map((interest, index) => {
              const IconComponent = getInterestIcon(interest);
              return (
                <div key={index} onClick={() => handleItemClick(interest)} className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                  <IconComponent size={18} className="text-white/70" />
                  <span className="text-white/80" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto' }}>{interest}</span>
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
                <div key={index} onClick={() => handleItemClick(value)} className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                  <IconComponent size={18} className="text-white/70" />
                  <span className="text-white/80" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto' }}>{value}</span>
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
                <div key={index} onClick={() => handleItemClick(item)} className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                  <IconComponent size={18} className="text-white/70" />
                  <span className="text-white/80" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto' }}>{item}</span>
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
                <div key={index} onClick={() => handleItemClick(item)} className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                  <IconComponent size={18} className="text-white/70" />
                  <span className="text-white/80" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto' }}>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center pt-6 pb-12">
          <button onClick={() => navigate('/form')} className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-10 py-5 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <span className="text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
              Date
            </span>
          </button>
        </div>
        <div className="text-center pt-6">
          <p className="text-white/60 text-sm italic">
            Ready to debug life together?
          </p>
        </div>
      </div>
      <ContentModal data={modalContent} onClose={() => setModalContent(null)} />
      <style jsx>{`
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default Profile;