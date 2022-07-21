//libs
import styled from "styled-components";
import Image from "next/image";
//styles
import { Headline, Text, breakpoints } from "@/customs/index";
//others
import ProfileImage from "@/public/images/profile-img.jpg";

const TextContainer = () => {
	const getAge = (dateString: string) => {
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	};

	return (
		<StyledTextContainer>
			<Headline>About me</Headline>
			<FlexWrapper>
				<ImageWrapper>
					<Image
						src={ProfileImage}
						objectFit="cover"
						placeholder="blur"
						alt="my profile picture"
					/>
				</ImageWrapper>
				<TextWrapper>
					<Headline>About me</Headline>
					<Text>
						Hi, I'm Pavel Zapletal a self-taught JavaScript programmer. I'm{" "}
						{getAge("1994/07/10")} yo, living in Brno. Creating websites is my
						bread and butter. When I'm not at home I usually go outside to enjoy
						some nature.
					</Text>
					<Text>
						I'm mostly interested in front-end frameworks like Next.js and
						Svelte, but I also have some knowledge in Nest.js and Express.
					</Text>
					<Text>
						Besides my passion for front-end development I also like to read
						about mobile applications and in near future I would like to touch
						technologies like React Native and SwiftUI.
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

	& > ${Headline} {
		display: none;
	}

	@media ${breakpoints.tablet} {
		& > ${Headline} {
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
		& > ${Headline} {
			display: none;
		}
	}
`;
