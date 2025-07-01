import React, { useState, useEffect } from 'react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const menuPackages = [
    {
      name: "Paket 1",
      image: "src/assets/paket 1.png"
    },
    {
      name: "Paket 2", 
      image: "src/assets/paket 2.png"
    },
    {
      name: "Paket 3",
      image: "src/assets/paket 3.png"
    }
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-qq-red hover:text-red-700 text-2xl sm:text-3xl font-bold z-10"
        >
          ×
        </button>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-qq-red mb-6 sm:mb-8 pr-8">Menu Paket Lengkap</h3>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {menuPackages.map((pkg, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-gray-100 rounded-xl p-2 sm:p-4 flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name} 
                      className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="text-center mt-3 sm:mt-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-qq-red">{pkg.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-qq-yellow hover:bg-qq-orange text-qq-red p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 text-lg sm:text-xl font-bold"
          >
            ‹
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-qq-yellow hover:bg-qq-orange text-qq-red p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 text-lg sm:text-xl font-bold"
          >
            ›
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-qq-yellow' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-6 sm:mt-8">
          <a 
            href="https://wa.me/6281358382710?text=Halo%20QQ%20Crispy,%20saya%20tertarik%20dengan%20paket%20menu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-qq-red text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block"
          >
            💬 Pesan via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;