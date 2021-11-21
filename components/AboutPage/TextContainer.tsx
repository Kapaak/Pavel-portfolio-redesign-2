//libs
import styled from "styled-components";
import Image from "next/image";
//styles
import { breakpoints } from "@/styledComponents/index";
import { Headline, Text } from "@/styledComponents/index";
//others
//@ts-ignore
import meImg from "../../public/images/me.JPG";

const TextContainer = () => {
	return (
		<StyledTextContainer>
			<Headline>About me</Headline>
			<ImageWrapper>
				<Image src={meImg} objectFit="cover"></Image>
			</ImageWrapper>
			<TextWrapper>
				<Text>
					Hi, I'm Pavel Zapletal a self-taught JavaScript programmer. I'm 26 yo,
					living in Brno. Creating websites is my bread and butter. When I'm not
					at home I usually go outside to enjoy some nature.
				</Text>
			</TextWrapper>
		</StyledTextContainer>
	);
};

export default TextContainer;

const ImageWrapper = styled.div`
	height: 18rem;
	border-radius: 3rem;
	overflow: hidden;
`;

const TextWrapper = styled.div``;

const StyledTextContainer = styled.div`
	margin-bottom: var(--horizontal-gap);
	z-index: 2;
`;
