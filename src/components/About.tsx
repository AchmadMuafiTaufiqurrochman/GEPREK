import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-qq-red mb-12">Tentang Kami</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="/QQ GEPREK.jpg" 
              alt="QQ Geprek" 
              className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <div className="order-1 md:order-2 text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              Di QQ Crispy, kami menghadirkan ayam crispy dengan beragam varian rasa yang menggugah selera. Mulai dari rasa original yang renyah alami, ayam geprek pedas dengan sambal khas, hingga aneka saus celup seperti Barbeque, Blackpepper, Thai, dan Cheese.
            </p>
            <p>
              Kami juga menyediakan paket komplit dengan minuman segar seperti Ice Tea atau Lemon Tea untuk melengkapi pengalaman makan Anda. Setiap menu disiapkan dengan bahan berkualitas dan cita rasa terbaik — untuk kepuasan Anda di setiap gigitan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;