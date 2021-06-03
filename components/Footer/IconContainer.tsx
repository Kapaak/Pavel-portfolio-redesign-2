//libs
import Link from "next/link";
import Image from "next/image";
//styles
import styled from "styled-components";
//interfaces
import { FooterObject } from "../global/Interfaces";
interface Props {
	data: FooterObject;
}

const IconContainer = ({ data }: Props) => {
	return (
		<Link href={data.link} passHref={true}>
			<StyledIconContainer>
				<Image src={data.icon} width={20} height={20} />
			</StyledIconContainer>
		</Link>
	);
};

export default IconContainer;

const StyledIconContainer = styled.a`
	display: inline-flex;
	position: relative;
	padding: 0.65rem;
	border-radius: 50%;
	transition: all 0.3s;

	& + & {
		margin-left: 1rem;
	}

	&:hover {
		background-color: var(--second-col);
		transition: all 0.3s;
	}
`;
