import React, { Component } from 'react';
import WindsorTourHeader from './WindsorTourHeader';
import WindsorTourPlaces from './WindsorTourPlaces';

class WindsorTour extends Component {
  render() {
    return (
      <div>
        <WindsorTourHeader />
        <WindsorTourPlaces />
      </div>
    );
  }
}

export default WindsorTour;