//libraries
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
//breakpoints
import { breakpoints } from "@/styledComponents/index";

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

        --col1:#0D1321;
        --col2:#E8E8DD;
        --bg-col:#F2F1EE;

        --shadow:0 0 20px rgba(8, 1, 1, 0.225);

        --fowe-reg:400;
        --fowe-bold:700;

        --xd-recalc: 1.1;

        --f-mhl: calc(5rem / var(--xd-recalc));
        --f-mshl: calc(2.3rem / var(--xd-recalc));
        --f-hl: calc(4.6rem / var(--xd-recalc));
        --f-btn: calc(1.6rem / var(--xd-recalc)); 
        --f-t: calc(1.8rem / var(--xd-recalc));
        
        --fosi-subheadline: calc(2.5rem / var(--xd-recalc));
        --fosi-nav: calc(2.8rem / var(--xd-recalc)); 
        --fosi-nav:3rem; 

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
        font-family: 'Karla', sans-serif;

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


    @media ${breakpoints.tablet}{
		:root {
			--xd-recalc: .87;
            --horizontal-gap:4rem;

            --box-width:30rem;
            --fosi-text: calc(1.5rem / var(--xd-recalc));
            --fosi-nav:4rem;
		}
    }

    @media ${breakpoints.desktop}{
        :root{
            --xd-recalc:.86;
            --text-mb:2.5rem;
            --box-width:36rem;
        }
    }
    @media ${breakpoints.desktopB}{
        :root{
            --xd-recalc:.75;
            /* --horizontal-gap:8rem;*/
            --vertical-gap:8rem;
            --box-width:42rem;
            --box-height:calc(var(--box-width)*1.4);
        }
    }
    
  

`;

export const Highlight = styled.span`
	color: var(--second-col);
	font-weight: var(--fowe-bold);
`;

export default GlobalStyles;
