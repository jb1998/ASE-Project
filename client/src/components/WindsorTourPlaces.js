import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const windsorTourLocations = [
    {
        id: 101,
        categoryIcon: 'account_balance',
        categoryTitle: 'Residence',
        locations: [
            'Alumni Hall and Conference Centre'
        ]
    },
    {
        id: 102,
        categoryIcon: 'school',
        categoryTitle: 'Education',
        locations: [
            'Odette School of Business',
            'Leddy Library',
            'Dillon Hall',
            'Essex Hall'
        ]         
    },
    {
        id: 103,
        categoryIcon: 'sentiment_very_satisfied',
        categoryTitle: 'Recreation',
        locations: [
            'St. Denis Athletic & Community Centre',
            'Turtle Island Walk'
        ]
      },
      {
        id: 104,
        categoryIcon: 'people',
        categoryTitle: 'Social',
        locations: [
            'EPICentre'
        ]
        },
      {
        id: 105,
        categoryIcon: 'my_location',
        categoryTitle: 'My Location',
        locations: [
            'Current Location'
        ]
        }
    ]

const PlaceCategory = styled.div`
width: 100%;
padding:20px;
`
const PlaceCategoryIcon= styled.div`
display: inline-block;
vertical-align: middle;
`
const PlaceCategoryTitle= styled.div`
display: inline-block;
margin-left: 30px;
font-size: 18px;
font-weight: 700;
`
const Locations = styled.div`
width: 100%;
margin: 0 0 4px 70px;
`
const LocationIcon= styled.div`
display: inline-block;
vertical-align: middle;
color: #db4437;
`
const LocationTitle= styled.div`
display: inline-block;
margin-left: 5px;
font-size: 16px;
font-weight: 500;
`

class WindsorTourPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {};   
    this.handleARScreen = this.handleARScreen.bind(this);
  }

  handleARScreen(loc) {

    const {lat, long} = this.props;

    switch(loc){
    case 'Alumni Hall and Conference Centre':

      if(((Math.abs(lat)-Math.abs(42.302913607048254))>=0 && (Math.abs(lat)-Math.abs(42.302913607048254))<=0.001) || ((Math.abs(lat)-Math.abs(42.302913607048254))<=0 && (Math.abs(lat)-Math.abs(42.302913607048254))>=-(0.001))){
        if(((Math.abs(long)-Math.abs(-83.06288937320598))>=0 && (Math.abs(long)-Math.abs(-83.06288937320598))<=0.001) || ((Math.abs(long)-Math.abs(-83.06288937320598))<=0 && (Math.abs(long)-Math.abs(-83.06288937320598))>=(-0.001))){
          window.alert("Scan the AR marker with your camera for more information on the location.");
          window.open("https://ashmi275.github.io/location-based-augumented-reality/alumni.html", "_blank")
        }
      }else{
        window.alert(`You are not at ${loc} location! Visit ${loc} and scan our AR marker.`);
      }
      break;

    case 'Odette School of Business':

      if(((Math.abs(lat)-Math.abs(42.3051739570509))>=0 && (Math.abs(lat)-Math.abs(42.3051739570509))<=0.001) || ((Math.abs(lat)-Math.abs(42.3051739570509))<=0 && (Math.abs(lat)-Math.abs(42.3051739570509))>=-(0.001))){
        if(((Math.abs(long)-Math.abs(-83.06453655784131))>=0 && (Math.abs(long)-Math.abs(-83.06453655784131))<=0.001) || ((Math.abs(long)-Math.abs(-83.06453655784131))<=0 && (Math.abs(long)-Math.abs(-83.06453655784131))>=(-0.001))){
          window.alert("Scan the AR marker with your camera for more information on the location.");
          window.open("https://ashmi275.github.io/location-based-augumented-reality/odette.html", "_blank")
        }
      }else{
        window.alert(`You are not at ${loc} location! Visit ${loc} and scan our AR marker.`);
      }
      break;

    case 'Leddy Library':

      if(((Math.abs(lat)-Math.abs(42.30787102632674))>=0 && (Math.abs(lat)-Math.abs(42.30787102632674))<=0.001) || ((Math.abs(lat)-Math.abs(42.30787102632674))<=0 && (Math.abs(lat)-Math.abs(42.30787102632674))>=-(0.001))){
        if(((Math.abs(long)-Math.abs(-83.06783345969251))>=0 && (Math.abs(long)-Math.abs(-83.06783345969251))<=0.001) || ((Math.abs(long)-Math.abs(-83.06783345969251))<=0 && (Math.abs(long)-Math.abs(-83.06783345969251))>=(-0.001))){
          window.alert("Scan the AR marker with your camera for more information on the location.");
          window.open("https://ashmi275.github.io/location-based-augumented-reality/leddy.html", "_blank")
        }
      }else{
        window.alert(`You are not at ${loc} location! Visit ${loc} and scan our AR marker.`);
      }
      break;

    case 'Dillon Hall':

      if(((Math.abs(lat)-Math.abs(42.30649720520779))>=0 && (Math.abs(lat)-Math.abs(42.30649720520779))<=0.001) || ((Math.abs(lat)-Math.abs(42.30649720520779))<=0 && (Math.abs(lat)-Math.abs(42.30649720520779))>=-(0.001))){
        if(((Math.abs(long)-Math.abs(-83.06775508852849))>=0 && (Math.abs(long)-Math.abs(-83.06775508852849))<=0.001) || ((Math.abs(long)-Math.abs(-83.06775508852849))<=0 && (Math.abs(long)-Math.abs(-83.06775508852849))>=(-0.001))){
          window.alert("Scan the AR marker with your camera for more information on the location.");
          window.open("https://ashmi275.github.io/location-based-augumented-reality/dillon.html", "_blank")
        }
      }else{
        window.alert(`You are not at ${loc} location! Visit ${loc} and scan our AR marker.`);
      }
      break;

    case 'Essex Hall':

      if(((Math.abs(lat)-Math.abs(42.30509546137389))>=0 && (Math.abs(lat)-Math.abs(42.30509546137389))<=0.001) || ((Math.abs(lat)-Math.abs(42.30509546137389))<=0 && (Math.abs(lat)-Math.abs(42.30509546137389))>=-(0.001))){
        if(((Math.abs(long)-Math.abs(-83.06675840202075))>=0 && (Math.abs(long)-Math.abs(-83.06675840202075))<=0.001) || ((Math.abs(long)-Math.abs(-83.06675840202075))<=0 && (Math.abs(long)-Math.abs(-83.06675840202075))>=(-0.001))){
          window.alert("Scan the AR marker with your camera for more information on the location.");
          window.open("https://ashmi275.github.io/location-based-augumented-reality/essex.html", "_blank")
        }
      }else{
        window.alert(`You are not at ${loc} location! Visit ${loc} and scan our AR marker.`);
      }
      break;

    case 'St. Denis Athletic & Community Centre':

      if(((Math.abs(lat)-Math.abs(42.29924028596501))>=0 && (Math.abs(lat)-Math.abs(42.29924028596501))<=0.001) || ((Math.abs(lat)-Math.abs(42.29924028596501))<=0 && (Math.abs(lat)-Math.abs(42.29924028596501))>=-(0.001))){
        if(((Math.abs(long)-Math.abs(-83.06141230387232))>=0 && (Math.abs(long)-Math.abs(-83.06141230387232))<=0.001) || ((Math.abs(long)-Math.abs(-83.06141230387232))<=0 && (Math.abs(long)-Math.abs(-83.06141230387232))>=(-0.001))){
          window.alert("Scan the AR marker with your camera for more information on the location.");
          window.open("https://ashmi275.github.io/location-based-augumented-reality/denis.html", "_blank")
        }
      }else{
        window.alert(`You are not at ${loc} location! Visit ${loc} and scan our AR marker.`);
      }
      break;

    case 'Turtle Island Walk':

      if(((Math.abs(lat)-Math.abs(42.302913607048254))>=0 && (Math.abs(lat)-Math.abs(42.302913607048254))<=0.001) || ((Math.abs(lat)-Math.abs(42.302913607048254))<=0 && (Math.abs(lat)-Math.abs(42.302913607048254))>=-(0.001))){
        if(((Math.abs(long)-Math.abs(-83.06288937320598))>=0 && (Math.abs(long)-Math.abs(-83.06288937320598))<=0.001) || ((Math.abs(long)-Math.abs(-83.06288937320598))<=0 && (Math.abs(long)-Math.abs(-83.06288937320598))>=(-0.001))){
          window.alert("Scan the AR marker with your camera for more information on the location.");
          window.open("https://ashmi275.github.io/location-based-augumented-reality/turtle.html", "_blank")
        }
      }else{
        window.alert(`You are not at ${loc} location! Visit ${loc} and scan our AR marker.`);
      }
      break;

    case 'EPICentre':

      if(((Math.abs(lat)-Math.abs(42.30456195766808))>=0 && (Math.abs(lat)-Math.abs(42.30456195766808))<=0.001) || ((Math.abs(lat)-Math.abs(42.30456195766808))<=0 && (Math.abs(lat)-Math.abs(42.30456195766808))>=-(0.001))){
        if(((Math.abs(long)-Math.abs(-83.0640182020208))>=0 && (Math.abs(long)-Math.abs(-83.0640182020208))<=0.001) || ((Math.abs(long)-Math.abs(-83.0640182020208))<=0 && (Math.abs(long)-Math.abs(-83.0640182020208))>=(-0.001))){
          window.alert("Scan the AR marker with your camera for more information on the location.");
          window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
        }
      }else{
        window.alert(`You are not at ${loc} location! Visit ${loc} and scan our AR marker.`);
      }
      break;

    case 'Current Location':

      if(((Math.abs(lat)-Math.abs(lat))>=0 && (Math.abs(lat)-Math.abs(lat))<=0.001) || ((Math.abs(lat)-Math.abs(lat))<=0 && (Math.abs(lat)-Math.abs(lat))>=-(0.001))){
        if(((Math.abs(long)-Math.abs(long))>=0 && (Math.abs(long)-Math.abs(long))<=0.001) || ((Math.abs(long)-Math.abs(long))<=0 && (Math.abs(long)-Math.abs(long))>=(-0.001))){
          window.alert("Scan the AR marker with your camera for more information on the location.");
          window.open("https://ashmi275.github.io/location-based-augumented-reality/currentLocation.html", "_blank");
        }
      }else{
        window.alert(`Cannot find your ${loc} ! Visit ${loc} and scan our AR marker.`);
      }
      break;

    default:
      window.alert("No AR screen avaliable. Try Again!");
    }


  }
  
  
  render() {

    return (
      <div >
          {windsorTourLocations.map(({id, categoryIcon, categoryTitle, locations}) => (
              <Fragment>
              <PlaceCategory key={id}>
                <PlaceCategoryIcon> 
                <i className="small material-icons">{categoryIcon}</i>
                </PlaceCategoryIcon>        
                <PlaceCategoryTitle>{categoryTitle}</PlaceCategoryTitle>
            </PlaceCategory>
            {locations.map((loc, index) => {
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

export default WindsorTourPlaces;