import { Container } from "react-bootstrap";
import Title from "../components/Title/Title";
import styled from "styled-components";

const StyledContainer = styled(Container)`
    position: relative;
    isolation: isolate;
    min-height: 100vh;
    color: var(--color-primary);
    font-weight: bold;
    border-image: repeating-linear-gradient(var(--color-accent) 0 10px, oklch(from var(--color-accent) l c h / .9) 10px 20px) fill 0;
  //100vw 200vh;
`;

export default function About() {
  return (
    <>
      <Title content="acerca de" />
      <StyledContainer className="p-5" fluid>
      Este juego propone una experiencia centrada en la progresión constante,
      mezclando la dinámica simple y adictiva de un clicker con el universo
      icónico de Dragon Ball. El jugador se enfrenta uno a uno contra distintos
      personajes emblemáticos de la saga, cada uno representado con sus rasgos
      característicos, su estilo de combate y su presencia intimidante. La
      mecánica principal consiste en atacar repetidamente al enemigo para
      reducir su energía; sin embargo, cada victoria no es el final definitivo,
      porque muchos rivales pueden evolucionar o transformarse en formas más
      poderosas, replicando fielmente su comportamiento en la serie. Esto genera
      un ciclo en el que la dificultad escala de manera gradual y mantiene la
      sensación de desafío constante. Cada enemigo derrotado —ya sea en su forma
      inicial o tras ejecutar alguna transformación— otorga monedas, la
      recompensa principal del juego. Aunque la cantidad puede variar, siempre
      existe un botín asegurado, lo que convierte al progreso en un flujo
      continuo. Con estas monedas, el jugador puede invertir en mejoras de daño,
      que son esenciales para acelerar el ritmo del juego. Estas mejoras no solo
      permiten eliminar enemigos más rápido, sino que también reducen
      significativamente el tiempo necesario para atravesar las transformaciones
      más exigentes, potenciando la sensación de avance y dominación. La idea
      central es generar un ciclo adictivo: atacar, derrotar, cobrar
      recompensas, mejorar el daño y volver a la acción con más fuerza. A medida
      que el jugador acumula mejoras, el juego se vuelve cada vez más dinámico y
      fluido, impulsando el deseo de ver hasta dónde pueden llegar sus
      estadísticas y qué tan rápido puede superar enemigos que antes parecían
      invencibles. El resultado es una experiencia simple en su base, pero
      profundamente satisfactoria, que combina nostalgia, progresión y un ritmo
      constante de recompensas para mantener al jugador enganchado durante
      largos períodos.
      </StyledContainer>
    </>
  );
}
