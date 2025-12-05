import { styled, keyframes } from "styled-components";
import { Container as BsContainer, Image } from "react-bootstrap";
import bg from "../../assets/bg_dot_white.png";
import bgDark from "../../assets/bg_dot_black.png";

export const slide = keyframes`
  from {
    translate: calc(100% * var(--dir, 1));
    opacity: 0;
  }
  to {
    translate: translateX(0%);
    opacity: 1;
  }
`;

export const shadow = keyframes`
  from {
    filter: drop-shadow(0px 0px var(--shadow));
  }
  to {
    filter: drop-shadow(-10px 5px var(--shadow));
  }
`;

export const Container = styled(BsContainer)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: oklch(from var(--color-accent) l c h / 80%);
    background-image: 
      repeating-linear-gradient(
        oklch(from var(--color-secondary) l c h / 15%) 0 2px,
        transparent 2px 7px
      ),radial-gradient(
        300px 600px at center -70%,
        var(--color-primary) 0 300px,
        transparent calc(300px + 0.1%) 100%
      );
    clip-path: polygon(
      0 0,
      100% 0,
      100% 80%,
      80% 80%,
      75% 100%,
      25% 100%,
      20% 80%,
      0 80%
    );

    z-index: -1;
  }
`;

export const Wrapper = styled(BsContainer)`
  position: relative;
  isolation: isolate;
  width: max(300px, 30vw);
  height: calc(100vh - 80px);
  max-height: 700px;
  font-family: "Permanent Marker", cursive;

  &::before, &::after {
    content: '-${(p) => p.$dmg}';
    position: absolute;
    pointer-events: none;
    width: fit-content;
    color: var(--color-primary);
    font-size: 2em;
    -webkit-text-stroke: 2px black;
    top: ${(p) => p.$posY}px;
    left: ${(p) => p.$posX}px;
    transition: translate .7s, opacity 1s;

    z-index: 1;
  }
  
  &::before {
    opacity: ${(p) => p.$changed ? "1" : "0"};
    translate: 0 ${(p) => p.$changed ? "100%" : "0"};
    scale: ${(p) => p.$changed ? "0" : "1"};
  }
    
  &::after {
    opacity: ${(p) => p.$changed ? "0" : "1"};
    translate: 0 ${(p) => p.$changed ? "0" : "100%"};
    scale: ${(p) => p.$changed ? "1" : "0"};
  }
`;

export const Img = styled(Image)`
  display: block;
  margin: auto;
  width: auto;
  height: 100%;
`;

export const CharacterImg = styled(Img)`
  --shadow: ${(p) =>
    p.$shadow || "oklch(from var(--color-secondary) 0 c h / 0.2)"};

  display: block;
  margin: auto;
  width: auto;
  height: 100%;
  filter: drop-shadow(-10px 5px var(--shadow));
  -webkit-user-drag: none; /* For WebKit browsers (Chrome, Safari, etc.) */
  user-drag: none; /* Standard property, but not widely supported yet */
  user-select: none; /* Prevents text selection, often used in conjunction with drag prevention */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transform: translateX(0);
  transition: transform 0.2s;

  &.animateBoth {
    --dir: 1;
    animation: ${slide} 0.7s ease both, ${shadow} 0.7s ease-in both;
  }

  &:active {
    transform: translateX(-5%);
  }
`;

export const Attribute = styled.span`
  position: relative;
  min-width: 200px;
  background-color: ${(p) => p.$primary || "var(--color-primary)"};
  transform: skewX(-20deg);
  box-shadow: 5px 5px var(--color-secondary);
  color: var(--color-primary);
  animation: both ease ${slide} 0.7s ${(p) => p.$delay || "0s"};

  &::before {
    content: "${(p) => p.content || "label"}";
    font-family: var(--bs-body-font-family);
    position: absolute;
    top: -0.9em;
    left: 0;
    font-size: 0.7em;
    background-color: ${(p) => p.$primary || "var(--color-primary)"};
    text-transform: capitalize;
    color: var(--color-secondary);
    font-weight: bold;
    padding: 0 5px;
  }
`;

export const GroupItem = styled.a`
  --dir: ${(p) => (p.$dir ? -1 : "")};

  min-height: 50px;
  text-decoration: none;
  text-align: end;
  background: url(${bg}) right
    top / 100% no-repeat;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%);
  transform-origin: left center;
  transition: transform 0.2s, background-size 0.4s, color 0.4s;
  color: oklch(from var(--color-secondary) calc(l + 0.5) c h);
  animation: both ease ${slide} 0.4s ${(p) => p.$delay || "0s"};

  &.active {
    color: var(--color-secondary);
    transform: scale(1.1);
    background-size: 300%;
  }
`;

export const AttrSection = styled.div`
  h4 {
    position: relative;
    isolation: isolate;
    text-align: end;
    color: ${(p) => p.$color || "var(--color-primary)"};
    line-height: 2;
    padding-right: 10px;
    margin-bottom: 1em;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 20px 100%);
      background: ${(p) => p.$bg || "var(--color-secondary)"}
        url(${(p) =>
          p.$dot ? bg : bgDark})
        right top / 0 no-repeat;
      clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
      transform: scale(0.5);
      transform-origin: rigth center;
      opacity: 0;
      transition: transform 0.2s, clip-path 0.7s, opacity 0.7s,
        background-size 0.7s;

      z-index: -1;
    }
  }

  p {
    min-height: auto;
    overflow: auto;
  }

  &.show {
    h4 {
      filter: drop-shadow(
        -5px 4px ${(p) => p.$shadow || "var(--color-accent)"}
      );

      &::before {
        transform: scale(1);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 20px 100%);
        opacity: 1;
        background-size: 150%;
      }
    }
  }
`;

export const Randomize = styled.button`
  position: absolute;
  top: 40px;
  left: 0;
  background-color: var(--color-secondary);
  color: var(--color-primary);
`;
