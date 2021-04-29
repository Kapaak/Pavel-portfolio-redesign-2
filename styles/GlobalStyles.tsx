//libraries
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    :root{
        --first-col: #0D1321;
        --second-col: #2F45D5;
        --third-col:#CCCCCC;
        --fourth-col:#F0F0F0;
        --fowe-reg:400;
        --fowe-bold:700;

        --xd-recalc: .9;

        --fosi-home-headline: calc(7rem / var(--xd-recalc));
        --fosi-home-subheadline: calc(2.5rem / var(--xd-recalc));
        --fosi-headline: calc(5.6 / var(--xd-recalc));
        --fosi-headline: calc(2.5rem / var(--xd-recalc));
        --fosi-text: calc(1.8rem / var(--xd-recalc));
        --fosi-nav: calc(2.8rem / var(--xd-recalc)); 
        --fosi-button: calc(1.7rem / var(--xd-recalc)); 
        --fosi-nav:calc(2rem / var(--xd-recalc)); 

        --horizontal-gap:2rem;
        --vertical-gap:7rem;
    }

    html{
        font-size:62.5%;
    }

    body{
        font-size:1.6rem;
        font-family: 'Noto Sans', sans-serif;
    }

`;
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

export const Breakpoints = {
	tablet: `(min-width:${devices.tablet}em)`,
	desktop: `(min-width:${devices.desktop}em)`,
};

export default GlobalStyles;
