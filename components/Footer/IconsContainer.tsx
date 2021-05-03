//components
import IconContainer from "./IconContainer";
//interfaces
import { FooterObject } from "../global/Interfaces";

interface Props {
	data: Array<FooterObject>;
}

const IconsContainer = ({ data }: Props) => {
	return (
		<div>
			{data.map((dataEl, index) => (
				<IconContainer key={index} data={dataEl} />
			))}
		</div>
	);
};

export default IconsContainer;
