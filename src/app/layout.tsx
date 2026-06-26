import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahameru-logistic.co.id"),
  title: {
    default: "Mahameru Logistic - Solusi Logistik Laut Murah, Cepat, Terpercaya",
    template: "%s | Mahameru Logistic",
  },
  description: "PT Mahameru Transportasi Nusantara - Layanan pengiriman cargo container FCL, LCL, dan Project Cargo dari Surabaya ke Banjarmasin dan Manado",
  keywords: ["logistik", "cargo", "pengiriman", "FCL", "LCL", "Project Cargo", "Surabaya", "Banjarmasin", "Manado", "pengiriman laut", "expedisi"],
  authors: [{ name: "PT Mahameru Transportasi Nusantara" }],
  creator: "PT Mahameru Transportasi Nusantara",
  publisher: "PT Mahameru Transportasi Nusantara",
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://mahameru-logistic.co.id",
    siteName: "Mahameru Logistic",
    title: "Mahameru Logistic - Solusi Logistik Laut Murah, Cepat, Terpercaya",
    description: "PT Mahameru Transportasi Nusantara - Layanan pengiriman cargo container FCL, LCL, dan Project Cargo dari Surabaya ke Banjarmasin dan Manado",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Mahameru Logistic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahameru Logistic",
    description: "Solusi Logistik Laut Murah, Cepat, Terpercaya",
    images: ["/opengraph.jpg"],
  },
  alternates: {
    canonical: "https://mahameru-logistic.co.id",
  },
  category: "Business",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
