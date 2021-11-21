//libs
import styled from "styled-components";
import { breakpoints } from "./Breakpoints";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

interface Props {
	children: React.ReactNode;
	onClick?: () => void;
	scrollTo?: string;
	primaryButton?: boolean;
	src?: string;
	download?: string;
}

export const Button = ({
	children,
	scrollTo = "",
	primaryButton = false,
	src = "",
}: Props) => {
	return (
		<>
			{primaryButton ? (
				<ButtonPrimary>
					<ScrollLink to={scrollTo} smooth={true}>
						<Image src={src} height={18} width={18} />
						<a>{children}</a>
					</ScrollLink>
				</ButtonPrimary>
			) : (
				<ButtonSecondary>
					<ScrollLink to={scrollTo} smooth={true}>
						<a>{children}</a>
					</ScrollLink>
				</ButtonSecondary>
			)}
		</>
	);
};

const ButtonGlobal = styled.button`
	border: none;
	font-family: inherit;
	box-shadow: var(--shadow);

	a {
		display: inline-flex;
		align-items: center;
		padding: 0.55rem 0.8rem;
		font-size: var(--fosi-button);
	}
`;

const ButtonSecondary = styled(ButtonGlobal)`
	border-radius: 0.6rem;
	background: var(--bg-col);
	border: 1px solid var(--col1);

	a {
		margin: 0 0.5rem;
	}
`;

const ButtonPrimary = styled(ButtonGlobal)`
	border: 1px solid var(--col1);
	background-color: var(--col1);
	border-radius: 0.6rem;

	span {
		display: inline-block;
		margin: 0 0.25rem !important;
	}
	a {
		padding: 0.55rem 0.8rem;
		color: var(--bg-col);
		margin-right: 0.25rem;
	}
`;
