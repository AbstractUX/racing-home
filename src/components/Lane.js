import React, { Component } from 'react';
import LaneGrid from './LaneGrid';

export default class Lane extends Component {
  renderGrids = (numOfGrids) => {
    const laneGrids = [];
    for (let i = 0; i < numOfGrids; i++) {
      laneGrids.push(<LaneGrid />);
    }
    return laneGrids;
  }
  render() {
    return (<div>
              {this.renderGrids(12)}
            </div>)
  }
}
