import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';

import deathValley from '../assets/death-valley.jpg';
import grandCanyon from '../assets/grand-canyon.jpg';
import joshuaTree from '../assets/joshua-tree.jpg';
import kingsCanyon from '../assets/kings-canyon.jpg';
import sequoia from '../assets/sequoia.jpg';
import yosemite from '../assets/yosemite.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface PicsProps {
  onBack: () => void;
}

const Pics: React.FC<PicsProps> = ({ onBack }) => {
  const picsData = {
    name: "Pictures",
  };

  const images = [
    { id: 1, src: deathValley, alt: 'Death Valley' },
    { id: 2, src: grandCanyon, alt: 'Grand Canyon' },
    { id: 3, src: joshuaTree, alt: 'Joshua Tree' },
    { id: 4, src: kingsCanyon, alt: 'Kings Canyon' },
    { id: 5, src: sequoia, alt: 'Sequoia' },
    { id: 6, src: yosemite, alt: 'Yosemite' },
  ];

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 text-white">
      <div className="sticky top-6 z-10">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 transition-colors duration-200 group button-shadow hover:button-shadow-hover bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">{picsData.name}</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'custom-bullet-active'
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 60,
                modifier: 1,
                slideShadows: true,
              },
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              coverflowEffect: {
                rotate: 40,
                stretch: 0,
                depth: 80,
                modifier: 1,
                slideShadows: true,
              },
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              },
            },
          }}
          onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
          onSlideChange={(swiper) => console.log('Slide changed to:', swiper.activeIndex)}
          className="gallery-swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative group cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">{image.alt}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="swiper-button-prev-custom bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-colors duration-200 border border-white/20 touch-manipulation">
            <ArrowLeft size={24} className="text-white" />
          </button>
          <button className="swiper-button-next-custom bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-colors duration-200 border border-white/20 touch-manipulation">
            <ArrowLeft size={24} className="text-white rotate-180" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .gallery-swiper {
          padding: 20px 0 20px 0;
          margin-bottom: 60px;
        }
        
        .gallery-swiper .swiper-pagination {
          position: relative;
          bottom: auto;
          margin-top: 30px;
        }
        
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .custom-bullet-active {
          background: rgba(255, 255, 255, 0.9);
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Pics;