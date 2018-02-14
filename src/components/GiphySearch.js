import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Input } from "semantic-ui-react";

import ResultsContainer from "./ResultsContainer";

class GiphySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.timeout = 0;
  }

  componentWillReceiveProps(nextProps) {
    //new offset prop, submit search with new offset
    if (this.props.offset !== nextProps.offset) {
      this.apiSearch(nextProps.offset);
    }
  }

  onChange = ev => {
    if (this.timeout) {
      this.props.resetSearch();
      clearTimeout(this.timeout);
    }

    this.setState({ searchTerm: ev.target.value });

    //if search term is erased, do not make api call
    if (this.state.searchTerm === "") {
      return;
    }

    this.timeout = setTimeout(() => {
      this.apiSearch();
    }, 500);
  };

  apiSearch = (offset = this.props.offset) => {
    this.props.searchGIPHY(this.state.searchTerm, offset);
    clearTimeout(this.timeout);
  };

  render() {
    return (
      <div>
        <Input
          placeholder="Start typing to explore GIPHY..."
          value={this.state.searchTerm}
          onChange={this.onChange}
          className="search-bar"
        />
        {this.props.resultsHeader ? (
          <h4 className="results-header"> Scroll Down to See More </h4>
        ) : null}
        <ResultsContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { offset: state.offset, resultsHeader: state.results.length > 0 };
};

export default connect(mapStateToProps, actions)(GiphySearch);
