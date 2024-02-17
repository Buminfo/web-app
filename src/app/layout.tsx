import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../../theme";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buminfo",
  description: "Get the latest news as it dey hot!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="auto" theme={theme}>
          <Header />
          <NextTopLoader />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
