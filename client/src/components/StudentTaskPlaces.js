import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import SIN from './SIN'
import GIC from './GICActivation'

const windsorTourLocations = [
    // {
    //     id: 101,
    //     categoryIcon: 'account_balance',
    //     categoryTitle: 'Residence',
    //     locations: [
    //         'Alumni Hall and Conference Centre'
    //     ]
    // },
    {
        id: 102,
        categoryIcon: 'school',
        categoryTitle: 'Education',
        locations: [
            'SIN',
            'GIC',

        ]
    }
]

const PlaceCategory = styled.div`
width: 100%;
padding:20px;
`
const PlaceCategoryIcon = styled.div`
display: inline-block;
vertical-align: middle;
`
const PlaceCategoryTitle = styled.div`
display: inline-block;
margin-left: 30px;
font-size: 18px;
font-weight: 700;
`
const Locations = styled.div`
width: 100%;
margin: 0 0 4px 70px;
`
const LocationIcon = styled.div`
display: inline-block;
vertical-align: middle;
color: #db4437;
`
const LocationTitle = styled.div`
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
        this.handleARScreen = this.handleARScreen.bind(this);
    }



    handleARScreen(loc) {


        debugger;
        // const {lat, long} = this.props;

        switch (loc) {
            case 'SIN':
                this.setState(
                    { sin: true }
                )
                break;

            case 'GIC':
                this.setState(
                    { gic: true }
                )
                break;


            default:
                window.alert("No data avaliable. Try Again!");
        }


    }


  
render() {

    return (
      <div >
          {windsorTourLocations.map(({ locations}) => (
              <Fragment>
              {/* <PlaceCategory key={id}>
                <PlaceCategoryIcon> 
                <i className="small material-icons">{categoryIcon}</i>
                </PlaceCategoryIcon>        
                <PlaceCategoryTitle>{categoryTitle}</PlaceCategoryTitle>
            </PlaceCategory> */}
            {    this.state.sin?<SIN/>:this.state.gic?<GIC/>:locations.map((loc, index) => {
                return (
                    
                    <Locations key={index} onClick={() => this.handleARScreen(loc)}>
                        <LocationIcon> 
                        <i className="small material-icons">location_on</i>
                        </LocationIcon>  
                        <LocationTitle>{loc}</LocationTitle>
                    </Locations>
                          )
            })}
            </Fragment>
          ))}
      </div>
    );
  }
}


export default StudentTaskPlaces;




// {
//     locations.map((loc, index) => {
//         return (
//             <Locations key={index} onClick={() => this.handleARScreen(loc)}>
//                 <LocationIcon>
//                     <i className="small material-icons">location_on</i>
//                 </LocationIcon>
//                 <LocationTitle>{loc}</LocationTitle>
//             </Locations>
//         )
//     })
// }

// render() {

//     return (
//         <div >
//             {windsorTourLocations.map(({ locations }) => (
//                 <Fragment>
//                     {this.state.sin ? (<SIN />) : {
//                         locations.map((loc, index) => {
//                             return (
//                                 <Locations key={index} onClick={() => this.handleARScreen(loc)}>
//                                     <LocationIcon>
//                                         <i className="small material-icons">location_on</i>
//                                     </LocationIcon>
//                                     <LocationTitle>{loc}</LocationTitle>
//                                 </Locations>
//                             )
//                         })
//                     }}




//                 </Fragment>
//             ))}
//         </div>
//     );
// }
// }