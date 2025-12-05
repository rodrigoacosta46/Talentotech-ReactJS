import { GrGithub } from 'react-icons/gr';
import styled from  'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    position: relative;
    isolation: isolate;
    color: var(--color-primary);
    
    &::before,
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    &::before {
        clip-path: polygon(0 0, 20% 0, 25% 30%, 75% 30%, 80% 0, 100% 0, 100% 100%, 0 100%);
        background: oklch(from var(--color-secondary) l c h / .97) repeating-linear-gradient(var(--color-secondary) 0 10px, transparent 10px 20px);
    }

    &::after {
        --offset: 15px;
        --width: calc(var(--offset) + 5px);

        clip-path: polygon(0 var(--offset), 20% var(--offset), 25% calc(30% + var(--offset)), 75% calc(30% + var(--offset)), 80% var(--offset), 100% var(--offset), 100% var(--width), 80% var(--width), 75% calc(30% + var(--width)), 25% calc(30% + var(--width)), 20% var(--width), 0 var(--width));
        background-color: var(--color-accent);
    }
`;

export default function Footer(){
    return (
        <StyledFooter className='fs-4'>
           Rodrigo Acosta&thinsp;-&thinsp;<a href="https://github.com/rodrigoacosta46">rodrigoacosta46&nbsp;<GrGithub /></a>
        </StyledFooter>   
    )
}