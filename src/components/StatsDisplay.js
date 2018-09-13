import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatsDisplay extends Component {
  render() {
    return (
      <div>
        <h1>Miles Driven: {this.props.yourCar.miles}</h1>
      </div>
    )
  }
}

const mapSTateToProps = (state) => {
  return {
    yourCar: state.yourCar
  }
}

export default connect(mapSTateToProps)(StatsDisplay);
