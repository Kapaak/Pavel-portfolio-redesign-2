import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GlobalStyle } from "@/ui/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
