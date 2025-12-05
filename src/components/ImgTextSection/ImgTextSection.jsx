import { Container, Stack } from "react-bootstrap";
import styled from "styled-components";
import bg from "../../assets/bg_dot_white.png";
import bgDark from "../../assets/bg_dot_black.png";

const StyledContainer = styled(Container)`
  --border: ${(p) => p.$border || "var(--color-secondary)"};
  --bg: oklch(from ${(p) => p.$bg || "var(--color-accent)"} l c h / 0.9);

  width: 100%;
  max-height: inherit;
  display: flex;
  flex-wrap: wrap-reverse;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  &::before {
    clip-path: polygon(100% 0, 100% 85%, 0 100%, 0 15%);
    background-image: linear-gradient(
      to top right,
      var(--border) 30%,
      transparent 50%,
      var(--border) 90%
    );
  }

  &::after {
    clip-path: polygon(
      100% 10px,
      100% calc(85% - 10px),
      0 calc(100% - 10px),
      0 calc(15% + 10px)
    );
    background: var(--bg) url(${(p) => (p.$dots ? bg : bgDark)}) bottom / cover
      no-repeat;
  }
`;

const TextShadow = styled.p`
  position: relative;
  isolation: isolate;
  color: var(--color-primary);
  text-align: center;
  font-weight: bold;
  line-height: 1em;
  transform: skewX(-20deg);
  margin: 0;

  &::before {
    content: "${(p) => p.$txt}";
    position: absolute;
    inset: 0;
    -webkit-text-stroke: ${(p) => p.$stroke} #000;

    z-index: -1;
  }
`;

export default function ImgTextSection({
  src,
  alt = "",
  borderSection = "",
  bgSection = "",
  bgDots = false,
  title = "",
  content = "",
  txtShadow = "7px",
  className = "",
}) {
  return (
    <StyledContainer
      $border={borderSection}
      $bg={bgSection}
      $dots={bgDots}
      className={className}
      as="section"
    >
      <div className="col-lg-6 order-lg-1 order-1 mx-auto">
        <img src={src} alt={alt} className="img-fluid" />
      </div>

      <div className="col-lg-6 d-flex flex-column order-lg-2 order-1 ms-auto">
        <Stack gap={3} className="mx-4 mt-5 mt-lg-0">
          <TextShadow
            className="display-5 text-end text-lg-center"
            as="h4"
            $stroke={txtShadow}
            $txt={title}
          >
            {title}
          </TextShadow>
          <TextShadow
            className="fs-4 lh-sm text-end text-md-center"
            $stroke={txtShadow}
            $txt={content}
          >
            {content}
          </TextShadow>
        </Stack>
      </div>
    </StyledContainer>
  );
}
