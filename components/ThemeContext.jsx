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
      classic: 'var(--font-geist-sans)',
      modern: 'var(--font-inter)',
      elegant: 'var(--font-playfair)',
      fresh: 'var(--font-poppins)',
      corporate: 'var(--font-roboto)',
    };
    document.body.style.fontFamily = fontMap[currentTheme] || fontMap.classic;
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
