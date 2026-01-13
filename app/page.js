"use client";
import { ThemeProvider } from "@/components/ThemeContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeSelector from "@/components/ThemeSelector";
import { useTheme } from "@/components/ThemeContext";

function HomeContent() {
  const { currentTheme, setCurrentTheme } = useTheme();

  return (
    <>
      <ThemeSelector
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />
      <Header />
      <Hero />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
