import Head from "next/head";

export function SEO() {
  return (
    <Head>
      <title>Pavel Zapletal | portfolio</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href="https://pavelzapletal.cz/" />
      <meta name="author" content="Pavel Zapletal" />
      <meta
        name="keywords"
        content="Pavel Zapletal, React.js, Next.js, web portfolio, web developer, web designer, programmer"
      />
      <meta
        name="description"
        content="Hi, my name is Pavel Zapletal and this is my portfolio website. I am a website creator, designer and programmer :)."
      />
      <meta
        name="google-site-verification"
        content="iHmb0qA_zuGADAzjuGNQhiGb4wx8Y-YK5MYeKgxurqY"
      />
    </Head>
  );
}
