//libraries
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
//breakpoints
import Breakpoints from "../components/global/Breakpoints";

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

        --xd-recalc: 1.1;

        --fosi-home-headline: calc(7rem / var(--xd-recalc));
        --fosi-home-subheadline: calc(2.5rem / var(--xd-recalc));
        --fosi-headline: calc(5.6rem / var(--xd-recalc));
        --fosi-subheadline: calc(2.5rem / var(--xd-recalc));
        --fosi-text: calc(1.8rem / var(--xd-recalc));
        --fosi-nav: calc(2.8rem / var(--xd-recalc)); 
        --fosi-button: calc(1.7rem / var(--xd-recalc)); 
        --fosi-nav:calc(2rem / var(--xd-recalc)); 

        --horizontal-gap:2rem;
        --vertical-gap:7rem;

        --headline-mb:2.5rem;
        --text-mb: 1.5rem;
        --letter-spacing:.1rem;
        --line-height:1.6;

        --br-main:1.5rem;

        --box-width:26rem;
        --box-height:calc(var(--box-width)*1.5);
    }

    html{
        font-size:62.5%;
    }

    body{
        font-size:1.6rem;
        font-family: 'Noto Sans', sans-serif;
        letter-spacing:var(--letter-spacing);

        h1{
            font-size: var(--fosi-headline);
		    font-weight: var(--fowe-reg);
            margin-bottom: var(--headline-mb);
            
	}

        h2{
            font-size: var(--fosi-subheadline);
		    font-weight: var(--fowe-reg);
            margin-bottom: var(--text-mb);   
        }

        p{
            line-height:var(--line-height);
        }
    }


    @media ${Breakpoints.tablet}{
		:root {
			--xd-recalc: .87;
            --horizontal-gap:4rem;

            --fosi-text: calc(1.5rem / var(--xd-recalc));
            --box-width:30rem;
		}
    }

    @media ${Breakpoints.desktop}{
        :root{
            --xd-recalc:.86;
            --text-mb:2.5rem;
            --box-width:36rem;
        }
    }
    @media ${Breakpoints.desktopB}{
        :root{
            --xd-recalc:.75;
            /* --horizontal-gap:8rem;*/
            --vertical-gap:8rem;
            --box-width:42rem;
            --box-height:calc(var(--box-width)*1.4);
        }
    }
    
  

`;

/* DELETE */
export const Underscore = styled.span`
	position: relative;
	z-index: 1;
	display: inline-block;
	transition: all 0.5s ease;
	font-size: var(--fosi-text);

	&::before {
		content: "";
		position: absolute;
		bottom: -0.2rem;
		left: 0;
		width: 100%;
		background-color: var(--second-col);
		height: 0.3rem;
	}

	&:hover {
		transform: translateY(-0.5rem);
		transition: all 0.5s ease;
	}
`;

export default GlobalStyles;
