import React, { Component } from 'react';
import LaneGrid from './LaneGrid';
import './Lane.css';
import { switchToLane } from '../actions/yourCar';
import { connect } from 'react-redux';

class Lane extends Component {
  renderGrids = (numOfGrids) => {
    const laneGrids = [];
    for (let i = 0; i < numOfGrids; i++) {
      laneGrids.push(<LaneGrid key={`lane-${this.props.laneNumber}-grid-${i}`} />);
    }
    return laneGrids;
  }
  handleLaneSwitch = (lane) => {
    this.props.dispatch(switchToLane(lane));
  }
  render() {
    console.log('current lane', this.props.yourCar.currentLane);
    return (<div onClick={() => this.handleLaneSwitch(this.props.laneNumber)} className="Lane">
              {this.renderGrids(12)}
            </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    yourCar: state.yourCar
  };
};

export default connect(mapStateToProps)(Lane);
