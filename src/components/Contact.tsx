import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-qq-red to-red-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Kontak & Lokasi</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-qq-yellow">Hubungi Kami</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white bg-opacity-10 p-4 rounded-xl hover:bg-opacity-20 transition-all duration-300 max-w-md mx-auto">
                <span className="text-2xl flex-shrink-0 mt-1">📱</span>
                <span className="text-lg text-left">WhatsApp: 0813-5838-2710</span>
              </div>
              <div className="flex items-start gap-4 bg-white bg-opacity-10 p-4 rounded-xl hover:bg-opacity-20 transition-all duration-300 max-w-md mx-auto">
                <span className="text-2xl flex-shrink-0 mt-1">📍</span>
                <span className="text-lg text-left">Jl. Raya Pagerwojo No.17, Entalsewu, Buduran, Sidoarjo, Jawa Timur</span>
              </div>
              <div className="flex items-start gap-4 bg-white bg-opacity-10 p-4 rounded-xl hover:bg-opacity-20 transition-all duration-300 max-w-md mx-auto">
                <span className="text-2xl flex-shrink-0 mt-1">🛒</span>
                <span className="text-lg text-left">Tersedia di GrabFood & ShopeeFood</span>
              </div>
              <a 
                href="https://wa.me/6281358382710?text=Halo%20QQ%20Crispy,%20saya%20ingin%20memesan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg mt-6"
              >
                💬 Chat WhatsApp
              </a>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-center mb-8 text-qq-yellow">Lokasi Kami</h3>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15825.039047452925!2d112.7006747!3d-7.4364831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1f991c77bef%3A0xe5e7b99bc36384dd!2sQQ%20Crispy!5e0!3m2!1sen!2sid!4v1750678229140!5m2!1sen!2sid" 
                width="100%" 
                height="400" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="QQ Crispy Location"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-white mb-4">Kunjungi langsung lokasi kami atau pesan via:</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="https://r.grab.com/g/6-20250623_193811_26eba49aff2643c8836ab83b133fb28f_MEXMPS-6-C6XTG6JCG3XXLT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  GrabFood
                </a>
                <a 
                  href="https://shopee.co.id/universal-link/now-food/shop/21827976?deep_and_deferred=1&shareChannel=copy_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  ShopeeFood
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;