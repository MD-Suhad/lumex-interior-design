import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">LumexTech ARCHITECTURE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px", 
              marginLeft: "200px",
            }}
            navbarScroll
          >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="service">Pages</Nav.Link>
            <NavDropdown title="Project" id="navbarScrollingDropdown">
              <NavDropdown.Item href="project">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Project 2</NavDropdown.Item>

              <NavDropdown.Item href="#action5">Project 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="about">About Us</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Booking</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
