import { User, Camera, FileText } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const navigationItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'pics', label: 'Pictures', icon: Camera },
    { id: 'form', label: 'Form', icon: FileText },
  ];

  return (
    <div className="text-center backdrop-blur-lg p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal gradient-text">
            Date Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-mono text-white/90 px-4 drop-shadow-md">
          They say love is blind, but my vision transformer has 12 attention heads just for you.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 px-4">
          {navigationItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-white font-medium transition-all duration-200 ease-out hover:scale-105 text-sm sm:text-base min-w-fit button-shadow hover:button-shadow-hover"
            >
              <Icon size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
              <span className="whitespace-nowrap overflow-visible">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;