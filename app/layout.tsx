import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Tales of Annapurna - Epic Mythological Adventure Game | Amaze Studios",
    template: "%s | The Tales of Annapurna"
  },
  description: "Experience The Tales of Annapurna, a cinematic action-adventure game set in ancient Kashi. Join Sati's divine journey through mythological India with stunning visuals and Kalarippayattu combat. Wishlist now!",
  keywords: [
    "The Tales of Annapurna",
    "action adventure game",
    "mythological game",
    "Indian mythology",
    "Kashi game",
    "Sati goddess",
    "Kalarippayattu",
    "Amaze Studios",
    "PC game",
    "PlayStation",
    "Xbox",
    "indie game",
    "adventure game 2025",
    "mythology RPG"
  ],
  authors: [{ name: "Amaze Studios" }],
  creator: "Amaze Studios",
  publisher: "Amaze Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://amazestudios.com'), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "The Tales of Annapurna - Epic Mythological Adventure Game",
    description: "Experience The Tales of Annapurna, a cinematic action-adventure game set in ancient Kashi. Join Sati's divine journey through mythological India.",
    siteName: "The Tales of Annapurna",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "The Tales of Annapurna - Epic Adventure Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Tales of Annapurna - Epic Mythological Adventure Game",
    description: "Experience The Tales of Annapurna, a cinematic action-adventure game set in ancient Kashi. Join Sati's divine journey through mythological India.",
    images: ["/og-image.jpg"], // Same image as OG
    creator: "@amazestudios", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              "name": "The Tales of Annapurna",
              "description": "A cinematic action-adventure game set in ancient Kashi, where myth and legend awaken. Experience Sati's divine journey through mythological India with stunning visuals and Kalarippayattu combat.",
              "genre": ["Action", "Adventure", "Mythology", "RPG"],
              "gamePlatform": ["PC", "PlayStation", "Xbox"],
              "publisher": {
                "@type": "Organization",
                "name": "Amaze Studios",
                "url": "https://amazestudios.com"
              },
              "developer": {
                "@type": "Organization",
                "name": "Amaze Studios"
              },
              "operatingSystem": ["Windows", "PlayStation", "Xbox"],
              "applicationCategory": "Game",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/PreOrder",
                "price": "TBD",
                "priceCurrency": "USD"
              },
              "audience": {
                "@type": "PeopleAudience",
                "suggestedMinAge": 13
              },
              "keywords": "mythology, action adventure, Kashi, Indian culture, Sati, Kalarippayattu, indie game"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
