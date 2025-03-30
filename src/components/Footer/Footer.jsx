import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';  

const Footer = () => {
  return (
    <footer className="bg-[#BE5985] shadow-lg py-6">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
        {/* Redes Sociales */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">Síguenos en:</h3>
          <ul className="space-x-6 flex justify-center items-center">
            <li className="flex items-center">
              <a
                href="https://www.instagram.com/mayorista_catita/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-125 transform duration-300"
              >
                <FaInstagram className="text-3xl text-white hover:text-[#FFEDFA] transition-all duration-300" />
              </a>
              <span className="ml-2 text-white"> @mayorista_catita</span>
            </li>
            <li className="flex items-center">
              <a
                href="https://wa.me/56996189098"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-125 transform duration-300"
              >
                <FaWhatsapp className="text-3xl text-white hover:text-[#FFEDFA] transition-all duration-300" />
              </a>
              <span className="ml-2 text-white"> +56 9 9618 9098</span>
            </li>
          </ul>
        </div>

        {/* Derechos de Autor */}
        <div>
          <p className="text-sm text-white">&copy; 2025 Mayorista Catita. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
