'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { themes } from './ThemeSelector';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Use lazy initialization to avoid setState in useEffect
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('selectedTheme');
      if (savedTheme && themes[savedTheme]) {
        return savedTheme;
      }
    }
    return 'lightProfessional';
  });

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('selectedTheme', currentTheme);
    
    // Update CSS custom properties for scrollbar
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty('--scrollbar-gradient', theme.colors.scrollbar);
    document.documentElement.style.setProperty('--scrollbar-gradient-hover', theme.colors.scrollbarHover);
    
    // Update font family
    const fontMap = {
      // Light themes
      lightProfessional: 'var(--font-geist-sans)',
      lightModern: 'var(--font-inter)',
      lightNature: 'var(--font-poppins)',
      lightWarm: 'var(--font-roboto)',
      lightRoyal: 'var(--font-playfair)',
      lightOcean: 'var(--font-inter)',
      lightSunset: 'var(--font-poppins)',
      lightForest: 'var(--font-roboto)',
      lightLavender: 'var(--font-playfair)',
      lightMinimal: 'var(--font-geist-sans)',
      // Dark themes
      darkElegant: 'var(--font-playfair)',
      darkCorporate: 'var(--font-roboto)',
      darkForest: 'var(--font-poppins)',
      darkSunset: 'var(--font-inter)',
      darkMidnight: 'var(--font-geist-sans)',
      darkCyber: 'var(--font-inter)',
      darkVintage: 'var(--font-playfair)',
      darkNeon: 'var(--font-poppins)',
      darkMonochrome: 'var(--font-roboto)',
      darkAurora: 'var(--font-geist-sans)',
    };
    document.body.style.fontFamily = fontMap[currentTheme] || fontMap.lightProfessional;
  }, [currentTheme]);

  const theme = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
