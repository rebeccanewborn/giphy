import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Welcome = props => {
  const onClick = ev => {
    props.history.push("/search");
  };
  return (
    <div className="welcome-page">
      <Button
        className="enter-button"
        onClick={onClick}
        size="massive"
        basic
        inverted
      >
        Enter
      </Button>
    </div>
  );
};

export default withRouter(Welcome);
