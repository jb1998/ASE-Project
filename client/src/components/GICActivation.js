import React, { Component, Fragment } from 'react';
import GICActivationHeader from './GICActivationHeader';
import WindsorTourPlaces from './WindsorTourPlaces';
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
        <GICActivationHeader handleBackButton={this.handleBackButton}/>
        <div className="gictext">
            <ol>
            <li>Book an appointment  with the bank that you deposited the GIC amount.</li>
            <li>Go to the bank at the the time of the appointment.</li>
            <li>Carry the following documents for the GIC activation Passport</li>
                <ol  type="a">
                        <li>Study permit</li>
                        <li>Bank welcome letter</li>
                        <li>SIN number</li>
                </ol>
            <li>Book an appointment  with the bank that you deposited the GIC amount.</li>
            <li>Provide the needed documents to the bank employee along with choosing theappropriate credit card plan.</li>
            </ol>
       
  
        </div>
       
       
      </div>  
        }
      </Fragment>   
    );
  }
}

export default GICActivation;