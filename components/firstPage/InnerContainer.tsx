//components
import Button from "../global/Button";
//styles
import styled from "styled-components";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			<h1>Pavel Zapletal</h1>
			<h2>Web developer, UX/UI designer</h2>
			<div>
				<Button>See more</Button>
				<Button noUnderscore>Download CV</Button>
			</div>
		</StyledInnerContainer>
	);
};

export default InnerContainer;

const StyledInnerContainer = styled.div`
	h1,
	h2 {
		font-weight: var(--fowe-reg);
	}
	h1 {
		font-size: var(--fosi-home-headline);
		line-height: 1;
		margin-bottom: 1rem;
	}
	h2 {
		color: var(--second-col);
		font-size: var(--fosi-home-subheadline);
		margin-bottom: 2rem;
	}
`;
