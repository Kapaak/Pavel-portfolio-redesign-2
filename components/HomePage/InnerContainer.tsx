//libraries
import styled from "styled-components";
//components
import {
	Button,
	MainSubHeadline,
	MainHeadline,
	Line,
	AnimationDiv,
	breakpoints,
} from "@/customs/index";
//animations
import {
	fadeInVariant,
	opacityVariant,
	widthVariant,
} from "@/animations/variants";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			<AnimationDiv custom={0.6} variants={fadeInVariant}>
				<MainSubHeadline>web developer, UX/UI designer</MainSubHeadline>
			</AnimationDiv>
			<AnimationDiv custom={1.5} variants={widthVariant}>
				<Line />
			</AnimationDiv>
			<AnimationDiv custom={1} variants={fadeInVariant}>
				<MainHeadline>Pavel Zapletal</MainHeadline>
			</AnimationDiv>
			<ButtonWrapper custom={1.5} variants={opacityVariant}>
				<Button
					scrollTo="about-page"
					primaryButton
					src="/icons/arrow.svg"
					alt="arrow"
				>
					more info
				</Button>
				<Button scrollTo="contact-page">contact</Button>
			</ButtonWrapper>
		</StyledInnerContainer>
	);
};

export default InnerContainer;

const StyledInnerContainer = styled.div`
	width: 100%;
`;

const ButtonWrapper = styled(AnimationDiv)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	@media ${breakpoints.desktop} {
		justify-content: flex-start;
	}
`;
