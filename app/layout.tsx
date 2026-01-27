import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pennington Dental Menu Options",
  description: "Modern menu design options for Pennington Dental Associates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: 'proxima-nova, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
