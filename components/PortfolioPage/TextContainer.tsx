//libs
import styled from "styled-components";
//components
import ColorsContainer from "./ColorsContainer";
import Button from "../global/Button";
import Link from "next/link";
//breakpoints
import Breakpoints from "../global/Breakpoints";

interface ObjectType {
	title: string;
	description: string;
	colors: Array<string>;
	url: string;
}

interface Props {
	data: ObjectType;
	margin: string;
}
const TextContainer = ({ data, margin }: Props) => {
	const { colors, description, title, url } = data;

	return (
		<StyledTextContainer margin={margin}>
			<h2>{title}</h2>
			<p>{description}</p>
			<ColorsContainer colors={colors} />
			<Link href={url} passHref={true}>
				<a>
					<Button>Visit web</Button>
				</a>
			</Link>
		</StyledTextContainer>
	);
};

export default TextContainer;

const StyledTextContainer = styled.div<{ margin: string }>`
	flex: 1 1 50%;
	align-self: flex-end;
	z-index: 2;
	h2 {
		font-weight: var(--fowe-bold);
		text-transform: uppercase;
	}
	& > p {
		margin-bottom: var(--text-mb);
		font-size: var(--fosi-text);
	}

	@media ${Breakpoints.tablet} {
		margin: ${({ margin }) => margin};
	}
`;
