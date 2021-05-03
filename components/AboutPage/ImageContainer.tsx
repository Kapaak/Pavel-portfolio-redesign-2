//libs
import styled from "styled-components";
import Image from "next/image";

const ImageContainer = () => {
	return (
		<StyledContainer>
			<Image
				src="/images/me.JPG"
				alt="picture of myself"
				width={384}
				height={512}
				layout="responsive"
				objectFit="contain"
				//tady muzu nastavit nejaky intrinsic nebo neco takovyho
				//a to udela, ze se to muze dostat do max vysky a dal ne
				//takze to bude asi lepsi
			/>
		</StyledContainer>
	);
};

export default ImageContainer;

const StyledContainer = styled.div`
	position: relative;
	padding: var(--horizontal-gap);
`;
