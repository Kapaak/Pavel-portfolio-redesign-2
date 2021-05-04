// libs
import styled from "styled-components";
//components
import Wrapper from "./Wrapper";
//interfaces
import { PortfolioObject } from "../global/Interfaces";
import { Underscore } from "../../styles/GlobalStyles";
import Breakpoints from "../global/Breakpoints";

interface Props {
	data: Array<PortfolioObject>;
}

const index = ({ data }: Props) => {
	return (
		<StyledPortfolioPage>
			<h1>Portfolio</h1>
			<h2>some of my latest projects</h2>
			{data.map((dataEl, index) => (
				<Wrapper key={index} data={dataEl} />
			))}
			<FlexUnderscore>load more projects...</FlexUnderscore>
		</StyledPortfolioPage>
	);
};

export default index;

const StyledPortfolioPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	background-color: var(--fourth-col);
	padding: var(--vertical-gap) var(--horizontal-gap);
`;

const FlexUnderscore = styled(Underscore)`
	font-size: var(--fosi-subheadline);
	@media ${Breakpoints.tablet} {
		align-self: center;
	}
`;
