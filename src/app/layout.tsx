// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./print.css";
import AppShell from "./components/AppShell/AppShell";

const SITE_URL = "https://rabbit-farming-from-a-to-z-react.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Кролівництво від А до Я — облік, догляд та лікування кролів",
  description:
    "Кролівництво від А до Я — сучасна платформа для обліку кролів, годівлі, вакцинації, лікування та ведення господарства.",
  keywords: [
    "кролівництво",
    "кролі",
    "облік кролів",
    "вакцинація кролів",
    "лікування кролів",
    "ферма",
    "господарство",
  ],
  authors: [{ name: "Кролівництво від А до Я" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/breed.svg",
    apple: "/icons/icon-192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Кролівництво",
  },
  openGraph: {
    title: "Кролівництво від А до Я",
    description:
      "Повний посібник з кролівництва, обліку, лікування та ведення господарства.",
    url: SITE_URL,
    siteName: "Кролівництво від А до Я",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Кролівництво від А до Я",
    description: "Повний посібник з кролівництва, лікування та ведення господарства.",
    images: ["/og-image.webp"],
  },
  other: {
    "theme-color": "#27500A",
    "mobile-web-app-capable": "yes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Кролівництво від А до Я",
  url: SITE_URL + "/",
  description: "Платформа для кролівництва...",
  inLanguage: "uk-UA",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: SITE_URL + "/?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Фікс до гідратації: виставляємо тему ще до першого рендеру,
            щоб уникнути "блимання" світлою темою */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              const t = localStorage.getItem('theme');
              if (t) {
                document.documentElement.setAttribute('data-theme', t);
              } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })();
          `}
        </Script>
      </head>
      <body>
        <div id="splash">
          <div className="splash-icon">🐇</div>
          <div className="splash-title">Кролівництво від А до Я</div>
          <div className="splash-dots">
            <div className="splash-dot" />
            <div className="splash-dot" />
            <div className="splash-dot" />
          </div>
        </div>

        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
