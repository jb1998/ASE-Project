import React, { Component, Fragment } from 'react';
import StudentTaskHeader from './StudentTaskHeader';
import StudentTaskPlaces from './StudentTaskPlaces';
import Navagation from './Navagation';
import SIN from './SIN'
import GIC from './GICActivation'

class StudentTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backButtonClicked: false,
      gic: false,
      sin: false
    };   
    this.handleBackButton = this.handleBackButton.bind(this); 
    this.handleTasksBackButton = this.handleTasksBackButton.bind(this);
  }

  handleBackButton(){
    this.setState({
      backButtonClicked: true
    })
  }

  handleTasksBackButton(task){
    switch (task) {
      case 'Get Social Insurance Number(SIN)':
          this.setState(
              { sin: true }
          )
          break;
      case 'Activate GIC':
          this.setState(
              { gic: true }
          )
          break;
      default:
          window.alert("Try Again!");
  }
  }
  

  render() {
    const {sin, gic, backButtonClicked} = this.state;
    return (
      <Fragment>
        {backButtonClicked ? <Navagation /> :
        sin ? <SIN /> :
        gic ? <GIC /> :
        <div>
        <StudentTaskHeader handleBackButton={this.handleBackButton}/>
        <StudentTaskPlaces handleTasksBackButton={this.handleTasksBackButton}/>
        </div>  
        }
      </Fragment>   
    );
  }
}

export default StudentTask;