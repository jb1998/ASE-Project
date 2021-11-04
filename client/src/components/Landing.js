
import '../App.css';
import Button from 'react-bootstrap/Button';
import { useState, useReducer, Component } from 'react';
import Navagation from './Navagation';


class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {showNavigation: false}; 
  
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({showNavigation:true})
    }, 5000)
  }

  render(){
    return(
      <div>
 {
        this.state.showNavigation? (<Navagation></Navagation>) : (
          <div className="App">
       
       
          <div className="main-design">
          
          <div className="card-here">
          
          </div>
          <div className="card-here2">
              please view in mobile view
          </div>
          </div>
             
             
              </div>
        )
      }

      </div>
     
   
    )
  }
  

}

export default Landing;
