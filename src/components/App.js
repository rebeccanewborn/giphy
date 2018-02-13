import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

//components
import Welcome from "./Welcome";
import GiphyHome from "./GiphyHome";

class App extends React.Component {
  componentDidMount() {
    this.props.history.push("/welcome");
  }
  render() {
    return (
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/" component={GiphyHome} />
      </Switch>
    );
  }
}

export default withRouter(App);
