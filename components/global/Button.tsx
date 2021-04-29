//libs
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
	noUnderscore?: boolean;
}

const Button = ({ children, noUnderscore }: Props) => {
	return noUnderscore ? (
		<StyledButtonWithoutUndersore>{children}</StyledButtonWithoutUndersore>
	) : (
		<StyledButton>{children}</StyledButton>
	);
};

export default Button;

const StyledButtonWithoutUndersore = styled.button`
	position: relative;
	border: none;
	padding: 1rem 0;
	font-size: var(--fosi-button);
	background-color: transparent;
	z-index: 1;

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
