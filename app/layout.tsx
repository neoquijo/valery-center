import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ValeryCenter.com Massage & Wellness Center in Alicante | Therapeutic & Holistic Care",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="6cefbf97-79a9-4cd5-a9b1-76e7e385dac2" data-blockingmode="auto" type="text/javascript"></script>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          rel="stylesheet"
          href="https://fonts.bunny.net/css?family=playfair-display:400,700,900&family=poppins:300,400,500,600,700&display=swap"
        />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512‑...your‑sha‑hash..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Material Icons (если нужны) */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
