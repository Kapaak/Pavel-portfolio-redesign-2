import React from "react";

const variants = () => {
	return <div></div>;
};

export default variants;

export const ButtonUnderscoreVariant = {
	buttonV: {
		visible: {
			opacity: 0.8,
		},
		hidden: {
			opacity: 0.01,
		},
	},
	underlineV: (yAxis: any) => {
		return {
			visible: {
				x: [null, 100, -100, 0],
				y: [null, 0, -yAxis, -yAxis],
				opacity: [null, 0, 0, 1],
				transition: { duration: 0.5 },
				background: [
					"var(--first-col)",
					"var(--first-col)",
					"var(--first-col)",
					"var(--first-col)",
				],
			},
		};
	},
	textV: {
		visible: {
			x: [null, 0, 0, 5],
			color: [
				"var(--first-col)",
				"var(--first-col)",
				"var(--first-col)",
				"var(--third-col)",
			],
			transition: { duration: 0.5 },
		},
	},
};

export const AboutVariants = {
	rootV: {
		active: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, when: "beforeChildren" },
		},
		inactive: {
			opacity: 0,
			x: -200,
		},
	},
	nodeV: {
		active: {
			opacity: 1,
			transition: {
				duration: 0.5,
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
		inactive: {
			opacity: 0,
		},
	},
};
