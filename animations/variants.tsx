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
			},
		};
	},
	textV: {
		visible: {
			x: [null, 0, 0, 5],
		},
	},
};
