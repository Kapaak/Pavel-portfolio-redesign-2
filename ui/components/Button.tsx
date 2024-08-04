//libs
import styled from "styled-components";
import Image from "next/image";
import { breakpoints } from "../theme";
import NextLink from "next/link";

interface Props {
  children: React.ReactNode;
  scrollTo?: string;
  primaryButton?: boolean;
  src?: string;
  download?: string;
  alt?: string;
}

export const Button = ({
  children,
  scrollTo = "",
  primaryButton = false,
  src = "",
  alt = "",
}: Props) => {
  return (
    <>
      {primaryButton ? (
        <ButtonPrimary>
          <NextLink href={`#${scrollTo}`}>
            <span>{children}</span>
            {src.length !== 0 && (
              <Image src={src} height={18} width={18} alt={alt} />
            )}
          </NextLink>
        </ButtonPrimary>
      ) : (
        <ButtonSecondary>
          <NextLink href={`#${scrollTo}`}>{children}</NextLink>
        </ButtonSecondary>
      )}
    </>
  );
};

const ButtonGlobal = styled.button`
  border: none;
  font-family: inherit;
  cursor: pointer;
  border-radius: 0.6rem;

  a {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.4rem 0 1.4rem 1.2rem;
  }

  img {
    flex-shrink: 0;
    margin-right: 0.4rem;
  }

  span {
    color: inherit;
    font-size: var(--f-btn);
  }
`;

const ButtonSecondary = styled(ButtonGlobal)`
  box-shadow: 0 0 30px rgba(8, 1, 1, 0.1);
  transition: all 0.3s ease;

  a {
    text-decoration: none;
    margin: 0 0.5rem;
    padding: 1.4rem 1.2rem;
    color: inherit;
  }

  span {
    color: var(--col1);
  }

  &:hover {
    box-shadow: 0 0 15px rgba(8, 1, 1, 0.04), 0 0 40px rgba(8, 1, 1, 0.1);
    transition: all 0.3s ease;
  }
`;

const ButtonPrimary = styled(ButtonGlobal)`
  background-color: var(--col1);
  box-shadow: 0 0 20px rgba(8, 1, 1, 0.08);
  transition: width 0.1s linear;
  width: 14rem;

  span {
    display: inline-block;
    color: var(--bg-col);
  }

  a {
    text-decoration: none;
    margin: 0 0.6rem;
    color: inherit;
  }

  @media ${breakpoints.desktop} {
    &:hover {
      box-shadow: 0 0 15px rgba(8, 1, 1, 0.04), 0 0 40px rgba(8, 1, 1, 0.1);
      transition: all 0.2s linear;
      width: 15.5rem;
    }
  }
`;
