
import '../App.css';
import { useState } from 'react';
import search from '../images/search.png';
import list from '../images/list.png';
import WindsorTour from './WindsorTour';
import StudentTask from './StudentTask';
import { Fragment } from 'react';

function Navagation() {

    const [windsortour, setwindsortour] = useState(false);
    const [studentTask, setstudentTask] = useState(false);

    const exploreWindsor = () => {
        setwindsortour(true);
    }
    const exploreStudentTask = () => {
        setstudentTask(true);
    }

    return (

        <Fragment>
            {(windsortour) ? <WindsorTour /> :
                (studentTask) ? (<StudentTask />) : (
                    <div className="App">
                        <div className="main-design">
                            <div className="main-heading">
                                What brings you to WINASSIST?
                            </div>
                            <div className="card-here-navigation" onClick={() => exploreWindsor()}>
                                <div className="left-image">
                                    <img alt="" src={search} style={{ height: '4rem', width: '4rem', margin: '0.5rem', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></img>
                                </div>
                                <div className="right-text">Explore University Of Windsor</div>
                            </div>
                            <div className="card-here-navigation" onClick={() => exploreStudentTask()}>
                                <div className="left-image">
                                    <img alt="" src={list} style={{ height: '4rem', width: '4rem', margin: '0.5rem', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></img>
                                </div>
                                <div className="right-text">NewComers to Canada</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment>

    );
}

export default Navagation;
