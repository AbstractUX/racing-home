import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createObstacle, moveDown, killLastGridPositionObstacles } from '../actions/obstacles';
import { addMile } from '../actions/yourCar';
import Lane from './Lane';
import StatsDisplay from './StatsDisplay';

class RacingHomeGame extends Component {
  timerTicks = () => {
    const randomLane = Math.floor(Math.random() * 4);
    console.log(randomLane);
    this.props.dispatch(addMile());
    this.props.dispatch(createObstacle('tree', randomLane));
    this.props.dispatch(moveDown());
    this.props.dispatch(killLastGridPositionObstacles());
  }
  render() {
    setInterval(() => {
      this.timerTicks();
    }, 400);
    return (<div className="container">
              <div className="row">
                <div className="col"><Lane laneNumber={0} /></div>
                <div className="col"><Lane laneNumber={1} /></div>
                <div className="col"><Lane laneNumber={2} /></div>
                <div className="col"><Lane laneNumber={3} /></div>
              </div>
              <div><StatsDisplay /></div>
            </div>)
  }
}

export default connect()(RacingHomeGame);
