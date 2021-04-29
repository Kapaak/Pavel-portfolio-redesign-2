//types
import type { AppProps } from "next/app";
//components
import Head from "../components/global/Head";
//styles
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head />
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
