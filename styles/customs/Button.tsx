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
	onClick,
}: Props) => {
	return (
		<>
			{primaryButton ? (
				<ButtonPrimary>
					<ScrollLink to={scrollTo} smooth={true}>
						{src.length !== 0 && <Image src={src} height={18} width={18} />}
						<p>{children}</p>
					</ScrollLink>
				</ButtonPrimary>
			) : (
				<ButtonSecondary>
					<ScrollLink to={scrollTo} smooth={true}>
						<p>{children}</p>
					</ScrollLink>
				</ButtonSecondary>
			)}
		</>
	);
};

const ButtonGlobal = styled.button`
	border: none;
	font-family: inherit;
	cursor: pointer;
	border-radius: 0.6rem;

	a {
		display: inline-flex;
		gap: 1rem;
	}

	p {
		font-size: var(--f-btn);
	}

	a {
		padding: 0.8rem 0.9rem;
	}

	&:hover {
		transition: transform 0.3s linear;
		transform: scale(1.06);
	}
`;

const ButtonSecondary = styled(ButtonGlobal)`
	box-shadow: 0 0 20px rgba(8, 1, 1, 0.125);
	/* border: 1px solid var(--col1); */

	a {
		margin: 0 0.5rem;
	}
`;

const ButtonPrimary = styled(ButtonGlobal)`
	/* border: 1px solid var(--col1); */
	background-color: var(--col1);
	box-shadow: var(--shadow);

	span {
		display: inline-block;
		/* margin: 0 0.25rem !important; */
	}

	p {
		color: var(--bg-col);
	}

	a {
		margin: 0 0.6rem;
	}
`;
