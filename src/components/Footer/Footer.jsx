import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';  

const Footer = () => {
  return (
    <footer className="bg-rose-50 text-rose-900 py-6">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
        {/* Redes Sociales */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-rose-700 mb-2">Síguenos</h3>
          <ul className="space-x-6">
            <li className="inline">
              <a href="https://www.instagram.com/mayorista_catita/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500">
                <FaInstagram className="inline-block text-3xl text-rose-700 hover:text-rose-500" />
              </a>
              <span className="ml-2 text-rose-700">@mayorista_catita</span>
            </li>
            <li className="inline">
              <a href="https://wa.me/56996189098" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500">
                <FaWhatsapp className="inline-block text-3xl text-rose-700 hover:text-rose-500" />
              </a>
              <span className="ml-2 text-rose-700">+56 9 9618 9098</span>
            </li>
          </ul>
        </div>

        {/* Derechos de Autor */}
        <div>
          <p className="text-sm text-rose-600">&copy; 2025 Mayorista Catita. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
