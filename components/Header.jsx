'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ContaPlus
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('clientes')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6"
            >
              Consulta Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('clientes')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection('contacto')}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Consulta Gratis
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
