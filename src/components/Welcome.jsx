import { Component } from "react"
import { Jumbotron, Container } from "react-bootstrap"

class Welcome extends Component {
  render() {
    return (
      <Jumbotron className="my-3 welcome">
        <Container>
          <h1>Welcome To Strive Book Store</h1>
          <p>...Knowledge is Power</p>
        </Container>
      </Jumbotron>
    )
  }
}
export default Welcome
