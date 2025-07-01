import React, { useState } from 'react';
import MenuModal from './MenuModal';

const Menu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    {
      name: "QQ Original Sayap",
      price: "Rp. 10.000",
      image: "/originalsayap.jpg"
    },
    {
      name: "QQ Geprek Paha Bawah",
      price: "Rp. 11.000",
      image: "/geprekpahabawah.jpg"
    },
    {
      name: "QQ Crispy Cheese",
      price: "Rp. 14.000",
      image: "/crispycheese.jpg"
    }
  ];

  return (
    <>
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-qq-red mb-12">Menu Andalan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-qq-yellow">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-qq-red mb-4">{item.name}</h3>
                <div className="text-2xl font-bold text-gray-900">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-qq-yellow to-qq-orange text-qq-red px-8 py-4 rounded-full font-semibold text-lg hover:from-qq-orange hover:to-qq-yellow transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              📋 Menu Lainnya
            </button>
          </div>
        </div>
      </section>

      <MenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Menu;