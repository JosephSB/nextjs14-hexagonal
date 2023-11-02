import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import "@css/normalize.css";
import "@css/main.css";
import { AuthContextProvider } from "@contexts/Authenticated.context";
import GoogleAnalytics from '@components/GoogleAnalytics'
import TanstackProvider from '@contexts/Tanstack.context';
import InitLoaderWrapper from '@components/Loaders/InitLoaderWrapper';

const poppins = Poppins({
  weight: ["100","200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari"],
  display: "optional",
})

export const metadata: Metadata = {
  title: "Pozicion",
  description: "Noticias, fotos, y videos de Perú y el mundo en Pozicion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={poppins.className}>
       <AuthContextProvider>
          <TanstackProvider>
            <>
              <InitLoaderWrapper />
              {children}
            </>
          </TanstackProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}
