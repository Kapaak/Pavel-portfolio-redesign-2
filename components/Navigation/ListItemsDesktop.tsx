//libraries
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
//components
import { breakpoints } from "styles/customs/Breakpoints";

const ListItemsDesktop = () => {
	return (
		<StyledListItemsDesktop>
			<StyledListItem>
				<ScrollLink to="home-page" smooth={true}>
					Home
				</ScrollLink>
			</StyledListItem>
			<StyledListItem>
				<ScrollLink to="about-page" smooth={true}>
					About
				</ScrollLink>
			</StyledListItem>
			<StyledListItem>
				<ScrollLink to="projects-page" smooth={true}>
					Projects
				</ScrollLink>
			</StyledListItem>
			<StyledListItem>
				<ScrollLink to="contact-page" smooth={true}>
					Contact
				</ScrollLink>
			</StyledListItem>
		</StyledListItemsDesktop>
	);
};

const StyledListItemsDesktop = styled.div`
	display: none;
	margin-left: auto;
	gap: 3rem;
	margin-right: 3rem;

	@media ${breakpoints.desktop} {
		display: flex;
	}
`;

const StyledListItem = styled.div`
	width: 7rem;
	a {
		font-size: var(--f-t);
		color: var(--col1);
		padding: 0.8rem 1.3rem;
		border-radius: 0.4rem;
		cursor: pointer;

		&:hover {
			font-weight: 600;
		}
	}
`;

export default ListItemsDesktop;
