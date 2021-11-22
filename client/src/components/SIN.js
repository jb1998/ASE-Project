import React, { Component, Fragment } from 'react';
import SINHeader from './SINheader';
import StudentTask from './StudentTask';
import '../App.css';


class SinActivation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backButtonClicked: false
    };   
    this.handleBackButton = this.handleBackButton.bind(this); 
  }

  handleBackButton(){
    this.setState({
      backButtonClicked: true
    })
  }
  

  render() {
    const {backButtonClicked} = this.state;
    return (
      <Fragment>
        {backButtonClicked ? <StudentTask /> :
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

export default SinActivation;
