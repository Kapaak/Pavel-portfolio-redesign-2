//libraries
import { FlexWrapper } from "@/customs/FlexWrapper";
import styled from "styled-components";

interface Props {
	active: boolean;
	colors: Array<string>;
	fonts: Array<string>;
	tech: Array<string>;
}

const ProjectDetails = ({ active, colors, fonts, tech }: Props) => {
	const outputTech = () => {
		return tech.map((t, i) => {
			if (i + 1 !== tech.length)
				return (
					<div key={i} style={{ display: "flex", gap: ".5rem" }}>
						<p>{t}</p>
						<p>/</p>
					</div>
				);
			return <p key={i}>{t}</p>;
		});
	};

	const outputColors = () => {
		return colors.map((c, i) => {
			return <ColoredBox key={i} color={c} />;
		});
	};

	const outputFonts = () => {
		return fonts.map((f, i) => {
			if (i + 1 !== tech.length && tech.length === 1)
				return (
					<SmallFlexWrapper key={i} direction="row" gap=".5rem">
						<p>{f}</p>
						<p>/</p>
					</SmallFlexWrapper>
				);
			return <p key={i}>{f}</p>;
		});
	};

	return (
		<DetailsWrapper active={active}>
			<DetailsLeft justify="space-between">
				<p>Tech</p>
				<p>Colors</p>
				<p>Fonts</p>
			</DetailsLeft>
			<DetailsRight justify="space-between">
				<SmallFlexWrapper direction="row" gap=".5rem">
					{outputTech()}
				</SmallFlexWrapper>
				<SmallFlexWrapper direction="row" gap="1rem">
					{outputColors()}
				</SmallFlexWrapper>
				<SmallFlexWrapper direction="row" gap=".5rem">
					{outputFonts()}
				</SmallFlexWrapper>
			</DetailsRight>
		</DetailsWrapper>
	);
};

const SmallFlexWrapper = styled(FlexWrapper)`
	height: auto;
`;

const ColoredBox = styled.div<{ color: string }>`
	border-radius: 0.4rem;
	box-shadow: 0 0 20px rgba(8, 1, 1, 0.125);
	width: 2rem;
	height: 2rem;
	background-color: ${({ color }) => (color ? color : "#000")};
`;

const DetailsLeft = styled(FlexWrapper)`
	gap: 1rem;
	padding: 2rem 0 0;
	font-weight: var(--fowe-bold);
`;

const DetailsRight = styled(FlexWrapper)`
	gap: 1rem;
	padding: 2rem 0 0;
	height: auto;
`;

const DetailsWrapper = styled.div<{ active: boolean }>`
	display: ${({ active }) => (active ? "flex" : "none")};
	gap: 2rem;
	border-top: 1px solid var(--col4);
	margin-top: 2rem;
`;

export default ProjectDetails;
