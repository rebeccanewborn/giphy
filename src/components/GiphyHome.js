import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

//components
import GiphySearch from "./GiphySearch";
import GiphyRandom from "./GiphyRandom";

class GiphyHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeMenuItem: "search" };
  }
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

  handleMenuClick = ev => {
    this.setState({ activeMenuItem: ev.target.id });
    this.props.menuSwitch();
    this.props.history.push(`/${ev.target.id}`);
  };

  render() {
    return (
      <Container className="giphy-home">
        <h1>Explore GIPHY</h1>
        <Menu pointing secondary inverted>
          <Menu.Item
            name="Search"
            id="search"
            onClick={this.handleMenuClick}
            active={this.state.activeMenuItem === "search"}
          />
          <Menu.Item
            name="Random"
            id="random"
            onClick={this.handleMenuClick}
            active={this.state.activeMenuItem === "random"}
          />
        </Menu>
        <Switch>
          <Route path="/search" component={GiphySearch} />
          <Route path="/random" component={GiphyRandom} />
        </Switch>
      </Container>
    );
  }
}

export default withRouter(connect(null, actions)(GiphyHome));
