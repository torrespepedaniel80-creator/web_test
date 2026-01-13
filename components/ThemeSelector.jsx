'use client';
import { useState } from 'react';

export const themes = {
  lightProfessional: {
    name: 'Light Professional',
    mode: 'light',
    colors: {
      // Backgrounds
      bgPrimary: 'bg-white',
      bgSecondary: 'bg-gray-50',
      bgHero: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50',
      bgServices: 'bg-gradient-to-br from-gray-50 to-white',
      bgClients: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50',
      bgContact: 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900',
      bgFooter: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      
      // Text
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textLight: 'text-gray-500',
      textDark: 'text-white',
      
      // Gradients
      primary: 'from-blue-600 to-purple-600',
      primaryHover: 'from-blue-700 to-purple-700',
      accent1: 'from-blue-500 to-cyan-500',
      accent2: 'from-purple-500 to-pink-500',
      accent3: 'from-green-500 to-teal-500',
      accent4: 'from-orange-500 to-red-500',
      accent5: 'from-indigo-500 to-purple-500',
      accent6: 'from-pink-500 to-rose-500',
      
      // Cards
      cardBg: 'bg-white',
      cardBgHover: 'bg-white',
      cardBorder: 'border-gray-100',
      cardShadow: 'shadow-lg',
      
      // Glassmorphism
      glassBg: 'bg-white/60',
      glassBorder: 'border-white/50',
      
      // Header
      headerBg: 'bg-white/80',
      headerText: 'text-gray-700',
      headerTextHover: 'text-blue-600',
      
      scrollbar: 'linear-gradient(to bottom, #2563eb, #9333ea)',
      scrollbarHover: 'linear-gradient(to bottom, #1d4ed8, #7e22ce)',
    },
    font: 'font-sans',
  },
  
  lightModern: {
    name: 'Light Modern',
    mode: 'light',
    colors: {
      bgPrimary: 'bg-slate-50',
      bgSecondary: 'bg-white',
      bgHero: 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50',
      bgServices: 'bg-gradient-to-br from-slate-50 to-blue-50',
      bgClients: 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50',
      bgContact: 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900',
      bgFooter: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
      
      textPrimary: 'text-slate-900',
      textSecondary: 'text-slate-600',
      textLight: 'text-slate-500',
      textDark: 'text-white',
      
      primary: 'from-cyan-500 to-blue-600',
      primaryHover: 'from-cyan-600 to-blue-700',
      accent1: 'from-cyan-400 to-blue-500',
      accent2: 'from-violet-500 to-purple-600',
      accent3: 'from-emerald-500 to-teal-600',
      accent4: 'from-amber-500 to-orange-600',
      accent5: 'from-indigo-500 to-blue-600',
      accent6: 'from-fuchsia-500 to-pink-600',
      
      cardBg: 'bg-white',
      cardBgHover: 'bg-slate-50',
      cardBorder: 'border-slate-200',
      cardShadow: 'shadow-lg',
      
      glassBg: 'bg-white/70',
      glassBorder: 'border-white/60',
      
      headerBg: 'bg-white/90',
      headerText: 'text-slate-700',
      headerTextHover: 'text-cyan-600',
      
      scrollbar: 'linear-gradient(to bottom, #06b6d4, #2563eb)',
      scrollbarHover: 'linear-gradient(to bottom, #0891b2, #1d4ed8)',
    },
    font: 'font-sans',
  },
  
  darkElegant: {
    name: 'Dark Elegant',
    mode: 'dark',
    colors: {
      bgPrimary: 'bg-slate-900',
      bgSecondary: 'bg-slate-800',
      bgHero: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      bgServices: 'bg-gradient-to-br from-slate-900 to-slate-800',
      bgClients: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      bgContact: 'bg-gradient-to-br from-purple-950 via-slate-950 to-black',
      bgFooter: 'bg-gradient-to-br from-black via-slate-950 to-black',
      
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      textLight: 'text-gray-400',
      textDark: 'text-white',
      
      primary: 'from-purple-500 to-pink-500',
      primaryHover: 'from-purple-600 to-pink-600',
      accent1: 'from-purple-400 to-pink-400',
      accent2: 'from-violet-500 to-purple-600',
      accent3: 'from-emerald-500 to-teal-500',
      accent4: 'from-amber-500 to-orange-500',
      accent5: 'from-indigo-500 to-purple-500',
      accent6: 'from-rose-500 to-pink-500',
      
      cardBg: 'bg-slate-800/50',
      cardBgHover: 'bg-slate-700/50',
      cardBorder: 'border-slate-700',
      cardShadow: 'shadow-2xl shadow-purple-500/10',
      
      glassBg: 'bg-slate-800/40',
      glassBorder: 'border-slate-700/50',
      
      headerBg: 'bg-slate-900/80',
      headerText: 'text-gray-300',
      headerTextHover: 'text-purple-400',
      
      scrollbar: 'linear-gradient(to bottom, #a855f7, #ec4899)',
      scrollbarHover: 'linear-gradient(to bottom, #9333ea, #db2777)',
    },
    font: 'font-sans',
  },
  
  darkCorporate: {
    name: 'Dark Corporate',
    mode: 'dark',
    colors: {
      bgPrimary: 'bg-gray-900',
      bgSecondary: 'bg-gray-800',
      bgHero: 'bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900',
      bgServices: 'bg-gradient-to-br from-gray-900 to-gray-800',
      bgClients: 'bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900',
      bgContact: 'bg-gradient-to-br from-blue-950 via-gray-950 to-black',
      bgFooter: 'bg-gradient-to-br from-black via-gray-950 to-black',
      
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      textLight: 'text-gray-400',
      textDark: 'text-white',
      
      primary: 'from-blue-500 to-cyan-500',
      primaryHover: 'from-blue-600 to-cyan-600',
      accent1: 'from-blue-400 to-cyan-400',
      accent2: 'from-indigo-500 to-blue-600',
      accent3: 'from-teal-500 to-cyan-500',
      accent4: 'from-orange-500 to-amber-500',
      accent5: 'from-violet-500 to-indigo-500',
      accent6: 'from-sky-500 to-blue-500',
      
      cardBg: 'bg-gray-800/50',
      cardBgHover: 'bg-gray-700/50',
      cardBorder: 'border-gray-700',
      cardShadow: 'shadow-2xl shadow-blue-500/10',
      
      glassBg: 'bg-gray-800/40',
      glassBorder: 'border-gray-700/50',
      
      headerBg: 'bg-gray-900/80',
      headerText: 'text-gray-300',
      headerTextHover: 'text-blue-400',
      
      scrollbar: 'linear-gradient(to bottom, #3b82f6, #06b6d4)',
      scrollbarHover: 'linear-gradient(to bottom, #2563eb, #0891b2)',
    },
    font: 'font-sans',
  },
};

