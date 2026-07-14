import type { AppProps } from "next/app";
import { Karla } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GlobalStyle } from "@/ui/theme";

const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={karla.className}>
      <SEO />
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
