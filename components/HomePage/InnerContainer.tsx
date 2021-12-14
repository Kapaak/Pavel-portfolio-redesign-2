//components
import { Button, MainSubHeadline, MainHeadline, Line } from "styles/customs";
//styles
import styled from "styled-components";
import { breakpoints } from "styles/customs";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			<MainSubHeadline>web developer, UX/UI designer</MainSubHeadline>
			<Line />
			<MainHeadline>Pavel Zapletal</MainHeadline>
			<ButtonWrapper>
				<Button scrollTo="about-page" primaryButton src="/icons/info-icon.svg">
					more info
				</Button>
				<Button scrollTo="contact-page">contact</Button>
			</ButtonWrapper>
		</StyledInnerContainer>
	);
};

export default InnerContainer;

const StyledInnerContainer = styled.div`
	//margin-top: 10rem;//add
	width: 100%;
`;

const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	@media ${breakpoints.desktop} {
		justify-content: flex-start;
	}
`;
