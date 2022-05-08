//libs
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
//interfaces
import { FooterType } from "../../interfaces";

interface Props {
	data: FooterType;
}

const IconContainer = ({ data }: Props) => {
	return (
		<Link href={data.link} passHref={true}>
			<StyledIconContainer>
				<Image src={data.icon} width={20} height={20} alt={data.name} />
			</StyledIconContainer>
		</Link>
	);
};

export default IconContainer;

const StyledIconContainer = styled.a`
	display: inline-flex;
	position: relative;
	padding: 0.65rem;
	border-radius: 0.5rem;
	transition: all 0.3s;
	border: 1px solid var(--col1);

	& + & {
		margin-left: 1rem;
	}

	&:hover {
		border: 1px solid var(--bg-col);
		transition: all 0.3s;
	}
`;
