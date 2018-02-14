import React from "react";
import { Icon, Transition } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";

class GiphyRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }
  onClick = ev => {
    this.setState({ visible: !this.state.visible });
    setTimeout(() => {
      this.props.clearRandom();
      this.props.randomGIPHY();
    }, 800);
  };

  render() {
    return (
      <div className="random-container">
        <Transition
          animation="tada"
          duration="500"
          visible={this.state.visible}
        >
          <Icon
            name="wizard"
            size="massive"
            onClick={this.onClick}
            className="random-wizard"
          />
        </Transition>
        <img src={this.props.randomImage} alt="" className="random-image" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { randomImage: state.random.image_url };
};

export default connect(mapStateToProps, actions)(GiphyRandom);
