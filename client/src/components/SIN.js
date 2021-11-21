import React, { Component, Fragment } from 'react';
import SINHeader from './SINheader';
import Navagation from './Navagation';
import '../App.css';


class GICActivation extends Component {

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
        <SINHeader handleBackButton={this.handleBackButton}/>
        <div className="gictext">
        <ol>
        <li>Walk in to the nearest service Ontario centre.</li>
        <li>Carry the following documents for the getting SIN number</li>
        <ol type="a">
            <li>Passport</li>
            <li>Study permit</li>
        </ol>
        <li>Provide family and residential details.</li>

</ol>
            
  
        </div>
       
       
      </div>  
        }
      </Fragment>   
    );
  }
}

export default GICActivation;