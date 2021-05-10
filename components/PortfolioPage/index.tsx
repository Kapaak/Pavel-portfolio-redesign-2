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
		<StyledPortfolioPageOutter>
			<StyledPortfolioPage>
				<h1>Portfolio</h1>
				<h2>some of my latest projects</h2>
				{data.map((dataEl, index) => (
					<Wrapper key={index} data={dataEl} index={index} />
				))}
				<FlexUnderscore>load more projects...</FlexUnderscore>
			</StyledPortfolioPage>
		</StyledPortfolioPageOutter>
	);
};

export default index;

const StyledPortfolioPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	max-width: 144rem;
	margin: 0 auto;
	@media ${Breakpoints.tablet} {
		padding: 0 var(--horizontal-gap);
		& > h2 {
			margin-bottom: 8rem;
		}
	}
	@media ${Breakpoints.desktop} {
		& > h2 {
			margin-bottom: 18rem;
		}
	}
`;
const StyledPortfolioPageOutter = styled.div`
	padding: var(--vertical-gap) var(--horizontal-gap);
	background-color: var(--fourth-col);
`;

const FlexUnderscore = styled(Underscore)`
	font-size: var(--fosi-subheadline);
	@media ${Breakpoints.tablet} {
		align-self: center;
	}
`;
