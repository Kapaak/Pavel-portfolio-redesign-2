//libs
import styled from "styled-components";
import Image from "next/image";
import { breakpoints } from "@/styledComponents/index";
import { motion } from "framer-motion";

const ImageContainer = () => {
	return (
		<StyledContainer
		// initial={{ x: 80 }} animate={{ x: 0 }}
		>
			<Image
				src="/images/me.JPG"
				alt="picture of myself"
				width={384}
				height={512}
				// layout="responsive"
				objectFit="contain"
				//tady muzu nastavit nejaky intrinsic nebo neco takovyho
				//a to udela, ze se to muze dostat do max vysky a dal ne
				//takze to bude asi lepsi
			/>
		</StyledContainer>
	);
};

export default ImageContainer;

const StyledContainer = styled(motion.div)`
	position: relative;
	align-self: center;
	text-align: center;
	flex: 1 1 37%;
	max-width: 33rem;

	img {
		transform: scale(1.2) translate(-30px, -40px);
	}

	@media ${breakpoints.desktopB} {
		flex: 1 1 40%;
		max-width: 40rem;
	}
`;
