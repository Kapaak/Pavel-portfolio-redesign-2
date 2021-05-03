//libs
import styled from "styled-components";
//components
import ColorContainer from "./ColorContainer";

interface Props {
	colors: Array<string>;
}
const ColorsContainer = ({ colors }: Props) => {
	console.log(colors);

	return (
		<StyledColors>
			{colors.map((color, index) => {
				return <ColorContainer key={index} color={color} />;
			})}
		</StyledColors>
	);
};

export default ColorsContainer;

const StyledColors = styled.div`
	display: flex;
	margin-bottom: var(--text-mb);
`;
