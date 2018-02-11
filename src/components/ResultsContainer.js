import React from "react";
import { connect } from "react-redux";

class ResultsContainer extends React.Component {
  render() {
    const gifResults = this.props.results.map(gif => {
      return <img src={gif.images.fixed_height.url} key={gif.id} />;
    });

    return <div>{gifResults}</div>;
  }
}

const mapStateToProps = state => {
  return { results: state.results };
};

export default connect(mapStateToProps)(ResultsContainer);
