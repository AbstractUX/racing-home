import React, { Component } from 'react';
import LaneGrid from './LaneGrid';
import './Lane.css';
import { switchToLane } from '../actions/yourCar';
import { connect } from 'react-redux';

class Lane extends Component {
  renderGrids = (numOfGrids) => {
    const laneGrids = [];
    const obstacles = this.props.obstacles;

    for (let i = 0; i < numOfGrids; i++) {
      if (i !== numOfGrids - 1) {
        laneGrids.push(<LaneGrid key={`lane-${this.props.laneNumber}-grid-${i}`} />);
      } else {
        laneGrids.push(<LaneGrid key={`lane-${this.props.laneNumber}-grid-${i}`} carHere={this.props.yourCar.currentLane === this.props.laneNumber} />);
      }
    }

    obstacles.map((obstacle) => {
      if (obstacle.lane === this.props.laneNumber) {
        laneGrids[obstacle.gridPosition] = (<LaneGrid key={`lane-${this.props.laneNumber}-grid-${obstacle.gridPosition}`} obstacleHere={true} />)
      };
    });

    return laneGrids;
  }
  handleLaneSwitch = (lane) => {
    this.props.dispatch(switchToLane(lane));
  }
  render() {
    return (<div onClick={() => this.handleLaneSwitch(this.props.laneNumber)} className="Lane">
              {this.renderGrids(12)}
            </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    yourCar: state.yourCar,
    obstacles: state.obstacles
  };
};

export default connect(mapStateToProps)(Lane);
