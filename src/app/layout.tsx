import type { Metadata } from "next";
import { Inter, Montserrat, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/ui/Chatbot"; // IMPORT AJOUTÉ
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Les Abattoirs | REBOOT",
  description: "800 places. 1 date. Aucune vente sur place.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${montserrat.variable} ${outfit.variable} flex flex-col min-h-[100dvh] bg-[#000000]`}>
        <Header />
        <div className="flex-grow pt-[72px]">
          {children}
        </div>
        <Footer />
        <Chatbot /> {/* MODULE INJECTÉ ICI */}
      </body>
    </html>
  );
}