//components
import IconsContainer from "./IconsContainer";
//styles
import styled from "styled-components";
//interfaces
import { FooterType } from "../../interfaces";
import { breakpoints, Text } from "styles/customs";

interface Props {
	data: Array<FooterType>;
}

const Footer = ({ data }: Props) => {
	const year = new Date().getFullYear();

	return (
		<StyledFooter>
			<Text>© {year} Pavel Zapletal</Text>
			<IconsContainer data={data} />
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.div`
	background-color: var(--first-col);
	display: flex;
	flex-direction: column;
	align-content: center;
	padding: 0 var(--horizontal-gap) var(--horizontal-gap);
	color: var(--fourth-col);
	gap: 1rem;

	@media ${breakpoints.tabletS} {
		flex-direction: row;
		justify-content: center;
		gap: 2rem;
		padding-bottom: 2rem;

		align-items: center;
	}
`;
