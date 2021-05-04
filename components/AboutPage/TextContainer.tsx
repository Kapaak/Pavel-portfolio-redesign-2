//libs
import styled from "styled-components";
import Image from "next/image";
//styles
import { Underscore } from "../../styles/GlobalStyles";
import Breakpoints from "../global/Breakpoints";

const TextContainer = () => {
	return (
		<StyledTextContainer>
			<h1>About</h1>
			<p>
				Hi, I'm <Underscore>Pavel Zapletal</Underscore> a self-taught JavaScript
				programmer. I'm 26 yo, living in Brno. Creating websites is my bread and
				butter. When I'm not at home I usually go outside to enjoy some nature.
			</p>
			<div>
				<h2>What technologies do I like working with?</h2>
				<NotReallySlider>
					<div>
						<Image
							width={35}
							height={35}
							alt="nextjs-svg"
							src="/images/icons/nextjs.svg"
						/>
						<p>Next.js</p>
					</div>
					<div>
						<Image
							width={35}
							height={35}
							src="/images/icons/github.svg"
							alt="github-svg"
						/>
						<p>Github</p>
					</div>
					<div>
						<Image
							width={35}
							height={35}
							src="/images/icons/react.svg"
							alt="react-svg"
						/>
						<p>React</p>
					</div>
					<div>
						<Image
							width={35}
							height={35}
							src="/images/icons/typescript.svg"
							alt="typescript-svg"
						/>
						<p>Typescript</p>
					</div>
				</NotReallySlider>
			</div>
		</StyledTextContainer>
	);
};

export default TextContainer;

const StyledTextContainer = styled.div`
	flex: 1 1 70%;
	margin-bottom: var(--horizontal-gap);

	& > p {
		margin-bottom: var(--text-mb);
	}

	p {
		font-size: var(--fosi-text);
	}

	@media ${Breakpoints.desktop} {
		margin-bottom: 0;
		padding-right: 11vw;
		/* padding-right: var(--horizontal-gap); */
	}
`;

const NotReallySlider = styled.div`
	display: flex;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;

		& > div {
			margin-bottom: 0.5rem;
		}
	}

	div + div {
		margin-left: var(--text-mb);
	}
`;
