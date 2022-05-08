//libs
import Head from "next/head";

const HeadSelector = () => {
	return (
		<Head>
			<title>Pavel Zapletal | portfolio</title>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
				rel="stylesheet"
			/>
			<meta name="author" content="Pavel Zapletal" />
			<meta
				name="keywords"
				content="Pavel Zapletal, React.js, Next.js, web portfolio"
			/>
			<meta
				name="description"
				content="Hi, my name is Pavel Zapletal and this is my portfolio website. I am a website creator, designer and programmer :)."
			/>
		</Head>
	);
};

export default HeadSelector;
