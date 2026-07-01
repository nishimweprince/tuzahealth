import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollToHash } from "@/components/scroll-to-hash";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

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
  title: "Tuza Health, LLC | Home-Based Support in Johnson County, KS",
  description:
    "Tuza Health, LLC provides home-based support in Johnson County, Kansas — Supportive Home Care, Enhanced Care Services, and Specialized Medical Care. Accepting new referrals. NPI 1376248864.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
