import React from "react"
import PropTypes from "prop-types"
class GreetingWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

GreetingWorld.propTypes = {
  greeting: PropTypes.string
};
export default GreetingWorld
