import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
