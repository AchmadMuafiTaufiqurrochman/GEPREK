import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-qq-yellow to-qq-orange min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-qq-red mb-6 animate-pulse">
          Gurihnya Pas, Rasanya Juara
        </h2>
        <p className="text-xl md:text-2xl text-qq-red mb-8 font-medium">
          Ayam crispy terbaik dengan beragam varian rasa yang menggugah selera
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-qq-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Lihat Menu
          </button>
          <a 
            href="https://wa.me/6281358382710" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-qq-red px-8 py-4 rounded-full font-semibold text-lg border-2 border-qq-red hover:bg-qq-red hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;