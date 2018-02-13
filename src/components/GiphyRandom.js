import React from "react";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";

const GiphyRandom = props => {
  const onClick = ev => {
    console.log("clicked", props);
    props.clearRandom();
    props.randomGIPHY();
  };
  return (
    <div>
      <Icon
        name="wizard"
        size="massive"
        onClick={onClick}
        className="random-wizard"
      />
      <img src={props.randomImage} alt="" className="random-image" />
    </div>
  );
};

const mapStateToProps = state => {
  return { randomImage: state.random.image_url };
};

export default connect(mapStateToProps, actions)(GiphyRandom);
