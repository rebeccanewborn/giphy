import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Input, Button } from "semantic-ui-react";

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
      clearTimeout(this.timeout);
    }
    if (
      ev.target.value === "" ||
      (ev.target.value.length === 1 && this.state.searchTerm !== "")
    ) {
      this.props.resetSearch();
      this.setState({ searchTerm: ev.target.value });
      return;
    }

    this.setState({ searchTerm: ev.target.value });

    this.timeout = setTimeout(() => {
      this.apiSearch();
    }, 500);
  };

  apiSearch = (offset = this.props.offset) => {
    //api call
    this.props.searchGIPHY(this.state.searchTerm, offset);
    clearTimeout(this.timeout);
  };

  render() {
    return (
      <Input
        placeholder="Start typing to explore GIPHY..."
        value={this.state.searchTerm}
        onChange={this.onChange}
        className="search-bar"
      />
    );
  }
}

const mapStateToProps = state => {
  return { offset: state.offset };
};

export default connect(mapStateToProps, actions)(GiphySearch);
