//components
import {
	Button,
	MainSubHeadline,
	MainHeadline,
} from "@/styledComponents/index";
//styles
import styled from "styled-components";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			<MainSubHeadline>Web developer, UX/UI designer</MainSubHeadline>
			<MainHeadline>Pavel Zapletal</MainHeadline>
			<div>
				<Button>See more</Button>
				<Button noUnderscore>
					<a download="PavelZapletal.pdf" href="./CV.pdf">
						Download CV 2
					</a>
				</Button>
			</div>
		</StyledInnerContainer>
	);
};

export default InnerContainer;

const StyledInnerContainer = styled.div``;
