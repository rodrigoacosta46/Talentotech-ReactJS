import { Card as bsCard, Button as bsButton } from "react-bootstrap";
import styled from "styled-components";
import bg from "../../assets/bg_dot_white.png";

export const Card = styled(bsCard)`
  height: 100%;
`;

export const Img = styled(bsCard.Img)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
`;

export const Body = styled(bsCard.Body)`
    --
    font-family: "Permanent Marker";
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--color-accent);
    background-image: repeating-linear-gradient(
        oklch(from var(--color-secondary) l c h / .05) 0 2px,
        transparent 2px 7px
    );

    &::after {
        content: '$ ${(p) => p.$price}';
        position: absolute;
        bottom: 15%;
        right: 0;
        width: 50%;
        height: 40px;
        font-size: 1.2em;
        padding-right: 10px;
        align-content: center;
        text-align: end;
        background: oklch(from var(--color-primary) l c h/.8) url(${bg}) right top / 500% no-repeat;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 15% 50%);
        transition: background-size .4s;
    }

    &:has(button:hover)::after {
        background-size: 1500%;
    }
`;

export const Title = styled(bsCard.Title)`
  font-family: inherit;
`;

export const Button = styled(bsButton)`
  color: var(--color-primary);
  border: 0;
  outline: 0;
  border-radius: 0px;
  background: black url(${bg}) 0% 0/300% no-repeat;
  text-align: start;
  transition: background-position 0.4s, background-color 0.4s, color 0.4s;

  &:hover {
    background-color: var(--color-primary);
    background-position: 100% 0;
    color: var(--color-secondary);
  }
`;

export const Attr = styled.span`
  border-image: linear-gradient(0deg, var(--color-accent) 5px, #0000 0) fill 0;
  //0 0 0 100vw;
`;
