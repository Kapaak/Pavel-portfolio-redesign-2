//libs
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
	noUnderscore?: boolean;
	onClick?: () => void;
}

const Button = ({ children, noUnderscore, onClick }: Props) => {
	const handleClick = () => {
		if (onClick) onClick();
	};

	return noUnderscore ? (
		<StyledButtonWithoutUndersore onClick={handleClick}>
			{children}
		</StyledButtonWithoutUndersore>
	) : (
		<StyledButton>{children}</StyledButton>
	);
};

export default Button;

const StyledButtonWithoutUndersore = styled.button`
	position: relative;
	border: none;
	padding: 1rem 0;
	margin-bottom: var(--text-mb);
	font-size: var(--fosi-button);
	background-color: transparent;
	cursor: pointer;
	z-index: 1;
	letter-spacing: var(--letter-spacing);
	line-height: var(--line-height);

	&:first-child {
		margin-right: 2rem;
	}
`;

const StyledButton = styled(StyledButtonWithoutUndersore)`
	&::before {
		content: "";
		position: absolute;
		height: 0.3rem;
		width: 100%;
		bottom: 0;
		background-color: var(--first-col);
	}
`;
