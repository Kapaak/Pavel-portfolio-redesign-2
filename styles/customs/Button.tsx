//libs
import styled from "styled-components";
import { breakpoints } from "./Breakpoints";
import Image from "next/image";

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
  alt,
}: Props) => {
  return (
    <>
      {primaryButton ? (
        <ButtonPrimary>
          <a href={`#${scrollTo}`}>
            <p>{children}</p>
            {src.length !== 0 && (
              <Image src={src} height={18} width={18} alt={alt} />
            )}
          </a>
        </ButtonPrimary>
      ) : (
        <ButtonSecondary>
          <a href={`#${scrollTo}`}>
            <p>{children}</p>
          </a>
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
    padding: 0.8rem 0.9rem;
    justify-content: space-between;
    gap: 1rem;
  }

  p {
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
    color: inherit;
  }

  p {
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
  }

  p {
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
