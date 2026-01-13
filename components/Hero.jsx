'use client';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeContext';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Hero() {
  const { theme } = useTheme();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${theme.colors.bgHero}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="inline-block">
              <span className={`bg-gradient-to-r ${theme.colors.primary} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                ✨ Servicios Contables Profesionales
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className={`bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>
                Impulsa tu Negocio
              </span>
              <br />
              <span className={theme.colors.textPrimary}>con Contabilidad Experta</span>
            </h1>

            <p className={`text-xl ${theme.colors.textSecondary} leading-relaxed`}>
              Optimiza tus finanzas con nuestros servicios de contabilidad, auditoría y asesoría fiscal. 
              Más de 15 años de experiencia respaldando el éxito de empresas como la tuya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contacto')}
                className={`bg-gradient-to-r ${theme.colors.primary} hover:${theme.colors.primaryHover} text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105`}
              >
                Consulta Gratuita
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>
              <Button
                onClick={() => scrollToSection('servicios')}
                variant="outline"
                className={`border-2 ${theme.colors.cardBorder} hover:border-blue-600 px-8 py-6 text-lg rounded-xl ${theme.colors.cardBgHover} transition-all ${theme.colors.textPrimary}`}
              >
                Ver Servicios
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className={`text-sm ${theme.colors.textSecondary} mt-1`}>Clientes</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className={`text-sm ${theme.colors.textSecondary} mt-1`}>Años</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <div className={`text-sm ${theme.colors.textSecondary} mt-1`}>Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-slideInRight">
            <div className="relative">
              {/* Glassmorphism Card */}
              <div className={`${theme.colors.glassBg} backdrop-blur-lg rounded-3xl p-8 shadow-2xl border ${theme.colors.glassBorder}`}>
                <div className="space-y-6">
                  {/* Feature Cards */}
                  <div className={`bg-gradient-to-br ${theme.colors.accent1} rounded-2xl p-6 text-white transform hover:scale-105 transition-transform`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">Contabilidad Precisa</h3>
                        <p className="text-sm opacity-90">100% Confiable</p>
                      </div>
                    </div>
                  </div>

                  <div className={`bg-gradient-to-br ${theme.colors.accent2} rounded-2xl p-6 text-white transform hover:scale-105 transition-transform`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">Respuesta Rápida</h3>
                        <p className="text-sm opacity-90">24/7 Disponible</p>
                      </div>
                    </div>
                  </div>

                  <div className={`bg-gradient-to-br ${theme.colors.accent3} rounded-2xl p-6 text-white transform hover:scale-105 transition-transform`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">Ahorro Garantizado</h3>
                        <p className="text-sm opacity-90">Optimiza Costos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 animate-bounce-slow shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl -rotate-12 animate-bounce-slow animation-delay-1000 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className={`w-6 h-6 ${theme.colors.textLight}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
