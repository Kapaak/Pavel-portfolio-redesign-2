//libs
import styled from "styled-components";
//components
import ColorsContainer from "./ColorsContainer";
import { Button } from "@/styledComponents/index";
import Link from "next/link";
//breakpoints
import { breakpoints } from "@/styledComponents/index";
//styles
import { Highlight } from "../../styles/GlobalStyles";

interface ObjectType {
	title: string;
	description: string;
	colors: Array<string>;
	url: string;
	status?: string;
}

interface Props {
	data: ObjectType;
	margin: string;
}
const TextContainer = ({ data, margin }: Props) => {
	const { colors, description, title, url, status } = data;
	console.log(status);

	return (
		<StyledTextContainer margin={margin}>
			<h2>{title}</h2>
			<p>
				{description}
				<br />
				{status ? <Highlight>{status}</Highlight> : null}
			</p>
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

	@media ${breakpoints.tablet} {
		margin: ${({ margin }) => margin};
	}
`;
