import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "../src/lib/themeContext";
import { CyberCursor } from "../src/components/hud/CyberCursor";
import "./global.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAMI KALAMMALLAH // 5+ YRS SOFT_ENG & HARDCORE PC GAMER",
  description:
    "Senior Software Engineer specializing in scalable web systems, cross-platform apps, GraphQL, and high-concurrency architectures. Hardcore PC gamer across Dota 2 and CS2.",
  openGraph: {
    title: "Sami Kalammallah - Cyberpunk ROG Developer Portfolio",
    description: "5+ Years Software Engineering & Hardcore PC Gaming Discipline",
    url: "https://kalammallah.vercel.app",
    siteName: "Sami Kalammallah Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-obsidian-deep text-on-surface antialiased selection:bg-neon-cyan selection:text-obsidian-deep">
        <ThemeProvider>
          <CyberCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
