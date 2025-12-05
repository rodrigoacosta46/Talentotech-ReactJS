import { useState } from "react";
import { Container, Tab, ListGroup, Row, Col } from "react-bootstrap";
import Dialog from "../Dialog/Dialog";
import { useAppContext } from "../../Context/AppContext";
import { FaDiceFive } from "react-icons/fa";
import RandomRange from "../../utilities/RandomRange";
import * as Styled from "./Character.styles.jsx";
import { useUserContext } from "../../Context/UserContext.jsx";

export default function Character() {
  const { character, setCharacter, scouterRef, metaData, page, setPage, loading } = useAppContext();
  const { user, setUser } = useUserContext();
  const [imgLoad, setImgLoad] = useState(false);
  const [clickPosition, setClickPosition] = useState({x: "", y: "", changed: false});

  const setRandomCharacter = () => {
    setImgLoad(false);
    setPage(RandomRange(1, metaData.totalPages, page));
    setUser(prev => ({...prev, enemyDamage: 0}))
  }

  const transformation = () => {
    setCharacter({...character, image: character.transformations[0].image, ki: character.transformations[0].ki, transformations: character.transformations.slice(1)})
  }

  const handleDamage = (e) => {
    setClickPosition(prev => ({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY, changed: !prev.changed}));

    const characterHealth = character.ki - user.damage;
    if (characterHealth < 0) {
      setUser({...user, coins: user.coins + character.reward});
      if(character?.transformations?.length == 0) {
        setRandomCharacter();
        return
      }
      transformation()
      return 
    }
    setCharacter({...character, ki: characterHealth});
  }

  return (
    <>
      <Styled.Container as="section" ref={scouterRef}>
        <Styled.Wrapper $posX={clickPosition.x} $posY={clickPosition.y} $dmg={user.damage} $changed={clickPosition.changed}>
          { !loading && (<>
            <Styled.CharacterImg
            src={character?.image || "..."}
            alt=""
            className={imgLoad ? "animateBoth" : ""}
            onLoad={() => setImgLoad(true)}
            onAnimationEnd={() => setImgLoad(false)}
            onClick={handleDamage}
            fluid={true}
          />
          <Container
            className="d-flex flex-column justify-content-center align-items-start gap-5 position-absolute top-0 bottom-0 start-100 end-0"
            fluid
          >
            <Styled.Randomize
              className="fs-4 px-1"
              onClick={setRandomCharacter}
            >
              <FaDiceFive />
            </Styled.Randomize>
            <Dialog
              buttonTxt="?"
              btnBg="#3d83b9"
              width="850px"
              height="500px"
              className="position-absolute top-0 start-0 px-2 fs-4"
            >
              <Tab.Container defaultActiveKey="#link1">
                <Row className="g-5 h-100">
                  <Col sm={4} className="h-sm-100 mt-sm-5">
                    <ListGroup
                      bsPrefix="none"
                      className="d-flex flex-row flex-sm-column flex-wrap gap-sm-2"
                    >
                      <ListGroup.Item
                        className="px-4 py-2"
                        href="#link1"
                        as={Styled.GroupItem}
                        $dir={true}
                        $delay=".1s"
                      >
                        Descripción
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="px-4 py-2"
                        href="#link2"
                        as={Styled.GroupItem}
                        $dir={true}
                        $delay=".2s"
                      >
                        Planeta
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="px-4 py-2"
                        href="#link3"
                        as={Styled.GroupItem}
                        $dir={true}
                        $delay=".3s"
                      >
                        Detalles
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col sm={8} className="h-100 mt-2 mt-sm-5 overflow-auto">
                    <Tab.Content>
                      <Tab.Pane eventKey="#link1" as={Styled.AttrSection}>
                        <h4>Descripción</h4>
                        <p>{character?.description}</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="#link2" as={Styled.AttrSection}>
                        <h4>{character?.originPlanet?.name}</h4>
                        <Styled.Img
                          src={character?.originPlanet?.image}
                          fluid
                          className="mb-3"
                          $shadow="#0000"
                        />
                        {character?.originPlanet?.description}
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="#link3"
                        as={Styled.AttrSection}
                        $bg="var(--color-primary)"
                        $shadow="#3d83b9"
                        $dot={true}
                        $color="var(--color-secondary)"
                      >
                        <h4>Genero: {character?.gender} </h4>
                        <h4>Grupo: {character?.affiliation} </h4>
                        <h4>
                          Transformaciones: {character?.transformations?.length}{" "}
                        </h4>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Dialog>
            {!imgLoad && (
              <>
                <Styled.Attribute
                  $primary="#eb794e"
                  content="nombre"
                  className="d-none d-md-block p-2 text-uppercase fs-4"
                >
                  {character?.name || "..."}
                </Styled.Attribute>
                <Styled.Attribute
                  $primary="#9145cb"
                  $delay=".1s"
                  content="raza"
                  className="d-none d-md-block p-2 text-uppercase fs-4"
                >
                  {character?.race || "..."}
                </Styled.Attribute>
                <Styled.Attribute
                  $primary="#3d83b9"
                  $delay=".2s"
                  content="energía"
                  className="d-none d-md-block p-2 text-uppercase fs-4"
                >
                  {character?.displayKi || "..."}
                </Styled.Attribute>
              </>
            )}
          </Container>
          </>)}
        </Styled.Wrapper>
      </Styled.Container>
    </>
  );
}