export default function ThemeSelector({ currentTheme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-24 right-6 z-50">
      <div className="relative">
        {/* Theme Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${themes[currentTheme].colors.cardBg} backdrop-blur-lg shadow-lg rounded-full p-4 hover:shadow-xl transition-all hover:scale-110 ${themes[currentTheme].colors.cardBorder} border`}
          title="Cambiar Tema"
        >
          <svg
            className={`w-6 h-6 ${themes[currentTheme].colors.textPrimary}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </button>

        {/* Theme Selector Dropdown */}
        {isOpen && (
          <div className={`absolute top-16 right-0 ${themes[currentTheme].colors.cardBg} backdrop-blur-lg rounded-2xl shadow-2xl ${themes[currentTheme].colors.cardBorder} border p-6 w-80 animate-fadeIn`}>
            <div className="mb-4">
              <h3 className={`text-lg font-bold ${themes[currentTheme].colors.textPrimary} mb-1`}>
                Selector de Tema
              </h3>
              <p className={`text-sm ${themes[currentTheme].colors.textSecondary}`}>
                2 Modos Light + 2 Modos Dark
              </p>
            </div>

            <div className="space-y-3">
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => {
                    onThemeChange(key);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all hover:scale-105 border-2 ${
                    currentTheme === key
                      ? `border-blue-500 ${theme.colors.cardShadow}`
                      : `${theme.colors.cardBorder} hover:border-gray-300`
                  } ${theme.colors.cardBg}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className={`font-semibold ${theme.colors.textPrimary}`}>
                        {theme.name}
                      </span>
                      <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                        theme.mode === 'dark' 
                          ? 'bg-slate-700 text-white' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {theme.mode === 'dark' ? '🌙 Dark' : '☀️ Light'}
                      </span>
                    </div>
                    {currentTheme === key && (
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Color Preview */}
                  <div className="flex space-x-1 mb-2">
                    <div className={`h-6 w-6 rounded-full bg-gradient-to-r ${theme.colors.primary}`}></div>
                    <div className={`h-6 w-6 rounded-full bg-gradient-to-r ${theme.colors.accent1}`}></div>
                    <div className={`h-6 w-6 rounded-full bg-gradient-to-r ${theme.colors.accent2}`}></div>
                    <div className={`h-6 w-6 rounded-full bg-gradient-to-r ${theme.colors.accent3}`}></div>
                    <div className={`h-6 w-6 rounded-full bg-gradient-to-r ${theme.colors.accent4}`}></div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className={`mt-4 w-full py-2 ${themes[currentTheme].colors.bgSecondary} hover:${themes[currentTheme].colors.cardBgHover} rounded-lg ${themes[currentTheme].colors.textPrimary} font-medium transition-colors`}
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
