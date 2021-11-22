//libs
import styled from "styled-components";
import Image from "next/image";
//styles
import { breakpoints } from "@/styledComponents/index";
import { Headline, Text } from "@/styledComponents/index";
//others
//@ts-ignore
import meImg from "../../public/images/me.jpg";

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
`;

const ImageWrapper = styled.div`
	height: 22rem;
	border-radius: 3rem;
	overflow: hidden;

	@media ${breakpoints.tabletS} {
		flex: 1 1 60%;
		height: auto;
		border-radius: 2rem;

		& > span {
			height: 100% !important;
		}
	}
`;

const TextWrapper = styled.div`
	flex: 1 1 40%;
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
