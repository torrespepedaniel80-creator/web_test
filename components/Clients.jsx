'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeContext';

export default function Clients() {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      position: 'CEO, TechStart Solutions',
      image: '👩‍💼',
      text: 'ContaPlus ha transformado completamente nuestra gestión financiera. Su profesionalismo y atención al detalle son excepcionales. Recomendados al 100%.',
      rating: 5,
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director Financiero, Innovate Corp',
      image: '👨‍💼',
      text: 'Excelente servicio de auditoría. El equipo es muy profesional y siempre están disponibles para resolver nuestras dudas. Han sido clave en nuestro crecimiento.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      position: 'Gerente, Retail Plus',
      image: '👩‍💻',
      text: 'La asesoría fiscal que recibimos nos ha permitido optimizar nuestros recursos y cumplir con todas las obligaciones sin complicaciones. Muy satisfechos.',
      rating: 5,
    },
    {
      name: 'Roberto Silva',
      position: 'Fundador, StartUp Ventures',
      image: '👨‍🔧',
      text: 'Desde que trabajamos con ContaPlus, nuestras finanzas están en orden. Su sistema digital facilita todo el proceso. Altamente recomendados.',
      rating: 5,
    },
  ];

  const clients = [
    { name: 'TechStart', logo: '🚀' },
    { name: 'Innovate', logo: '💡' },
    { name: 'RetailPlus', logo: '🛍️' },
    { name: 'StartUp', logo: '⭐' },
    { name: 'FinanceHub', logo: '💼' },
    { name: 'GlobalTrade', logo: '🌍' },
    { name: 'SmartBiz', logo: '📊' },
    { name: 'ProServices', logo: '🎯' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clientes" className={`py-24 ${theme.colors.bgClients} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className={`bg-gradient-to-r ${theme.colors.primary} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
              Testimonios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className={theme.colors.textPrimary}>Lo que dicen</span>
            <br />
            <span className={`bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>
              Nuestros Clientes
            </span>
          </h2>
          <p className={`text-xl ${theme.colors.textSecondary} max-w-2xl mx-auto`}>
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className={`${theme.colors.glassBg} backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border ${theme.colors.glassBorder}`}>
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className={`text-xl md:text-2xl ${theme.colors.textPrimary} text-center mb-8 leading-relaxed italic`}>
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${theme.colors.primary} rounded-full flex items-center justify-center text-3xl shadow-lg`}>
                          {testimonial.image}
                        </div>
                        <div className="text-left">
                          <h4 className={`font-bold ${theme.colors.textPrimary} text-lg`}>
                            {testimonial.name}
                          </h4>
                          <p className={`${theme.colors.textSecondary} text-sm`}>{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 ${theme.colors.cardBg} rounded-full shadow-lg flex items-center justify-center hover:${theme.colors.cardBgHover} transition-all hover:scale-110`}
            >
              <svg
                className={`w-6 h-6 ${theme.colors.textPrimary}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 ${theme.colors.cardBg} rounded-full shadow-lg flex items-center justify-center hover:${theme.colors.cardBgHover} transition-all hover:scale-110`}
            >
              <svg
                className={`w-6 h-6 ${theme.colors.textPrimary}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? `bg-gradient-to-r ${theme.colors.primary} w-8`
                      : `${theme.colors.bgSecondary} hover:bg-gray-400`
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Clients Logo Grid */}
        <div className="mt-20">
          <h3 className={`text-2xl font-bold text-center mb-12 ${theme.colors.textPrimary}`}>
            Empresas que confían en nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`${theme.colors.glassBg} backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all hover:-translate-y-2 border ${theme.colors.glassBorder} group`}
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {client.logo}
                </div>
                <p className={`${theme.colors.textPrimary} font-semibold`}>{client.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className={`${theme.colors.glassBg} backdrop-blur-lg rounded-2xl p-8 text-center border ${theme.colors.glassBorder} hover:shadow-xl transition-all`}>
            <div className={`text-4xl font-bold bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent mb-2`}>
              500+
            </div>
            <p className={theme.colors.textSecondary}>Clientes Satisfechos</p>
          </div>
          <div className={`${theme.colors.glassBg} backdrop-blur-lg rounded-2xl p-8 text-center border ${theme.colors.glassBorder} hover:shadow-xl transition-all`}>
            <div className={`text-4xl font-bold bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent mb-2`}>
              15+
            </div>
            <p className={theme.colors.textSecondary}>Años de Experiencia</p>
          </div>
          <div className={`${theme.colors.glassBg} backdrop-blur-lg rounded-2xl p-8 text-center border ${theme.colors.glassBorder} hover:shadow-xl transition-all`}>
            <div className={`text-4xl font-bold bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent mb-2`}>
              98%
            </div>
            <p className={theme.colors.textSecondary}>Tasa de Satisfacción</p>
          </div>
          <div className={`${theme.colors.glassBg} backdrop-blur-lg rounded-2xl p-8 text-center border ${theme.colors.glassBorder} hover:shadow-xl transition-all`}>
            <div className={`text-4xl font-bold bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent mb-2`}>
              24/7
            </div>
            <p className={theme.colors.textSecondary}>Soporte Disponible</p>
          </div>
        </div>
      </div>
    </section>
  );
}
