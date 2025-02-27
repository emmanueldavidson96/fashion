import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const montserrat = Montserrat({subsets:["latin"]});

export const metadata: Metadata = {
  title: "African Fashion Week Nigeria",
  description: "Showcasing African Designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-black antialiased overflow-x-hidden`}
      >
        {children}
        <ToastContainer 
          position="top-right"
        />
      </body>
    </html>
  );
}
