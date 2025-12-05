import Character from "../components/Character/Character.jsx";
import ImgTextSection from "../components/ImgTextSection/ImgTextSection.jsx";
import vegeta from "../assets/vegeta.png";
import goku from "../assets/goku.png";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Lucha contra los guerreros z, derrotalos a todos!" />
      </Helmet>
      <Character />
      <ImgTextSection
        className="my-5"
        bgSection="var(--color-primary)"
        src={vegeta}
        title="¡¡Mide el nivel de tu enemigo!!"
        content="Haz la lectura de poder de tu adversario, mide tus posibilidades de victoria!"
      />
      <ImgTextSection
        className="my-5"
        borderSection="var(--color-accent)"
        bgSection="var(--color-secondary)"
        src={goku}
        title="¡¡Incrementa tu Poder!!"
        content="Derrotalos para aumentar tus habilidades, derrotalos a todos!"
      />
    </>
  );
}
