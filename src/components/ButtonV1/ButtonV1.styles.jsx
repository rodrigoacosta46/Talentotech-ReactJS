import { Button as bsButton } from "react-bootstrap";
import styled from "styled-components";


export const Button = styled(bsButton)`
    font-family: inherit;
    outline: 0;
    border: 0;
    color: var(--color-primary);
    background-image: repeating-linear-gradient(var(--color-secondary) 5px, black 10px);
    text-align: center;
    clip-path: polygon(0 0, 100% 0, calc(100% - 40px) 100%, 40px 100%);

    &:focus {
        color: oklch(from var(--color-accent) calc(l + 1) calc(c + 0.09) h);
    }
    
`;