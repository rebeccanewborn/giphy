import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Input, Button } from "semantic-ui-react";

class GiphySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  onChange = ev => {
    this.setState({ searchTerm: ev.target.value });
  };

  onSubmit = ev => {
    this.props.searchGIPHY(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <Input
          placeholder="Search GIPHY..."
          value={this.state.searchTerm}
          onChange={this.onChange}
        />
        <Button onClick={this.onSubmit}>Submit Search</Button>
      </div>
    );
  }
}

export default connect(null, actions)(GiphySearch);
