//components
import IconsContainer from "./IconsContainer";
//styles
import styled from "styled-components";
//interfaces
import { FooterObject } from "../global/Interfaces";
import Breakpoints from "../global/Breakpoints";

interface Props {
	data: Array<FooterObject>;
}

const index = ({ data }: Props) => {
	const year = new Date().getFullYear();

	return (
		<StyledFooter>
			<p>© {year} Pavel Zapletal</p>
			<IconsContainer data={data} />
		</StyledFooter>
	);
};

export default index;

const StyledFooter = styled.div`
	background-color: var(--first-col);
	display: flex;
	flex-direction: column;
	align-content: center;
	padding: 1.2rem;
	color: var(--fourth-col);

	p {
		font-size: var(--fosi-text);
		margin-bottom: 0.6rem;
	}

	@media ${Breakpoints.tablet} {
		flex-direction: row;
		justify-content: center;

		p {
			margin: 0 var(--horizontal-gap) 0 0;
		}
	}
`;
