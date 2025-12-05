import { createContext, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import RandomRange from "../utilities/RandomRange";
import { useUserContext } from "./UserContext";
import Scouter from "../components/Scouter/Scouter";
import styled from "styled-components";
import { RiMoneyCnyCircleFill } from "react-icons/ri";

const CoinJar = styled.div`
  position: fixed;
  isolation: isolate;
  bottom: 20px;
  left: 0;
  width: fit-content;
  min-width: 150px;
  max-width: 30%;
  color: oklch(from var(--color-accent) calc(l + 0.09) calc(c + 0.02) h);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -15px;
    padding: inherit;
    background: conic-gradient(
        oklch(from var(--color-secondary) calc(l + 0.09) c h) 0 0
      ),
      conic-gradient(var(--color-secondary) 0 0);
    background-clip: content-box, padding-box;
    transform: skewX(20deg);
    z-index: -1;
  }
`;

// escala corta (usa)
const powerConfig = {
  googolplex: 10 ** 30, //inventado
  septillion: 10 ** 24,
  sextillion: 10 ** 21,
  quintillion: 10 ** 18,
  quadrillion: 10 ** 15,
  trillion: 10 ** 12,
  billion: 10 ** 9,
  def: 1000,
};

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [character, setCharacter] = useState();4
  const [loading, setLoading] = useState(false);
  const { user } = useUserContext();
  const { ref: scouterRef, inView } = useInView({
    threshold: 0.75,
    initialInView: true,
  });
  const [metaData, setMetaData] = useState();
  const [page, setPage] = useState(1);

  const handleCharacterHealth = (health) => {
    if (health.toLowerCase() == "unknown") {
      return RandomRange(8000, 100000);
    }

    if (health.includes(" ")) {
      let str = health.split(" ")[1].toLowerCase();
      let num = Number(health.split(" ")[0]);
      let power = powerConfig[str] || powerConfig["def"];
      return num * power;
    }

    return new Number(
      health.replaceAll(".", "").replaceAll(",", "")
    ).toString();
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=10`)
      .then((res) => res.json())
      .then((api) => {
        setMetaData(api.meta);
        fetch(
          "https://dragonball-api.com/api/characters/" +
            api.items[RandomRange(1, api.items.length - 1)].id
        )
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            const ki = handleCharacterHealth(data.ki.toString());
            const updatedTransformations = data.transformations.map((t) => ({
              ...t,
              ki: handleCharacterHealth(t.ki.toString()),
            }));

            setCharacter({
              ...data,
              ki,
              transformations: updatedTransformations,
              reward: ki / 8 + 1000,
              displayKi: data.ki,
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [page]);
 
  return (
    <AppContext.Provider
      value={{ character, setCharacter, scouterRef, metaData, page, setPage, loading }}
    >
      <Scouter view={inView} data={character} />
      {children}
      <CoinJar className="text-truncate px-4 py-2 fs-4">
        <RiMoneyCnyCircleFill />
        {Math.floor(user.coins)}
      </CoinJar>
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
