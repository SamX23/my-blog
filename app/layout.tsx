import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "../src/providers/themeProvider";

import "./global.css";

export async function generateMetadata() {
  return {
    title: "Home",
    description: "Sami Kalammallah blog about his front end journey",
    twitter: {
      card: "summary_large_image",
    },
    openGraph: {
      type: "website",
      description: "Sami Kalammallah blog about his front end journey",
      images: [
        {
          url: `https://og-image.vercel.app/${encodeURI(
            "Sami Kalammallah"
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`,
          width: 800,
          height: 600,
          alt: "Sami Kalammallah",
        },
      ],
    },
    icons: {
      icon: "icon.svg",
    },
    other: {
      "google-site-verification": "nWaKNPg87UzU3zONVNwXr_dzHzBfS35RS-hceGJaxJk",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
