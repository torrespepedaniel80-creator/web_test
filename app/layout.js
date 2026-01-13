import {
  Geist,
  Geist_Mono,
  Inter,
  Playfair_Display,
  Poppins,
  Roboto,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "ContaPlus - Servicios Contables Profesionales",
  description:
    "Soluciones contables profesionales para el crecimiento de tu empresa. Contabilidad, auditoría, asesoría fiscal y más.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} ${poppins.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
