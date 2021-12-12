const convertToEm = (number: number) => {
	return number / 16;
};

const devices = {
	tabletS: convertToEm(500),
	tablet: convertToEm(768),
	desktop: convertToEm(1024),
	desktopX: convertToEm(1330),
};

export const breakpoints = {
	tabletS: `(min-width:${devices.tabletS}em)`,
	tablet: `(min-width:${devices.tablet}em)`,
	desktop: `(min-width:${devices.desktop}em)`,
	desktopX: `(min-width:${devices.desktopX}em)`,
};
