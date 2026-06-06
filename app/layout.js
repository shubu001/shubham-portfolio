import { Geist, Geist_Mono, Baloo_2, Dancing_Script } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import { SITE_URL } from '@/lib/siteConfig';
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'shubham | Full Stack Developer',
    template: '%s | shubham',
  },
  description:
    'Full Stack Engineer with 4+ years building scalable web and AI-powered systems using MERN, Next.js, and Python. Available worldwide for collaborations.',
  keywords: [
    'shubham',
    'Full Stack Developer',
    'Software Engineer',
    'FULL Stack',
    'Next.js Developer',
    'React Developer',
    'Node.js',
    'AI Systems',
    'Portfolio',
    'India',
  ],
  authors: [{ name: 'shubham', url: SITE_URL }],
  creator: 'shubham',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'shubham',
    title: 'shubham | Full Stack Developer',
    description:
      'Full Stack Engineer with 4+ years building scalable web and AI-powered systems using MERN, Next.js, and Python. Available worldwide for collaborations.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'shubham | Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'shubham | Full Stack Developer',
    description:
      'Full Stack Engineer with 4+ years building scalable web and AI-powered systems using MERN, Next.js, and Python. Available worldwide for collaborations.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
            { url: '/favicons/weblogo.PNG', sizes: 'any', type: 'image/PNG'},
    ],
  },
  manifest: '/favicons/manifest.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'shubham',
              url: SITE_URL,
              email: 'shubhamkharwar001@gmail.com',
              jobTitle: 'Full Stack Developer',
              sameAs: [
                'https://github.com/shubu001',
                'https://www.linkedin.com/in/shubham-93094b214'
                
              ],
            }),
          }}
        />
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
