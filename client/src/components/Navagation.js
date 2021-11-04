
import '../App.css';
import Button from 'react-bootstrap/Button';
import { useState, useReducer } from 'react';
import search from '../images/search.png';
import list from '../images/list.png';
import WindsorTour from './WindsorTour';
import { Fragment } from 'react';

function Navagation() {
const [windsortour,setwindsortour] = useState(false);
 const exploreWindsor=()=> {
    //   console.log("function called")
    // return <WindsorTour></WindsorTour>;
    setwindsortour(true);

  }

    
  return (

    <Fragment>
        {
            windsortour? (<WindsorTour></WindsorTour>):(
                <div className="App">
    
                <div className="main-design">
                    <div className="main-heading">
                    
                        What brings you to WINSSIST?
                    </div>
                    <div className="card-here-navigation" onClick={()=> exploreWindsor ()}>
                        <div className="left-image">
                            <img src={search} style={ {height:'4rem', width:'4rem', margin:'0.5rem', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></img>
                        </div>
                        <div className="right-text">Explore Windsor</div>
                        
                    </div>
                    <div className="card-here-navigation">
                    <div className="left-image">
                            <img src={list} style={ {height:'4rem', width:'4rem', margin:'0.5rem', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></img>
                        </div>
                        <div className="right-text">Complete Student Task</div>
                    </div>
                   
                </div>
           
           
            </div>
            )
        }
    </Fragment>
   
  );
}

export default Navagation;
