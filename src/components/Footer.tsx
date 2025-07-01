import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold">QQ Crispy</span>
          </div>
          <p className="text-gray-400">&copy; 2025 QQ Crispy. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;