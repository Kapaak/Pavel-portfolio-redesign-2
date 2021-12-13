//libs
import styled from "styled-components";
//components
import IconContainer from "./IconContainer";
//interfaces
import { FooterType } from "../../interfaces";

interface Props {
	data: Array<FooterType>;
}

const IconsContainer = ({ data }: Props) => {
	return (
		<StyledIconsContainer>
			{data.map((dataEl, index) => (
				<IconContainer key={index} data={dataEl} />
			))}
		</StyledIconsContainer>
	);
};

const StyledIconsContainer = styled.div`
	display: flex;
	align-items: center;
`;
export default IconsContainer;
