import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createObstacle, moveDown, killLastGridPositionObstacles } from '../actions/obstacles';
import { addMile } from '../actions/yourCar';
import { endGame } from '../actions/gameState';
import Lane from './Lane';
import StatsDisplay from './StatsDisplay';
import Footer from './Footer';

class RacingHomeGame extends Component {
  state = {
    timer: undefined,
    speed: 300
  }
  timerTicks = () => {
    const gameState = this.props.gameState;
    if (gameState === 'in-progress') {
      const randomLane = Math.floor(Math.random() * 4);
      if (this.props.yourCar.miles % 5 === 0) {
        if (this.state.speed > 30) {
            this.increaseSpeedBy(5);
        }
      }
      this.props.dispatch(addMile());
      this.props.dispatch(createObstacle('tree', randomLane));
      this.props.dispatch(moveDown());
      this.props.dispatch(killLastGridPositionObstacles());

      const collided = this.checkForCollision();
      if (collided) {
        this.props.dispatch(endGame('you-lose'));
      }
    } else if (gameState === 'you-lose') {
      clearInterval(this.state.timer);
    }
  }
  increaseSpeedBy = (speedIncrement) => {
    clearInterval(this.state.timer);
    this.setState((prevState) => ({
      speed: prevState.speed - speedIncrement
    }));
    this.resetTimer(this.state.speed);
  }
  resetTimer = (speed) => {
    const timer = setInterval(() => {
      this.timerTicks();
    }, speed);
    this.setState(() => ({
      timer
    }))
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
    this.resetTimer(this.state.speed);
  }
  render() {
    const gameOverDisplay = (
      <div>
        <h3>GAME OVER!</h3>
        <p>You drove too fast and crashed. Safety behind the wheel is very important. </p>
        <p>Fortunately a <a href="https://amzn.to/2N9e1wF">Dashboard Camera Recorder</a> can back you up in the event of any incident on the road.</p>
        <button onClick={() => window.location.reload()}>Play again!</button>
      </div>
    )

    return (<div className="container">
              <div className="row">
                <div className="col"><Lane laneNumber={0} /></div>
                <div className="col"><Lane laneNumber={1} /></div>
                <div className="col"><Lane laneNumber={2} /></div>
                <div className="col"><Lane laneNumber={3} /></div>
              </div>
              <div><StatsDisplay /></div>
              <div>{this.props.gameState === 'you-lose' && gameOverDisplay}</div>
              <Footer />
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
