import React, { Component } from 'react';
import Lane from './Lane';

export default class RacingHomeGame extends Component {
  render() {
    return (<div class="container">
              <div class="row">
                <div class="col"><Lane /></div>
                <div class="col"><Lane /></div>
                <div class="col"><Lane /></div>
                <div class="col"><Lane /></div>
              </div>
            </div>)
  }
}
