//libs
import styled from "styled-components";
import Image from "next/image";

//components
import TextContainer from "./TextContainer";

//breakpoints
import { breakpoints } from "@/styledComponents/index";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			{/* tohle zobraz jen na velkym */}
			{/* <Image
				src="/images/me.JPG"
				alt="picture of myself"
				width={384}
				height={512}
				// layout="responsive"
				objectFit="contain"
				//tady muzu nastavit nejaky intrinsic nebo neco takovyho
				//a to udela, ze se to muze dostat do max vysky a dal ne
				//takze to bude asi lepsi
			/> */}
			<TextContainer />
		</StyledInnerContainer>
	);
};

export default InnerContainer;

const StyledInnerContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media ${breakpoints.desktop} {
		flex-direction: row;
	}
`;
