import { Container as bsContainer } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled(bsContainer)`
  --rad: ${(p) => p.$rad || "10px"};

  width: min(380px, 100%);
  min-height: 100px;
  position: relative;
  filter: drop-shadow(5px 5px black);
  overflow: visible;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--color-accent) var(--bg-dots);
    clip-path: polygon(
      var(--rad) 0,
      calc(100% - var(--rad)) 0,
      100% var(--rad),
      100% calc(100% - var(--rad)),
      calc(100% - var(--rad)) 100%,
      var(--rad) 100%,
      0 calc(100% - var(--rad)),
      0 var(--rad)
    );

    z-index: -1;
  }
`;
