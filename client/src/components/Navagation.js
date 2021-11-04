
import '../App.css';
import { useState } from 'react';
import search from '../images/search.png';
import list from '../images/list.png';
import WindsorTour from './WindsorTour';
import { Fragment } from 'react';

function Navagation() {

const [windsortour,setwindsortour] = useState(false);

 const exploreWindsor=()=> {
    setwindsortour(true);
  }

    
  return (

    <Fragment>
        {
            windsortour? (<WindsorTour />):(
                <div className="App">
    
                <div className="main-design">
                    <div className="main-heading">
                    
                        What brings you to WINSSIST?
                    </div>
                    <div className="card-here-navigation" onClick={()=> exploreWindsor ()}>
                        <div className="left-image">
                            <img alt="" src={search} style={ {height:'4rem', width:'4rem', margin:'0.5rem', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></img>
                        </div>
                        <div className="right-text">Explore Windsor</div>
                        
                    </div>
                    <div className="card-here-navigation">
                    <div className="left-image">
                            <img alt="" src={list} style={ {height:'4rem', width:'4rem', margin:'0.5rem', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></img>
                        </div>
                        <div className="right-text">Complete Student Tasks</div>
                    </div>
                   
                </div>
           
           
            </div>
            )
        }
    </Fragment>
   
  );
}

export default Navagation;
