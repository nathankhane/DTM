import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "Debunking The Myths: Clear Facts About OCD",
  description: "An educational site debunking common OCD myths with clear facts, treatment options (CBT/ERP, SSRIs), and vetted sources. Not medical advice.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ocd-debunked.vercel.app'),
  openGraph: {
    title: "Debunking The Myths: Clear Facts About OCD",
    description: "Clear facts about OCD, myth-busting, treatment options, and resources.",
    type: "website",
    locale: 'en_US',
  },
  alternates: { 
    canonical: process.env.NEXT_PUBLIC_SITE_URL || undefined 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-slate-800 antialiased`}>
        {/* Header with Navigation */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
          <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
            <Link 
              href="/" 
              className="text-xl font-semibold text-slate-900 hover:text-teal-600 transition-colors"
            >
              OCD Debunked
            </Link>
            <div className="flex items-center gap-6">
              <Link 
                href="/treatment-options" 
                className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
              >
                Treatment Options
              </Link>
              <Link 
                href="/sources" 
                className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
              >
                Sources
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer with Disclaimers */}
        <footer className="mt-16 border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl p-6 text-sm text-slate-600">
            <p className="font-medium text-slate-800 mb-2">Educational content. Not medical advice.</p>
            <p className="text-slate-500">
              Image credits: Unsplash / Pixabay / FreeSVG (CC0 / Unsplash License).
            </p>
            <p className="mt-4 text-xs text-slate-400">
              This site was created for educational purposes as part of a university project. 
              If you or someone you know is struggling with OCD, please consult a licensed mental health professional.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
