import React, { Component, Fragment } from 'react';
import WindsorTourHeader from './WindsorTourHeader';
import WindsorTourPlaces from './WindsorTourPlaces';
import Navagation from './Navagation';

class WindsorTour extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
      backButtonClicked: false
    };   
    this.handleBackButton = this.handleBackButton.bind(this); 
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
        console.log("Navigator not supported");
    }
  }

  handleBackButton(){
    this.setState({
      backButtonClicked: true
    })
  }
  

  render() {
    const {lat, long, backButtonClicked} = this.state;
    return (
      <Fragment>
        {backButtonClicked ? <Navagation /> :
        <div>
        <WindsorTourHeader handleBackButton={this.handleBackButton}/>
        <WindsorTourPlaces lat={lat} long={long}/>
      </div>  
        }
      </Fragment>   
    );
  }
}

export default WindsorTour;