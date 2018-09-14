import React from 'react';
import './LaneGrid.css';
import car from '../img/car.png';
import tree from '../img/tree.gif';

const LaneGrid = (props) => {
  if (props.carHere) {
    return (
      <div className="LaneGrid bg-warning"><img src={car} className="car" /></div>
    )
  } else if (props.obstacleHere) {
    return (
      <div className="LaneGrid"><img src={tree} className="tree" /></div>
    )
  } else {
    return (
      <div className="LaneGrid"></div>
    )
  }
}

export default LaneGrid;
