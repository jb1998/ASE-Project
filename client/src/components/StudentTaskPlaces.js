import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const newComersTasks = [
    {
        id: 1,
        categoryIcon: 'school',
        categoryTitle: 'International Students Tasks',
        tasks: [
            'Get Social Insurance Number(SIN)',
            'Activate GIC',
        ]         
    }
]

const TasksCategory = styled.div`
width: 100%;
padding:20px;
`
const TasksCategoryIcon = styled.div`
display: inline-block;
vertical-align: middle;
`
const TasksCategoryTitle = styled.div`
display: inline-block;
margin-left: 30px;
font-size: 18px;
font-weight: 700;
`
const Tasks = styled.div`
width: 100%;
margin: 0 0 4px 70px;
`
const TasksIcon = styled.div`
display: inline-block;
vertical-align: middle;
color: #db4437;
`
const TasksTitle = styled.div`
display: inline-block;
margin-left: 5px;
font-size: 16px;
font-weight: 500;
`

class StudentTaskPlaces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gic: false,
            sin: false
        };
        this.handleTasksScreen = this.handleTasksScreen.bind(this);
    }
    handleTasksScreen(loc) {
        switch (loc) {
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
    return (
      <div >
        {newComersTasks.map(({id, categoryIcon, categoryTitle, tasks}) => (
            <Fragment>
            <TasksCategory key={id}>
                <TasksCategoryIcon> 
                <i className="small material-icons">{categoryIcon}</i>
                </TasksCategoryIcon>        
                <TasksCategoryTitle>{categoryTitle}</TasksCategoryTitle>
            </TasksCategory> 
            { tasks.map((task, index) => {
                return (                    
                    <Tasks key={index} onClick={() => this.props.handleTasksBackButton(task)}>
                        <TasksIcon> 
                        <i className="small material-icons">today</i>
                        </TasksIcon>  
                        <TasksTitle>{task}</TasksTitle>
                    </Tasks>
                        )
            })}
            </Fragment>
            ))
          }
      </div>
    );
  }
}


export default StudentTaskPlaces;
