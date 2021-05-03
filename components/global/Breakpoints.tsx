const convertToEm = (number: number) => {
	return number / 16;
};

// const devices = {
// 	mobile: convertToEm(425),
// 	tablet: convertToEm(768),
// 	desktop: convertToEm(1024),
// };

const devices = {
	tablet: convertToEm(425),
	desktop: convertToEm(1024),
};

const Breakpoints = {
	tablet: `(min-width:${devices.tablet}em)`,
	desktop: `(min-width:${devices.desktop}em)`,
};

export default Breakpoints;
