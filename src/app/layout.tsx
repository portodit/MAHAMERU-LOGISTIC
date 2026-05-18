import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahameru Logistic - Solusi Logistik Laut",
  description: "PT Mahameru Transportasi Nusantara - Solusi Logistik Laut Murah, Cepat, Terpercaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}