import React, { Component } from 'react';
import LaneGrid from './LaneGrid';
import './Lane.css';
import { switchToLane } from '../actions/yourCar';
import { connect } from 'react-redux';
import hotkeys from 'hotkeys-js';
import { endGame } from '../actions/gameState';

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
    if (lane < 0 || lane > 3) {
      return;
    }
    this.props.dispatch(switchToLane(lane));
    const collided = this.props.checkForCollision();
    if (collided) {
      this.props.dispatch(endGame('you-lose'));
    }
  }
  render() {
    hotkeys('left', () => {
      this.handleLaneSwitch(this.props.yourCar.currentLane - 1);
    });
    hotkeys('right', () => {
      this.handleLaneSwitch(this.props.yourCar.currentLane + 1);
    });
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
