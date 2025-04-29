import { Container, Row, Col } from "react-bootstrap";
import SearchInput from "./SearchInput";
import "./components-css/nav.css";

const Nav = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="d-flex align-items-center justify-content-between py-2 nav-container">
          <div className="fw-bold h5 mb-0 nav-logo">My Store</div>

          <ul className="d-flex list-unstyled mb-0 gap-3 nav-menu">
            <li className="nav-item">Menu</li>
            <li className="nav-item">Contatti</li>
            <li className="nav-item">Accedi</li>
          </ul>

          <div className="nav-search">
            <SearchInput />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
