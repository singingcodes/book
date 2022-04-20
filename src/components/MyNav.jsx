import { Component } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

class MyNav extends Component {
  render() {
    return (
      <Navbar className="nav-color" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://logowik.com/content/uploads/images/409_s_letter.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top mr-1"
              alt="React Bootstrap logo"
            />
            Books
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
export default MyNav
