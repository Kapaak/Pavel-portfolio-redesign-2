//components
import IconsContainer from "./IconsContainer";
//styles
import styled from "styled-components";
//interfaces
import { FooterObject } from "../../interfaces";
import { breakpoints, Text } from "@/styledComponents/index";

interface Props {
	data: Array<FooterObject>;
}

const index = ({ data }: Props) => {
	const year = new Date().getFullYear();

	return (
		<StyledFooter>
			<Text>© {year} Pavel Zapletal</Text>
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

	@media ${breakpoints.desktop} {
		margin-top: -6rem;
	}
`;
