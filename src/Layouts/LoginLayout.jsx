import styled from "styled-components";
import Login from "../Pages/Login";
import { Nav, Tab } from "react-bootstrap";
import ContainerV1 from "../components/ContainerV1/ContainerV1";
import Register from "../Pages/Register";
import { ToastContainer } from "react-toastify";

const Layout = styled.div`
  --bg-dots: radial-gradient(circle at 1px 1px, oklch(from var(--color-secondary) l c h / 0.2) 1px, #0000 0) 0 0/20px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: var(--color-primary) var(--bg-dots);
`;

const TabHeader = styled(Nav.Link)`
  --rad: 8px;

  position: relative;
  transform: translateY(-150%);
  bottom: -2px;
  font-family: inherit;
  color: var(--color-primary);
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: 2px 2px black;
    transition: color .2s, opacity .2s;

  &.active {
    color: oklch(from var(--color-accent) calc(l + 1) calc(c + 0.09) h);
  }

  &:not(.active) {
    opacity: .4;
  }
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--color-accent);
    clip-path: polygon(
      var(--rad) 0,
      calc(100% - var(--rad)) 0,
      100% var(--rad),
      100% 100%,
      0 100%,
      0 var(--rad)
    );

    z-index: -1;
  }
`;

export default function LoginLayout() {
  return (
    <Layout>
      <ContainerV1 radius="15px">
        <Tab.Container defaultActiveKey="login">
          <Nav>
            <TabHeader eventKey="login" className="px-4 py-2" bsPrefix="none">login</TabHeader>
            <TabHeader eventKey="register" className="px-4 py-2" bsPrefix="none">registro</TabHeader>
          </Nav>
          <Tab.Content style={{transform: "translateY(-20px)"}}>
            <Tab.Pane eventKey="login">
              <Login />
            </Tab.Pane>
            <Tab.Pane eventKey="register">
              <Register />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </ContainerV1>
      <ToastContainer />
    </Layout>
  );
}
