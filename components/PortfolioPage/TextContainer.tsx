//libs
import styled from "styled-components";
//components
import ColorsContainer from "./ColorsContainer";
import Button from "../global/Button";
//breakpoints
import Breakpoints from "../global/Breakpoints";

interface ObjectType {
	title: string;
	description: string;
	colors: Array<string>;
}

interface Props {
	data: ObjectType;
}
const TextContainer = ({ data }: Props) => {
	const { colors, description, title } = data;

	return (
		<StyledTextContainer>
			<h2>{title}</h2>
			<p>{description}</p>
			<ColorsContainer colors={colors} />
			<Button>Visit web</Button>
		</StyledTextContainer>
	);
};

export default TextContainer;

const StyledTextContainer = styled.div`
	h2 {
		font-weight: var(--fowe-bold);
		text-transform: uppercase;
	}
	p {
		margin-bottom: var(--text-mb);
		font-size: var(--fosi-text);
	}

	@media ${Breakpoints.tablet} {
		margin: var(--horizontal-gap) 0 0 var(--horizontal-gap);
	}
`;
