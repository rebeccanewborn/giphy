import React from "react";
import { Container, Header } from "semantic-ui-react";

//components
import GiphySearch from "./GiphySearch";

class GiphyHome extends React.Component {
  render() {
    return (
      <Container className="giphy-home">
        <Header as="h1" inverted>
          Search GIPHY
        </Header>
        <GiphySearch />
      </Container>
    );
  }
}

export default GiphyHome;
