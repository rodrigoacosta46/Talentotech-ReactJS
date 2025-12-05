import styled from "styled-components";
import { Navbar as bsNav, Nav as bsMenu } from "react-bootstrap";

export const Nav = styled(bsNav)`
  --nav-h: 80px;
  min-height: var(--nav-h);
  overflow: hidden;
`;

export const Menu = styled(bsMenu)`
  display: flex;
  flex-direction: row;
  transform: skewX(-20deg);
  background-color: var(--color-secondary);
`;

export const Link = styled(bsMenu.Link)`
  --stripes-color: oklch(from var(--color-secondary) calc(l + 0.09) c h);

  color: var(--color-primary);
  background-image: repeating-linear-gradient(
    var(--stripes-color) 3px,
    #0000 7px
  );
  text-shadow: 3px 2px #000;
  text-decoration: none;
  transition: background-color .2s;

  &:focus, &:hover {
    color: oklch(from var(--color-accent) calc(l + 1) calc(c + 0.07) h);
  }

  &:focus {
    background-color: var(--color-accent);
  }

  &.accent {
    align-content: center;
    background-image: unset;
    background-color: var(--color-accent);
    min-width: 120px;
    text-align: center;

    &:hover {
      color: oklch(from var(--color-accent) calc(l + 1) calc(c + 0.07) h);
      background-color: oklch(from var(--color-accent) calc(l - 0.05) c h);
    }
  }
`;

export const Toggle = styled(bsNav.Toggle)`
  --stripe: oklch(from var(--color-secondary) calc(l + 0.4) c h);

  width: 1.5em;
  min-height: 100%;
  outline: 0;
  border: 0;
  border-radius: 0;
  padding: 0;
  background-color: #0000;
  background-image: 
    linear-gradient(
      #0000 4px, var(--stripe) 4px 8px,
      #0000 8px calc(50% - 2px),
      var(--stripe) calc(50% - 2px) calc(50% + 2px),
      #0000 calc(50% + 2px) calc(100% - 8px),
      var(--stripe) calc(100% - 8px) calc(100% - 4px),
      #0000 calc(100% - 4px) 100%
    );
  background-repeat: no-repeat;

  &:focus, &:hover {
    box-shadow: none;
    --stripe: var(--color-primary);
  }
`;

export const Offcanvas = styled(bsNav.Offcanvas)`
  background-color: var(--color-secondary);
`;

export const Button = styled.button`
  outline: none;
  border: 0;
  font-family: inherit;
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--color-primary);
  transition: background-color .4s;

  &:focus {
    background-color: oklch(from var(--color-primary) calc(l - 0.09) c h);
  }
`;