//libs
import styled from "styled-components";
//components
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";
//interfaces
import { PortfolioObject } from "../global/Interfaces";
//breakpoints
import Breakpoints from "../global/Breakpoints";

interface Props {
	data: PortfolioObject;
}

const Wrapper = ({ data }: Props) => {
	const { image, ...rest } = data;

	return (
		<StyledWrapper>
			<div>
				<ImageContainer image={image} />
				<TextContainer data={rest} />
			</div>
		</StyledWrapper>
	);
};

export default Wrapper;

const StyledWrapper = styled.div`
	max-width: 144rem;
	margin: 0 auto;

	& > div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		@media ${Breakpoints.tablet} {
			flex-direction: row;
		}
	}
`;
