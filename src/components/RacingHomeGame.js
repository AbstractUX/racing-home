import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createObstacle, moveDown, killLastGridPositionObstacles } from '../actions/obstacles';
import { addMile } from '../actions/yourCar';
import { endGame } from '../actions/gameState';
import Lane from './Lane';
import StatsDisplay from './StatsDisplay';

class RacingHomeGame extends Component {
  timerTicks = () => {
    const randomLane = Math.floor(Math.random() * 4);
    this.props.dispatch(addMile());
    this.props.dispatch(createObstacle('tree', randomLane));
    this.props.dispatch(moveDown());
    this.props.dispatch(killLastGridPositionObstacles());

    const collided = this.checkForCollision();
    if (collided) {
      this.props.dispatch(endGame('you-lose'));
    }

  }
  checkForCollision = () => {
    let collided = false;
    const collidableObstacles = this.props.obstacles.filter((obstacle) => {
      return obstacle.gridPosition === 11
    });

    collidableObstacles.map((collidableObstacle) => {
      if (collidableObstacle.lane === this.props.yourCar.currentLane) {
        collided = true;
      }
    });
    return collided;
  }
  componentDidMount() {
    setInterval(() => {
      this.timerTicks();
    }, 400);
  }
  render() {
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

const mapStateToProps = (state) => {
  return {
    yourCar: state.yourCar,
    obstacles: state.obstacles,
    gameState: state.gameState
  }
}

export default connect(mapStateToProps)(RacingHomeGame);
