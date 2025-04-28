import { Container, Row, Col } from "react-bootstrap";
import SearchInput from "./SearchInput";

const Nav = () => {
  return (
    <Container fluid>
      <Row className="align-items-center py-2">
        <Col xs="auto">
          <div className="fw-bold h5 mb-0">My Store</div>
        </Col>

        <Col xs="auto">
          <ul className="d-flex list-unstyled mb-0 gap-3">
            <li>Menu</li>
            <li>Contatti</li>
            <li>Accedi</li>
          </ul>
        </Col>

        <Col xs="auto">
          <SearchInput />
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
