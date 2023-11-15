import './globals.css'
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const inter = Roboto({weight:["400"], style: ["italic"],subsets:["vietnamese"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Club House: Chat and speak",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
