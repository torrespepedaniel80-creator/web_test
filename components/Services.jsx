'use client';
import { useTheme } from '@/components/ThemeContext';

export default function Services() {
  const { theme } = useTheme();
  
  // Detectar si Services tiene fondo oscuro o claro
  const isDarkBg = theme.colors.bgServices.includes('800') || 
                   theme.colors.bgServices.includes('900') ||
                   theme.colors.bgServices.includes('950');
  
  const isLightBg = theme.colors.bgServices.includes('50') ||
                    theme.colors.bgServices.includes('100');
  
  // Ajustar colores de texto según el fondo
  // Si es fondo oscuro (800/900/950) -> texto claro
  // Si es fondo claro (50/100) -> texto oscuro
  const textPrimary = isDarkBg ? 'text-white' : (isLightBg ? 'text-gray-900' : theme.colors.textPrimary);
  const textSecondary = isDarkBg ? 'text-gray-300' : (isLightBg ? 'text-gray-600' : theme.colors.textSecondary);
  const cardBg = isDarkBg ? 'bg-white/10' : (isLightBg ? 'bg-white' : theme.colors.cardBg);
  const cardBorder = isDarkBg ? 'border-white/20' : (isLightBg ? 'border-gray-200' : theme.colors.cardBorder);
  const badgeText = 'text-white'; // Siempre blanco porque el badge tiene fondo de gradiente oscuro
  
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Contabilidad General',
      description: 'Registro y control completo de todas tus operaciones financieras con precisión y cumplimiento normativo.',
      features: ['Estados Financieros', 'Libros Contables', 'Conciliaciones Bancarias'],
      color: 'accent1',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Auditoría',
      description: 'Evaluación independiente y objetiva de tus estados financieros para garantizar transparencia y confianza.',
      features: ['Auditoría Externa', 'Auditoría Interna', 'Due Diligence'],
      color: 'accent2',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Asesoría Fiscal',
      description: 'Optimización tributaria y cumplimiento fiscal para maximizar tus beneficios y minimizar riesgos.',
      features: ['Planificación Fiscal', 'Declaraciones', 'Defensa Tributaria'],
      color: 'accent3',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Gestión de Nóminas',
      description: 'Administración completa de nóminas, seguridad social y obligaciones laborales de tu empresa.',
      features: ['Cálculo de Nóminas', 'Seguridad Social', 'Contratos Laborales'],
      color: 'accent4',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Consultoría Empresarial',
      description: 'Asesoramiento estratégico para la toma de decisiones y el crecimiento sostenible de tu negocio.',
      features: ['Análisis Financiero', 'Planes de Negocio', 'Valoración de Empresas'],
      color: 'accent5',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Servicios Digitales',
      description: 'Implementación de soluciones tecnológicas para automatizar y optimizar tus procesos contables.',
      features: ['Facturación Electrónica', 'Software Contable', 'Reportes en Tiempo Real'],
      color: 'accent6',
    },
  ];

  return (
    <section id="servicios" className={`py-24 ${theme.colors.bgServices}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className={`bg-gradient-to-r ${theme.colors.primary} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>
              Soluciones Integrales
            </span>
            <br />
            <span className={textPrimary}>para tu Empresa</span>
          </h2>
          <p className={`text-xl ${textSecondary} max-w-2xl mx-auto`}>
            Ofrecemos una amplia gama de servicios contables y financieros diseñados para impulsar el éxito de tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${cardBg} rounded-2xl p-8 ${theme.colors.cardShadow} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${cardBorder} animate-fadeInUp backdrop-blur-lg`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${theme.colors[service.color]} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-3 ${textPrimary} group-hover:bg-gradient-to-r group-hover:${theme.colors.primary} group-hover:bg-clip-text group-hover:text-transparent transition-colors`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`${textSecondary} mb-6 leading-relaxed`}>{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center text-sm ${textSecondary}`}>
                    <svg
                      className={`w-5 h-5 mr-2 flex-shrink-0 ${isLightBg ? 'text-green-600' : 'text-emerald-400'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${theme.colors[service.color]} text-white hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                Más Información
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className={`${textSecondary} mb-4`}>¿No encuentras lo que buscas?</p>
          <button className={`bg-gradient-to-r ${theme.colors.primary} hover:${theme.colors.primaryHover} text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105`}>
            Consulta Personalizada
          </button>
        </div>
      </div>
    </section>
  );
}
