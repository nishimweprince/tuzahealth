import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollToHash } from "@/components/scroll-to-hash";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";
import {
  DESCRIPTION_DEFAULT,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  TITLE_DEFAULT,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s | Tuza Health",
  },
  description: DESCRIPTION_DEFAULT,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  keywords: [
    "home care Johnson County",
    "home health Overland Park",
    "supportive home care Kansas",
    "enhanced care services",
    "specialized medical care",
    "Tuza Health",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: TITLE_DEFAULT,
    description: DESCRIPTION_DEFAULT,
    url: SITE_URL,
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary",
    title: TITLE_DEFAULT,
    description: DESCRIPTION_DEFAULT,
    images: [OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", inter.variable, lora.variable)}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <ScrollToHash />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
