import React, { Component } from 'react';
import Lane from './Lane';

export default class RacingHomeGame extends Component {
  render() {
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
