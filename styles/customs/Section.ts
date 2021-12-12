// import styled from "styled-components";

// interface Props {
// 	children: React.ReactNode;
// 	invert?: boolean;
// 	id: string;
// 	background?: string;
// }

// export const Section = ({
// 	children,
// 	invert = false,
// 	id,
// 	background = "",
// }: Props) => {
// 	return (
// 		<PageSection id={id} invert={invert} background={background}>
// 			<div>{children}</div>
// 		</PageSection>
// 	);
// };

// const PageSection = styled.section<{ invert: boolean; background: string }>`
// 	background-color: ${({ invert, background }) =>
// 		invert ? "var(--col1)" : background};
// 	color: ${({ invert }) => (invert ? "var(--bg-col)" : "inherit")};
// 	padding: var(--vertical-gap) var(--horizontal-gap);

// 	& > div {
// 		max-width: var(--max-width);
// 		margin: 0 auto;
// 	}
// `;

import styled from "styled-components";

export const Section = styled.section`
	position: relative;
`;
