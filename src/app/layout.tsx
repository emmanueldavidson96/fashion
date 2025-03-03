import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const anton = Anton({weight:"400", subsets:["latin"]});

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
        className={`${anton.className} bg-black antialiased overflow-x-hidden`}
      >
        {children}
        <ToastContainer 
          position="top-right"
        />
      </body>
    </html>
  );
}
