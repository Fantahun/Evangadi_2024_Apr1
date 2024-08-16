import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Welcome, {this.props.name}!</h1>;
  }
}

// Setting default props when value is not passed to props on component call
// Welcome.defaultProps = {
//   name: 'Guest',
// };

export default Welcome;
