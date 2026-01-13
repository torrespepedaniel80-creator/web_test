'use client';
import { useState } from 'react';

export const themes = {
  // ========== LIGHT THEMES ==========
  lightProfessional: {
    name: 'Light Professional',
    mode: 'light',
    colors: {
      bgPrimary: 'bg-white',
      bgSecondary: 'bg-gray-50',
      // Patrón intercalado: claro -> oscuro -> claro -> oscuro
      bgHero: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50', // CLARO
      bgServices: 'bg-gradient-to-br from-gray-800 via-blue-900 to-purple-900', // OSCURO
      bgClients: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50', // CLARO
      bgContact: 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900', // OSCURO
      bgFooter: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textLight: 'text-gray-500',
      textDark: 'text-white',
      
      primary: 'from-blue-600 to-purple-600',
      primaryHover: 'from-blue-700 to-purple-700',
      accent1: 'from-blue-500 to-cyan-500',
      accent2: 'from-purple-500 to-pink-500',
      accent3: 'from-green-500 to-teal-500',
      accent4: 'from-orange-500 to-red-500',
      accent5: 'from-indigo-500 to-purple-500',
      accent6: 'from-pink-500 to-rose-500',
      
      cardBg: 'bg-white',
      cardBgHover: 'bg-white',
      cardBorder: 'border-gray-100',
      cardShadow: 'shadow-lg',
      
      glassBg: 'bg-white/60',
      glassBorder: 'border-white/50',
      
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
      bgServices: 'bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900', // OSCURO
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
  
  lightNature: {
    name: 'Light Nature',
    mode: 'light',
    colors: {
      bgPrimary: 'bg-emerald-50',
      bgSecondary: 'bg-white',
      bgHero: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
      bgServices: 'bg-gradient-to-br from-green-800 via-emerald-900 to-teal-900', // OSCURO
      bgClients: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
      bgContact: 'bg-gradient-to-br from-green-950 via-emerald-950 to-teal-950',
      bgFooter: 'bg-gradient-to-br from-green-900 via-emerald-900 to-green-900',
      
      textPrimary: 'text-green-950',
      textSecondary: 'text-green-700',
      textLight: 'text-green-600',
      textDark: 'text-white',
      
      primary: 'from-green-600 to-emerald-600',
      primaryHover: 'from-green-700 to-emerald-700',
      accent1: 'from-lime-500 to-green-600',
      accent2: 'from-teal-500 to-cyan-600',
      accent3: 'from-emerald-500 to-teal-500',
      accent4: 'from-yellow-500 to-amber-600',
      accent5: 'from-green-500 to-lime-600',
      accent6: 'from-cyan-500 to-teal-600',
      
      cardBg: 'bg-white',
      cardBgHover: 'bg-emerald-50',
      cardBorder: 'border-green-200',
      cardShadow: 'shadow-lg',
      
      glassBg: 'bg-white/70',
      glassBorder: 'border-emerald-200/50',
      
      headerBg: 'bg-white/90',
      headerText: 'text-green-800',
      headerTextHover: 'text-green-600',
      
      scrollbar: 'linear-gradient(to bottom, #16a34a, #059669)',
      scrollbarHover: 'linear-gradient(to bottom, #15803d, #047857)',
    },
    font: 'font-sans',
  },
  
  lightWarm: {
    name: 'Light Warm',
    mode: 'light',
    colors: {
      bgPrimary: 'bg-orange-50',
      bgSecondary: 'bg-white',
      bgHero: 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50',
      bgServices: 'bg-gradient-to-br from-orange-800 via-red-900 to-rose-900', // OSCURO
      bgClients: 'bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50',
      bgContact: 'bg-gradient-to-br from-orange-950 via-red-950 to-rose-950',
      bgFooter: 'bg-gradient-to-br from-orange-900 via-red-900 to-orange-900',
      
      textPrimary: 'text-orange-950',
      textSecondary: 'text-orange-700',
      textLight: 'text-orange-600',
      textDark: 'text-white',
      
      primary: 'from-orange-600 to-red-600',
      primaryHover: 'from-orange-700 to-red-700',
      accent1: 'from-amber-500 to-orange-600',
      accent2: 'from-rose-500 to-pink-600',
      accent3: 'from-yellow-500 to-amber-600',
      accent4: 'from-red-500 to-rose-600',
      accent5: 'from-orange-500 to-amber-600',
      accent6: 'from-pink-500 to-rose-600',
      
      cardBg: 'bg-white',
      cardBgHover: 'bg-orange-50',
      cardBorder: 'border-orange-200',
      cardShadow: 'shadow-lg',
      
      glassBg: 'bg-white/70',
      glassBorder: 'border-orange-200/50',
      
      headerBg: 'bg-white/90',
      headerText: 'text-orange-800',
      headerTextHover: 'text-orange-600',
      
      scrollbar: 'linear-gradient(to bottom, #ea580c, #dc2626)',
      scrollbarHover: 'linear-gradient(to bottom, #c2410c, #b91c1c)',
    },
    font: 'font-sans',
  },
  
  lightRoyal: {
    name: 'Light Royal',
    mode: 'light',
    colors: {
      bgPrimary: 'bg-indigo-50',
      bgSecondary: 'bg-white',
      bgHero: 'bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50',
      bgServices: 'bg-gradient-to-br from-indigo-800 via-violet-900 to-purple-900', // OSCURO
      bgClients: 'bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50',
      bgContact: 'bg-gradient-to-br from-indigo-950 via-violet-950 to-purple-950',
      bgFooter: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900',
      
      textPrimary: 'text-indigo-950',
      textSecondary: 'text-indigo-700',
      textLight: 'text-indigo-600',
      textDark: 'text-white',
      
      primary: 'from-indigo-600 to-violet-600',
      primaryHover: 'from-indigo-700 to-violet-700',
      accent1: 'from-blue-500 to-indigo-600',
      accent2: 'from-violet-500 to-purple-600',
      accent3: 'from-purple-500 to-fuchsia-600',
      accent4: 'from-fuchsia-500 to-pink-600',
      accent5: 'from-indigo-500 to-purple-600',
      accent6: 'from-violet-500 to-fuchsia-600',
      
      cardBg: 'bg-white',
      cardBgHover: 'bg-indigo-50',
      cardBorder: 'border-indigo-200',
      cardShadow: 'shadow-lg',
      
      glassBg: 'bg-white/70',
      glassBorder: 'border-indigo-200/50',
      
      headerBg: 'bg-white/90',
      headerText: 'text-indigo-800',
      headerTextHover: 'text-indigo-600',
      
      scrollbar: 'linear-gradient(to bottom, #4f46e5, #7c3aed)',
      scrollbarHover: 'linear-gradient(to bottom, #4338ca, #6d28d9)',
    },
    font: 'font-sans',
  },
  
  // ========== DARK THEMES ==========
  darkElegant: {
    name: 'Dark Elegant',
    mode: 'dark',
    colors: {
      bgPrimary: 'bg-slate-900',
      bgSecondary: 'bg-slate-800',
      bgHero: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      bgServices: 'bg-gradient-to-br from-slate-100 via-purple-100 to-slate-100', // CLARO
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
      bgServices: 'bg-gradient-to-br from-gray-100 via-blue-100 to-gray-100', // CLARO
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
  
  darkForest: {
    name: 'Dark Forest',
    mode: 'dark',
    colors: {
      bgPrimary: 'bg-green-950',
      bgSecondary: 'bg-green-900',
      bgHero: 'bg-gradient-to-br from-green-950 via-emerald-950 to-teal-950',
      bgServices: 'bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100', // CLARO
      bgClients: 'bg-gradient-to-br from-green-950 via-emerald-950 to-green-950',
      bgContact: 'bg-gradient-to-br from-emerald-950 via-green-950 to-black',
      bgFooter: 'bg-gradient-to-br from-black via-green-950 to-black',
      
      textPrimary: 'text-emerald-50',
      textSecondary: 'text-emerald-200',
      textLight: 'text-emerald-300',
      textDark: 'text-white',
      
      primary: 'from-emerald-500 to-teal-500',
      primaryHover: 'from-emerald-600 to-teal-600',
      accent1: 'from-green-400 to-emerald-500',
      accent2: 'from-teal-500 to-cyan-500',
      accent3: 'from-lime-500 to-green-500',
      accent4: 'from-cyan-500 to-blue-500',
      accent5: 'from-emerald-500 to-green-600',
      accent6: 'from-teal-500 to-emerald-600',
      
      cardBg: 'bg-green-900/50',
      cardBgHover: 'bg-green-800/50',
      cardBorder: 'border-green-800',
      cardShadow: 'shadow-2xl shadow-emerald-500/10',
      
      glassBg: 'bg-green-900/40',
      glassBorder: 'border-green-800/50',
      
      headerBg: 'bg-green-950/80',
      headerText: 'text-emerald-200',
      headerTextHover: 'text-emerald-400',
      
      scrollbar: 'linear-gradient(to bottom, #10b981, #14b8a6)',
      scrollbarHover: 'linear-gradient(to bottom, #059669, #0d9488)',
    },
    font: 'font-sans',
  },
  
  darkSunset: {
    name: 'Dark Sunset',
    mode: 'dark',
    colors: {
      bgPrimary: 'bg-orange-950',
      bgSecondary: 'bg-red-950',
      bgHero: 'bg-gradient-to-br from-orange-950 via-red-950 to-rose-950',
      bgServices: 'bg-gradient-to-br from-orange-100 via-red-100 to-rose-100', // CLARO
      bgClients: 'bg-gradient-to-br from-orange-950 via-rose-950 to-pink-950',
      bgContact: 'bg-gradient-to-br from-red-950 via-orange-950 to-black',
      bgFooter: 'bg-gradient-to-br from-black via-red-950 to-black',
      
      textPrimary: 'text-orange-50',
      textSecondary: 'text-orange-200',
      textLight: 'text-orange-300',
      textDark: 'text-white',
      
      primary: 'from-orange-500 to-red-500',
      primaryHover: 'from-orange-600 to-red-600',
      accent1: 'from-amber-400 to-orange-500',
      accent2: 'from-rose-500 to-pink-500',
      accent3: 'from-yellow-500 to-orange-500',
      accent4: 'from-red-500 to-rose-500',
      accent5: 'from-orange-500 to-rose-600',
      accent6: 'from-pink-500 to-fuchsia-500',
      
      cardBg: 'bg-red-950/50',
      cardBgHover: 'bg-red-900/50',
      cardBorder: 'border-red-900',
      cardShadow: 'shadow-2xl shadow-orange-500/10',
      
      glassBg: 'bg-red-950/40',
      glassBorder: 'border-red-900/50',
      
      headerBg: 'bg-orange-950/80',
      headerText: 'text-orange-200',
      headerTextHover: 'text-orange-400',
      
      scrollbar: 'linear-gradient(to bottom, #f97316, #ef4444)',
      scrollbarHover: 'linear-gradient(to bottom, #ea580c, #dc2626)',
    },
    font: 'font-sans',
  },
  
  darkMidnight: {
    name: 'Dark Midnight',
    mode: 'dark',
    colors: {
      bgPrimary: 'bg-indigo-950',
      bgSecondary: 'bg-blue-950',
      bgHero: 'bg-gradient-to-br from-indigo-950 via-blue-950 to-violet-950',
      bgServices: 'bg-gradient-to-br from-indigo-100 via-violet-100 to-purple-100', // CLARO
      bgClients: 'bg-gradient-to-br from-indigo-950 via-violet-950 to-purple-950',
      bgContact: 'bg-gradient-to-br from-violet-950 via-indigo-950 to-black',
      bgFooter: 'bg-gradient-to-br from-black via-indigo-950 to-black',
      
      textPrimary: 'text-indigo-50',
      textSecondary: 'text-indigo-200',
      textLight: 'text-indigo-300',
      textDark: 'text-white',
      
      primary: 'from-indigo-500 to-violet-500',
      primaryHover: 'from-indigo-600 to-violet-600',
      accent1: 'from-blue-400 to-indigo-500',
      accent2: 'from-violet-500 to-purple-500',
      accent3: 'from-purple-500 to-fuchsia-500',
      accent4: 'from-cyan-500 to-blue-500',
      accent5: 'from-indigo-500 to-purple-600',
      accent6: 'from-fuchsia-500 to-pink-500',
      
      cardBg: 'bg-indigo-950/50',
      cardBgHover: 'bg-indigo-900/50',
      cardBorder: 'border-indigo-900',
      cardShadow: 'shadow-2xl shadow-indigo-500/10',
      
      glassBg: 'bg-indigo-950/40',
      glassBorder: 'border-indigo-900/50',
      
      headerBg: 'bg-indigo-950/80',
      headerText: 'text-indigo-200',
      headerTextHover: 'text-indigo-400',
      
      scrollbar: 'linear-gradient(to bottom, #6366f1, #8b5cf6)',
      scrollbarHover: 'linear-gradient(to bottom, #4f46e5, #7c3aed)',
    },
    font: 'font-sans',
  },
};

export default function ThemeSelector({ currentTheme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);

  // Separate themes by mode
  const lightThemes = Object.entries(themes).filter(([_, theme]) => theme.mode === 'light');
  const darkThemes = Object.entries(themes).filter(([_, theme]) => theme.mode === 'dark');

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
          <div className={`absolute top-16 right-0 ${themes[currentTheme].colors.cardBg} backdrop-blur-lg rounded-2xl shadow-2xl ${themes[currentTheme].colors.cardBorder} border p-6 w-96 max-h-[80vh] overflow-y-auto animate-fadeIn`}>
            <div className="mb-6">
              <h3 className={`text-lg font-bold ${themes[currentTheme].colors.textPrimary} mb-1`}>
                Selector de Tema
              </h3>
              <p className={`text-sm ${themes[currentTheme].colors.textSecondary}`}>
                5 Modos Light + 5 Modos Dark
              </p>
            </div>

            {/* Light Themes */}
            <div className="mb-6">
              <h4 className={`text-sm font-semibold ${themes[currentTheme].colors.textSecondary} mb-3 flex items-center`}>
                <span className="mr-2">☀️</span> LIGHT THEMES
              </h4>
              <div className="space-y-3">
                {lightThemes.map(([key, theme]) => (
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
                      <span className={`font-semibold ${theme.colors.textPrimary} text-sm`}>
                        {theme.name}
                      </span>
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
                    <div className="flex space-x-1">
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-r ${theme.colors.primary}`}></div>
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-r ${theme.colors.accent1}`}></div>
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-r ${theme.colors.accent2}`}></div>
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-r ${theme.colors.accent3}`}></div>
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-r ${theme.colors.accent4}`}></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dark Themes */}
            <div>
              <h4 className={`text-sm font-semibold ${themes[currentTheme].colors.textSecondary} mb-3 flex items-center`}>
                <span className="mr-2">🌙</span> DARK THEMES
              </h4>
              <div className="space-y-3">
                {darkThemes.map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => {
                      onThemeChange(key);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all hover:scale-105 border-2 ${
                      currentTheme === key
                        ? `border-blue-500 ${theme.colors.cardShadow}`
                        : `${theme.colors.cardBorder} hover:border-gray-600`
                    } ${theme.colors.cardBg}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-semibold ${theme.colors.textPrimary} text-sm`}>
                        {theme.name}
                      </span>
                      {currentTheme === key && (
                        <svg
                          className="w-5 h-5 text-blue-400"
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
                    <div className="flex space-x-1">
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-r ${theme.colors.primary}`}></div>
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-r ${theme.colors.accent1}`}></div>
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-r ${theme.colors.accent2}`}></div>
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-r ${theme.colors.accent3}`}></div>
                      <div className={`h-5 w-5 rounded-full bg-gradient-to-r ${theme.colors.accent4}`}></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className={`mt-6 w-full py-3 ${themes[currentTheme].colors.bgSecondary} hover:${themes[currentTheme].colors.cardBgHover} rounded-lg ${themes[currentTheme].colors.textPrimary} font-medium transition-colors`}
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
