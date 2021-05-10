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
	index: number;
}

const Wrapper = ({ data, index }: Props) => {
	const { image, ...rest } = data;

	return (
		<>
			{index % 2 === 0 ? (
				<StyledWrapper index={index}>
					<div>
						<ImageContainer image={image} />
						<TextContainer
							data={rest}
							margin="var(--horizontal-gap) 0 0 5vw;"
						/>
					</div>
				</StyledWrapper>
			) : (
				<StyledWrapper index={index}>
					<div>
						<ImageContainer image={image} />
						<TextContainer
							data={rest}
							margin="var(--horizontal-gap) 5vw 0 0 ;"
						/>
					</div>
				</StyledWrapper>
			)}
		</>
	);
};

export default Wrapper;

const StyledWrapper = styled.div<{ index: number }>`
	width: 100%;
	margin-bottom: var(--horizontal-gap);
	& > div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 79rem;
		margin: 0 auto;

		@media ${Breakpoints.tablet} {
			flex-direction: ${({ index }) =>
				index % 2 === 0 ? "row" : "row-reverse"};
		}
		@media ${Breakpoints.desktopB} {
			max-width: 100rem;
		}
	}

	@media ${Breakpoints.desktop} {
		margin-bottom: 14rem;
	}
`;
