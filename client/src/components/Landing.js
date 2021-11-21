
import '../App.css';
import { Component } from 'react';
import Navagation from './Navagation';


class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {showNavigation: false}; 
  
  }

  componentDidMount() {
    setTimeout(() => {
      if(window.innerWidth <=768){
        this.setState({showNavigation:true})
      }      
    }, 3000)
  }

  render(){
    return(
      <div>
  {
        this.state.showNavigation? (<Navagation />) : (
          <div className="App">      
          <div className="main-design">         
          <div className="card-here">         
          </div>
          <div className="card-here2">
              Please view in mobile view
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
