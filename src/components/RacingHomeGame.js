import React, { Component } from 'react';
import Lane from './Lane';
import { connect } from 'react-redux';
import { createObstacle, moveDown, killLastGridPositionObstacles } from '../actions/obstacles';

class RacingHomeGame extends Component {
  timerTicks = () => {
    const randomLane = Math.floor(Math.random() * 4);
    console.log(randomLane);
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
            </div>)
  }
}

export default connect()(RacingHomeGame);
