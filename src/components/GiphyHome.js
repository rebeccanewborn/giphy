import React from "react";
import { Container, Header } from "semantic-ui-react";

//components
import GiphySearch from "./GiphySearch";
import ResultsContainer from "./ResultsContainer";

class GiphyHome extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(ev) {
    console.log("handling scroll", ev);
  }

  render() {
    return (
      <Container className="giphy-home">
        <Header as="h1" inverted>
          Search GIPHY
        </Header>
        <GiphySearch />
        <ResultsContainer />
      </Container>
    );
  }
}

export default GiphyHome;
