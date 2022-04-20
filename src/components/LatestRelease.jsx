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
            <Col md={3} key={book.asin} className="mb-2">
              <Card>
                <Card.Img
                  variant="top"
                  className="d-block w-100"
                  src={book.img}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}
export default LatestRelease
