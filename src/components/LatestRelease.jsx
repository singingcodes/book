import { Component } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import books from "../data/fantasy.json"

class LatestRelease extends Component {
  render() {
    return (
      <Container className="my-3">
        <h2 className="text-center">Latest Release</h2>
        <Row>
          {books.map((book) => (
            <Col md={2} key={book.asin} className="mb-2">
              <Card>
                <Card.Img
                  variant="top fluid"
                  className="d-block w-100"
                  height="300px"
                  src={book.img}
                />
                <Card.Body>
                  <Card.Text>Price: ${book.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}
export default LatestRelease
