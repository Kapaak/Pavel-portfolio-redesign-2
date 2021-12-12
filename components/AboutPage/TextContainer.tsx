//libs
import styled from "styled-components";
import Image from "next/image";
//styles
import { breakpoints } from "styles/customs";
import { Headline, Text } from "styles/customs";
//others
//@ts-ignore
import meImg from "../../public/images/profile-img.jpg";

const TextContainer = () => {
	return (
		<StyledTextContainer>
			<Headline>About me</Headline>
			<FlexWrapper>
				<ImageWrapper>
					<Image src={meImg} objectFit="cover" placeholder="blur" />
				</ImageWrapper>
				<TextWrapper>
					<Headline>About me</Headline>
					<Text>
						Hi, I'm Pavel Zapletal a self-taught JavaScript programmer. I'm 26
						yo, living in Brno. Creating websites is my bread and butter. When
						I'm not at home I usually go outside to enjoy some nature.
					</Text>
				</TextWrapper>
			</FlexWrapper>
		</StyledTextContainer>
	);
};

export default TextContainer;

const FlexWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;

	@media ${breakpoints.tabletS} {
		flex-direction: row;
	}

	@media ${breakpoints.desktopX} {
		gap: 5rem;

		img {
			transform: scale(1.3);
			margin-left: -5.5rem !important;
		}
	}
`;

const ImageWrapper = styled.div`
	height: 22rem;
	border-radius: 3rem;
	overflow: hidden;

	@media ${breakpoints.tabletS} {
		flex: 1 1 50%;
		height: auto;
		border-radius: 2rem;

		& > span {
			height: 100% !important;
		}
	}

	@media ${breakpoints.tablet} {
		max-width: 35rem;
		height: 44rem;
	}

	@media ${breakpoints.desktopX} {
		max-width: 38rem;
		height: 50rem;
	}
`;

const TextWrapper = styled.div`
	flex: 1 1 45%;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	& > div:first-child {
		display: none;
	}

	@media ${breakpoints.tablet} {
		& > div:first-child {
			display: inline-block;
		}
	}

	@media ${breakpoints.desktopX} {
		padding-top: 2rem;
	}
`;

const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;

	@media ${breakpoints.tablet} {
		& > div:first-child {
			display: none;
		}
	}
`;
