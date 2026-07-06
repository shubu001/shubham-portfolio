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
    default: 'Shubham | Full Stack Developer',
    template: '%s | Shubham',
  },
 description:
  'Final-Year B.Tech Computer Science student and Full Stack Developer building modern web applications with React.js, Firebase, Tailwind CSS, Flutter, and UI/UX design.',

  keywords: [
  'Shubham',
  'Full Stack Developer',
  'React.js',
  'Firebase',
  'Tailwind CSS',
  'Flutter',
  'JavaScript',
  'Web Developer',
  'Portfolio',
  'TravelBharat',
  'UPI-Shiksha',
  'India',
],
  authors: [{ name: 'Shubham', url: SITE_URL }],
  creator: 'Shubham',
 openGraph: {
  type: 'website',
  locale: 'en_IN',
  url: SITE_URL,
  siteName: 'Shubham Portfolio',
  title: 'Shubham | Full Stack Developer',
  description:
    'Explore my portfolio featuring modern web applications, UI/UX designs, Full Stack projects, TravelBharat, UPI-Shiksha, internships, and technical skills.',
  images: [
    {
      url: '/assets/portfolio-banner.jpeg',
      width: 1200,
      height: 630,
      alt: 'Shubham | Full Stack Developer Portfolio',
    },
  ],
},
 twitter: {
  card: 'summary_large_image',
  title: 'Shubham | Full Stack Developer',
  description:
    'Explore my portfolio featuring modern web applications, UI/UX designs, Full Stack projects, TravelBharat, UPI-Shiksha, internships, and technical skills.',
  images: ['/assets/portfolio-banner.jpeg'],
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
              name: 'Shubham',
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
