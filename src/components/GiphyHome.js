import React from "react";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";

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

  handleScroll = ev => {
    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    var scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    var scrolledToBottom = scrollTop + window.innerHeight >= scrollHeight;

    //if reach bottom of page, increment offset, kicking off series of events for infinte scroll feature
    if (scrolledToBottom) {
      this.props.incrementOffset();
    }
  };

  render() {
    return (
      <Container className="giphy-home">
        <h1>Explore GIPHY</h1>
        <GiphySearch />
        <ResultsContainer />
      </Container>
    );
  }
}

export default connect(null, actions)(GiphyHome);
