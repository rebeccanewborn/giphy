import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Input, Button } from "semantic-ui-react";

class GiphySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  componentWillReceiveProps(nextProps) {
    //new offset prop, submit search with new offset
    if (this.props.offset !== nextProps.offset) {
      this.onSubmit(null, null, nextProps.offset);
    }
  }

  onChange = ev => {
    this.setState({ searchTerm: ev.target.value });
    if (ev.target.value === "") {
      this.props.resetSearch();
    }
  };

  onSubmit = (ev1, ev2, offset = this.props.offset) => {
    //if search form was submitted (as opposed to infinite scroll)
    //dispatch reset action (clear results, reset offset to 0)
    if (ev1) {
      ev1.preventDefault();
      this.props.resetSearch();
    }

    //api call
    this.props.searchGIPHY(this.state.searchTerm, offset);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="search-form">
        <Input
          placeholder="Search GIPHY..."
          value={this.state.searchTerm}
          onChange={this.onChange}
          className="search-bar"
        />
        <Button type="submit" className="search-submit" basic inverted>
          Search
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { offset: state.offset };
};

export default connect(mapStateToProps, actions)(GiphySearch);
