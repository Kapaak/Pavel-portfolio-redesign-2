//libraries
import styled from "styled-components";
//components
import InnerContainer from "./InnerContainer";
//styles
import { AnimationRevealDiv, MaxWidth, Section } from "@/customs/index";

const ContactPage = () => {
	return (
		<SContactPage id="contact-page">
			<AnimationRevealDiv>
				<MaxWidth>
					<InnerContainer />
				</MaxWidth>
			</AnimationRevealDiv>
		</SContactPage>
	);
};

const SContactPage = styled(Section)`
	background-color: var(--col1);
	color: var(--bg-col);
`;

export default ContactPage;
