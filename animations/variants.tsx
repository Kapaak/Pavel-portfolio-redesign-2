export const buttonUnderscoreVariant = {
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

export const aboutVariants = {
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

export const listItemsVariants = {
	rootV: {
		inactive: {
			opacity: 0,
			height: "0vh",
			transition: {
				when: "afterChildren",
				staggerChildren: 0.2,
			},
		},
		active: {
			opacity: 1,
			height: "100vh",
			transition: {
				staggerChildren: 0.2,
				duration: 0.3,
				when: "beforeChildren",
			},
		},
	},
	nodeV: {
		inactive: {
			opacity: 0,
			x: 200,
			transitionEnd: {
				pointerEvents: "none",
			},
		},
		active: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 1,
				type: "tween",
			},
			transitionEnd: {
				pointerEvents: "auto",
			},
		},
	},
};

export const portfolioVariants = {
	rootV: {
		active: {
			transition: {
				duration: 0.5,
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
		inactive: {},
	},
	nodeV: {
		inactive: {
			x: -20,
			opacity: 0,
		},
		active: {
			x: 0,
			opacity: 1,
		},
	},
	portfolioNodeLeft: {
		inactive: {
			x: -200,
			transition: { duration: 0.6 },
		},
		active: {
			x: 0,
			transition: { duration: 0.6 },
		},
	},
	portfolioNodeRight: {
		inactive: {
			x: 200,
			transition: { duration: 0.6 },
		},
		active: {
			x: 0,
			transition: { duration: 0.6 },
		},
	},
};

export const arcAnimationVariant = {
	active: {
		rotate: -90,
		pathLength: 1,
		opacity: 0,
		transition: { duration: 2.5 },
	},
	inactive: {
		rotate: 0,
		pathLength: 0,
		opacity: 1,
	},
};
export const arcAnimationVariant2 = {
	active: {
		rotate: -45,
		pathLength: 1,
		transition: { duration: 3 },
	},
	inactive: {
		rotate: -45,
		pathLength: 0,
		transition: { duration: 3 },
	},
};
