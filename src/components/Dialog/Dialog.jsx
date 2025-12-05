import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Modal } from "react-bootstrap";
import bg from "../../assets/bg_dot_white.png";

const expand = keyframes`
  0% {
    width: calc(var(--square) * 2);
    height: calc(var(--square) * 2);
  }
  50% {
    height: var(--height);
  }
  100% {
    width: var(--width);
    height: 500px;
    --bg: var(--color-primary);
    --content-visible: 1;
  }
`;

const StyledDialog = styled.div`
  --width: min(${(p) => p.$dialogWidth || "320px"}, 100%);
  --height: ${(p) => p.$dialogHeight || "500px"};
  --square: min(50px, 10vw);
  --half: calc(var(--square) / 2);
  --bg: oklch(from var(--color-accent) l c h / 30%);
  --content-visible: 0;
  --duration: 0.4s;

  position: relative;
  padding: var(--square) !important;
  overflow: clip;
  background: var(--bg)
    url(${bg}) no-repeat top
    center/cover;
  clip-path: polygon(
    0 0,
    var(--square) 0,
    var(--square) var(--half),
    calc(100% - var(--square)) var(--half),
    calc(100% - var(--square)) 0,
    100% 0,
    100% var(--square),
    calc(100% - var(--half)) var(--square),
    calc(100% - var(--half)) calc(100% - var(--square)),
    100% calc(100% - var(--square)),
    100% 100%,
    calc(100% - var(--square)) 100%,
    calc(100% - var(--square)) calc(100% - var(--half)),
    var(--square) calc(100% - var(--half)),
    var(--square) 100%,
    0 100%,
    0 calc(100% - var(--square)),
    var(--half) calc(100% - var(--square)),
    var(--half) var(--square),
    0 var(--square)
  );
  animation: both ease ${expand} var(--duration);

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
  }

  &::before {
    inset: 0;
    background-color: oklch(from var(--color-primary) l c h / 50%);
    clip-path: polygon(
      0 0,
      var(--square) 0,
      var(--square) var(--half),
      calc(100% - var(--square)) var(--half),
      calc(100% - var(--square)) 0,
      100% 0,
      100% var(--square),
      calc(100% - var(--half)) var(--square),
      calc(100% - var(--half)) calc(100% - var(--square)),
      100% calc(100% - var(--square)),
      100% 100%,
      calc(100% - var(--square)) 100%,
      calc(100% - var(--square)) calc(100% - var(--half)),
      var(--square) calc(100% - var(--half)),
      var(--square) 100%,
      0 100%,
      0 calc(100% - var(--square)),
      var(--half) calc(100% - var(--square)),
      var(--half) var(--square),
      0 var(--square)
    );
  }
`;

const StyledButton = styled.button`
  background-color: ${(p) => p.$bg || "var(--color-primary)"};
  color: ${(p) => p.$color || "var(--color-primary)"};
`;

export default function Dialog({
  open = false,
  buttonTxt = "opendialog",
  btnBg = "",
  btnColor = "",
  width = "",
  height = "",
  className = "",
  children = "",
}) {
  const [isOpen, setOpen] = useState(open);

  return (
    <>
      <StyledButton
        $bg={btnBg}
        $color={btnColor}
        className={className}
        onClick={() => setOpen(true)}
      >
        {buttonTxt}
      </StyledButton>
      {isOpen && (
        <>
          <Modal
            show={isOpen}
            onHide={() => setOpen(false)}
            dialogAs={StyledDialog}
            dialogClassName="overflow-hidden"
            aria-labelledby="character-details"
            className="d-flex justify-content-center align-items-center"
            $dialogHeight={height}
            $dialogWidth={width}
          >
            {children}
          </Modal>
        </>
      )}
    </>
  );
}
