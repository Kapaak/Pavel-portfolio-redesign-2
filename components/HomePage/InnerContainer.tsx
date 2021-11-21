//components
import {
	Button,
	MainSubHeadline,
	MainHeadline,
	Line,
} from "@/styledComponents/index";
//styles
import styled from "styled-components";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			<MainSubHeadline>web developer, UX/UI designer</MainSubHeadline>
			<Line />
			<MainHeadline>Pavel Zapletal</MainHeadline>
			<ButtonWrapper>
				<Button
					scrollTo="about-page"
					primaryButton
					src="/images/icons/info-icon.svg"
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
	margin-top: 10rem;
`;

const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;
