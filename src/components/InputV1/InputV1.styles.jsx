import { Form } from "react-bootstrap";
import styled from "styled-components"

export const Group = styled(Form.Group)`
    filter: drop-shadow(3px 3px black);
    min-width: 100%;
`;

export const Label = styled(Form.Label)`
    width: fit-content;
    font-family: inherit;
    position: relative;
    margin-left: 8px;
    margin-bottom: -15px;
    
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        transform: skewX(-15deg);
        background-color: ${(p) => p.$bg || "var(--color-primary)"};

        z-index: -1;
    }
`;

export const Input = styled(Form.Control)`
    width: ${(p) => p.$w || "100%"};
    font-family: inherit;
    border: 0;
    outline: none;
    display: inline-block;
    transform: skewX(-15deg);
    background-color: ${(p) => p.$bg || "var(--color-primary)"};
`;

export const Helper = styled(Form.Text)`
    font-family: inherit;
    transform: skewX(-20deg);
`;

export const Feedback = styled(Form.Control.Feedback)`
    font-family: inherit;
    text-shadow: 0;
`;