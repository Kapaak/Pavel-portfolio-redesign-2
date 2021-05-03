// libs
import styled from "styled-components";
//components
import Wrapper from "./Wrapper";
//interfaces
import { PortfolioObject } from "../global/Interfaces";
import { Underscore } from "../../styles/GlobalStyles";

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
			<Underscore>load more projects...</Underscore>
		</StyledPortfolioPage>
	);
};

export default index;

const StyledPortfolioPage = styled.div`
	background-color: var(--fourth-col);
	padding: var(--vertical-gap) var(--horizontal-gap);
`;
