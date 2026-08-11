import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QA Portfolio",
  description: "QA Tester Portfolio and Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1e1e1e] text-[#d4d4d4] m-0 p-0 overflow-hidden font-mono">
        {children}
      </body>
    </html>
  );
}