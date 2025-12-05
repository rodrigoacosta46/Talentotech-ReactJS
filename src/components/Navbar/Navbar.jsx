import { Container } from "react-bootstrap";
import * as Styled from "./Navbar.styles.jsx";
import { useUserContext } from "../../Context/UserContext.jsx";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const { user, logout } = useUserContext()

  return (
    <Styled.Nav expand="lg">
      <Container fluid>
        <Styled.Nav.Brand href="/">
          <img src={logo} className="img-fluid" width="180"/>
        </Styled.Nav.Brand>
        <Styled.Menu
          className="ms-auto p-2 gap-2 text-uppercase fw-bolder"
        >
          <Styled.Toggle aria-controls="app-navbar" className="d-block d-lg-none" bsPrefix="none"/>
          <Styled.Offcanvas id="app-navbar" placement="end" className="d-flex flex-column flex-lg-row justify-content-center gap-2">
            <Styled.Link as={Link} to="/store" className="text-uppercase fw-bolder p-2 p-auto">tienda</Styled.Link>
            <Styled.Link as={Link} to="/about" className="text-uppercase fw-bolder p-2 p-auto">acerca de</Styled.Link>
          </Styled.Offcanvas>
        {user.auth ? (
          <Styled.Button className="accent p-1" onClick={logout}>
            <IoIosLogOut />
          </Styled.Button>
        ) : (
          <Styled.Link as={Link} to="/login" className="accent">login</Styled.Link>
        )}
        </Styled.Menu>
      </Container>
    </Styled.Nav>
  );
}
