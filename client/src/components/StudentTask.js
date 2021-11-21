import React, { Component, Fragment } from 'react';
import StudentTaskHeader from './StudentTaskHeader';
import StudentTaskPlaces from './StudentTaskPlaces';
import Navagation from './Navagation';

class StudentTask extends Component {

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
        <StudentTaskHeader handleBackButton={this.handleBackButton}/>
        <StudentTaskPlaces lat={lat} long={long}/>
      </div>  
        }
      </Fragment>   
    );
  }
}

export default StudentTask;