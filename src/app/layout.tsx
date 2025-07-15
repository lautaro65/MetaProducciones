import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meta Producciones | Organización Integral de Eventos en Argentina",
  description:
    "Meta Producciones es líder en organización y producción integral de eventos sociales, corporativos y gubernamentales en Argentina. Más de 10 años creando experiencias inolvidables con servicios de planificación, catering, decoración, fotografía y tecnología de vanguardia.",
  keywords: [
    "eventos argentina",
    "organización de eventos",
    "producción de eventos",
    "eventos corporativos",
    "bodas argentina",
    "quinceañeras",
    "congresos",
    "convenciones",
    "catering eventos",
    "decoración eventos",
    "fotografía eventos",
    "eventos córdoba",
    "planificación eventos",
    "meta producciones",
    "eventos empresariales",
    "eventos sociales",
    "eventos gubernamentales",
  ],
  authors: [{ name: "Meta Producciones" }],
  creator: "Meta Producciones",
  publisher: "Meta Producciones",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://metaproducciones.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Meta Producciones | Organización Integral de Eventos en Argentina",
    description:
      "Líder en organización y producción integral de eventos sociales, corporativos y gubernamentales en Argentina. Más de 10 años creando experiencias inolvidables.",
    url: "https://metaproducciones.com.ar",
    siteName: "Meta Producciones",
    images: [
      {
        url: "/evento1.webp",
        width: 1200,
        height: 630,
        alt: "Meta Producciones - Eventos Inolvidables",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Producciones | Organización Integral de Eventos en Argentina",
    description:
      "Líder en organización y producción integral de eventos sociales, corporativos y gubernamentales en Argentina. Más de 10 años creando experiencias inolvidables.",
    images: ["/evento1.webp"],
    creator: "@metaproducciones",
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Meta Producciones",
              description:
                "Organización y producción integral de eventos sociales, corporativos y gubernamentales en Argentina",
              url: "https://metaproducciones.com.ar",
              logo: "https://metaproducciones.com.ar/logo-meta-producciones.svg",
              image: "https://metaproducciones.com.ar/evento1.webp",
              telephone: "+54-9-351-254-3913",
              email: "info@metaproducciones.com.ar",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Córdoba",
                addressCountry: "AR",
              },
              foundingDate: "2014",
              sameAs: [
                "https://www.facebook.com/metaproducciones",
                "https://www.instagram.com/metaproducciones",
                "https://twitter.com/metaproducciones",
              ],
              serviceArea: {
                "@type": "Country",
                name: "Argentina",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Eventos",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Organización de Bodas",
                      description: "Planificación integral de bodas con atención personalizada",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Eventos Corporativos",
                      description: "Conferencias, seminarios y eventos empresariales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Congresos y Convenciones",
                      description: "Eventos académicos y profesionales de gran escala",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Catering Gourmet",
                      description: "Menús personalizados y servicio de catering de alta calidad",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fotografía y Video",
                      description: "Captura profesional de momentos importantes",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Decoración Temática",
                      description: "Ambientaciones únicas y personalizadas",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Córdoba" />
        <meta name="geo.position" content="-31.4201;-64.1888" />
        <meta name="ICBM" content="-31.4201, -64.1888" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/https://lh3.googleusercontent.com/gg-dl/AJfQ9KQsPVsV0TpgMcZFL88STc-AkqoXwVsT34oyRbzb938UWzQthLWOIKbuQwjgZ-elMzR7_pZxALR-bEXrX6ZCgOtq_TFyxVdmhCunViHepVJxu6C7yikXvqnJF2oEDzgAB0Q9CrwFZ0WvAwFm1qGlRiMnNoPrwJpbLaKRdfmMl_yQvp37Cg=s1024" />
        <link rel="apple-touch-icon" sizes="180x180" href="/iconM.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/iconM.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/iconM.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color */}
        <meta name="theme-color" content="#BD2E43" />
        <meta name="msapplication-TileColor" content="#BD2E43" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
