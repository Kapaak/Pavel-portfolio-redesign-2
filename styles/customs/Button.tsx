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
						<p>{children}</p>
						{src.length !== 0 && <Image src={src} height={18} width={18} />}
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
		display: flex;
		padding: 0.8rem 0.9rem;
		justify-content: space-between;
		gap: 1rem;
		color: inherit;
	}

	p {
		font-size: var(--f-btn);
	}
`;

const ButtonSecondary = styled(ButtonGlobal)`
	box-shadow: 0 0 30px rgba(8, 1, 1, 0.1);
	transition: all 0.3s ease;

	a {
		margin: 0 0.5rem;
	}

	&:hover {
		box-shadow: 0 0 15px rgba(8, 1, 1, 0.04), 0 0 40px rgba(8, 1, 1, 0.1);
		transition: all 0.3s ease;
	}
`;

const ButtonPrimary = styled(ButtonGlobal)`
	background-color: var(--col1);
	box-shadow: 0 0 20px rgba(8, 1, 1, 0.08);
	transition: width 0.1s linear;
	width: 14rem;

	span {
		display: inline-block;
	}

	p {
		color: var(--bg-col);
	}

	a {
		margin: 0 0.6rem;
	}

	@media ${breakpoints.desktop} {
		&:hover {
			box-shadow: 0 0 15px rgba(8, 1, 1, 0.04), 0 0 40px rgba(8, 1, 1, 0.1);
			transition: all 0.2s linear;
			width: 15.5rem;
		}
	}
`;
