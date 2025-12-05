import styled from "styled-components";

const StyledTitle = styled.h2`
  width: 50vw;
  text-transform: uppercase;
  text-align: end;
  font-weight: 900;
  color: var(--color-accent);
  border-image: linear-gradient(0deg, var(--color-accent) 5px, #0000 0) fill 0;
  //0 0 0 100vw;
`;

export default function Title({ content, className="display-2" }) {
  return <StyledTitle className={`mb-4 ${className}`}>{content}</StyledTitle>;
}
