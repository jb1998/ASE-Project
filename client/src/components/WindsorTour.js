import React, { Component } from 'react';
import WindsorTourHeader from './WindsorTourHeader';
import WindsorTourPlaces from './WindsorTourPlaces';

class WindsorTour extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null 
    };   
  }

  componentDidMount() {
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition( async (position) => {
            
            this.setState({ 
              lat: position.coords.latitude,
              long: position.coords.longitude
            });

        }, (e) => {
            console.log(e);
        });
    } else {
        console.log("navigator not supported");
    }
}
  

  render() {

    const {lat, long} = this.state;

    return (


      <div>
        <WindsorTourHeader />
        <WindsorTourPlaces lat={lat} long={long}/>
      </div>
     
    );
  }
}

export default WindsorTour;