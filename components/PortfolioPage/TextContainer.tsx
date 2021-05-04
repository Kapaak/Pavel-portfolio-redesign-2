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
}
const TextContainer = ({ data }: Props) => {
	console.log(data, "ddaa");

	const { colors, description, title, url } = data;

	return (
		<StyledTextContainer>
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
