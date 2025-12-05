import { styled, keyframes } from "styled-components";

const fill = keyframes`
    0% {
    background-size: 100% var(--h), 100% var(--h), 100% var(--h);
  }
  25% {
    background-size: 50% var(--h), 80% var(--h), 30% var(--h);
  }
  50% {
    background-size: 100% var(--h), 20% var(--h), 90% var(--h);
  }
  75% {
    background-size: 40% var(--h), 60% var(--h), 100% var(--h);
  }
  100% {
    background-size: 20% var(--h), 100% var(--h), 40% var(--h);
`;

const flicker = keyframes`
  0%, 100% { opacity: 1; }
    20% { opacity: 0.8; }
  50% { opacity: 0.3; }
  70% { opacity: 0.5; }
`;

export const Scouter = styled.ul`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  justify-content: center;
  background-color: var(--color-primary);
  width: 25px;
  height: 50vh;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: red;
    clip-path: polygon(0 25%, 50% 25%, 50% 75%, 0 75%);
  }

  z-index: 1;
`;

export const Scan = styled.div`
  --color: rgb(255, 247, 2);
  --gib-color: oklch(from var(--color) l c h / 0.9);

  display: ${(p) => (p.$show ? "flex" : "none")};
  flex-direction: column;
  justify-content: end;
  position: absolute;
  left: 100%;
  width: calc(100vw - 50px);
  height: 75vh;
  font-family: Teko;
  color: var(--color);
  background-color: oklch(from #156105 l c h / 0.3);
  clip-path: polygon(
    0 50px,
    50px 0,
    calc(100% - 50px) 0,
    100% 50px,
    100% calc(100% - 50px),
    calc(100% - 50px) 100%,
    50px 100%,
    0 calc(100% - 50px)
  );

  &::before {
    --h: 5%;

    content: "";
    width: min(250px, 20vw);
    aspect-ratio: 4/1;
    background: conic-gradient(var(--gib-color) 0 0) 0 0/100% var(--h) no-repeat,
      conic-gradient(var(--gib-color) 0 0) 0 calc(50% - var(--h) / 2) / 100%
        var(--h) no-repeat,
      conic-gradient(var(--gib-color) 0 0) 0 calc(100% - var(--h)) / 100%
        var(--h) no-repeat;
    background-color: transparent;
    animation: ${fill} 0.2s steps(2) both
      ${(p) => (p.$play ? "reverse" : "forwards")} 5;
  }

  &::after {
    --w: -15deg; //solo negativos

    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: 20vw;
    aspect-ratio: 1/1;
    clip-path: polygon(
      ${(p) =>
        p.$play ? "0 0, 1 0, 1 1, 0 1" : "25% 25%, 75% 25%, 75% 75%, 25% 75%"}
    );
    transform: rotate(${(p) => (p.$play ? "360deg" : "0deg")});
    transition: transform 2s steps(20), opacity 0.2s steps(20);
    transition-duration: ${(p) => (p.$play ? "1s" : "0s")};
    animation: ${flicker} 0.2s steps(2) both
      ${(p) => (p.$play ? "reverse" : "forwards")} 5;

    background: radial-gradient(
        50% 50%,
        #0000 40%,
        var(--gib-color) 41% 50%,
        #0000 51% 100%
      ),
      conic-gradient(
        from var(--w) at 50% 10%,
        var(--gib-color) 2deg calc(var(--w) * -2),
        #0000 calc(var(--w) * 2 - 2deg) 360deg
      ),
      conic-gradient(
        from calc(90deg + var(--w)) at 90% 50%,
        var(--gib-color) 2deg calc(var(--w) * -2),
        #0000 calc(var(--w) * 2 - 2deg) 360deg
      ),
      conic-gradient(
        from calc(180deg + var(--w)) at 50% 90%,
        var(--gib-color) 2deg calc(var(--w) * -2),
        #0000 calc(var(--w) * 2 - 2deg) 360deg
      ),
      conic-gradient(
        from calc(270deg + var(--w)) at 10% 50%,
        var(--gib-color) 2deg calc(var(--w) * -2),
        #0000 calc(var(--w) * 2 - 2deg) 360deg
      );
  }
`;