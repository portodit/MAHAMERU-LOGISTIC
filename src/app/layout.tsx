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
  title: "Mahameru Logistic - Solusi Logistik Laut Murah, Cepat, Terpercaya",
  description: "PT Mahameru Transportasi Nusantara - Layanan pengiriman cargo container FCL, LCL, dan Project Cargo dari Surabaya ke Banjarmasin dan Manado",
  keywords: ["logistik", "cargo", "pengiriman", "FCL", "LCL", "Project Cargo", "Surabaya", "Banjarmasin", "Manado"],
  openGraph: {
    title: "Mahameru Logistic",
    description: "Solusi Logistik Laut Murah, Cepat, Terpercaya",
    type: "website",
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
