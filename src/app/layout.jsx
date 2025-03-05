import { Analytics } from "@vercel/analytics/react";

import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sorteos RJN",
  description: "Creado para Rojanelos ❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <Analytics />
      <body
        className={`${inter.className} max-w-screen flex min-h-screen flex-col`}
      >
        <InitColorSchemeScript />
        <CssVarsProvider defaultMode="dark">
          <CssBaseline />
          <Navbar />
          {children}
        </CssVarsProvider>
      </body>
    </html>
  );
}
