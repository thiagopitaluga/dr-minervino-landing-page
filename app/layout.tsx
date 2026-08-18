import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host =
    headerStore.get("x-forwarded-host") ??
    headerStore.get("host") ??
    "lp.drminervinourologista.com.br";
  const protocol =
    headerStore.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Dr. Minervino | Urologista em São Luís";
  const description =
    "Urologia com precisão, tecnologia e cuidado individualizado em São Luís. Agende sua avaliação com o Dr. Minervino pelo WhatsApp.";

  return {
    title,
    description,
    alternates: { canonical: origin },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "Dr. Minervino — Urologia de alta precisão",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
