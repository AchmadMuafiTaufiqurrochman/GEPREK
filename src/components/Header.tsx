import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`bg-gradient-to-r from-qq-yellow to-qq-orange fixed w-full top-0 z-50 shadow-lg ${isScrolled ? 'bg-opacity-95' : ''}`}>
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <img 
              src="src/assets/LOGO QQ CRISPY.jpg" 
              alt="QQ Crispy Logo" 
              className="w-12 h-12 object-cover rounded-full"
            />
            <h1 className="text-2xl font-bold text-qq-red">QQ Crispy</h1>
          </div>
          <ul className="hidden md:flex gap-8">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="text-qq-red font-medium hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-full transition-all duration-300"
              >
                Beranda
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-qq-red font-medium hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-full transition-all duration-300"
              >
                Tentang
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-qq-red font-medium hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-full transition-all duration-300"
              >
                Menu
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-qq-red font-medium hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-full transition-all duration-300"
              >
                Kontak
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;