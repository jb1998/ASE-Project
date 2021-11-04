import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const windsorTourLocations = [
  {
    id: 1,
    categoryIcon: 'account_balance',
    categoryTitle: 'Residence',
    locations: [
      'Alumni Hall and Conference Centre'
    ]
  },
  {
    id: 2,
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
    id: 3,
    categoryIcon: 'sentiment_very_satisfied',
    categoryTitle: 'Recreation',
    locations: [
      'St. Denis Athletic & Community Centre',
      'Turtle Island Walk'
    ]
  },
  {
    id: 4,
    categoryIcon: 'people',
    categoryTitle: 'Social',
    locations: [
      'EPICentre'
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

class WindsorTourPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fireeventepicenter = this.fireeventepicenter.bind(this);
  }

  fireeventepicenter(loc) {
    // console.log(loc);
    console.log(loc);


    if (loc === 'EPICentre') {
      console.log((Math.abs(this.props.lat) - Math.abs(42.3111023)));
      console.log(Math.abs(this.props.long) - Math.abs(-83.0375344));

      if (((Math.abs(this.props.lat) - Math.abs(42.30456195766808)) >= 0 && (Math.abs(this.props.lat) - Math.abs(42.30456195766808)) <= 0.001) || ((Math.abs(this.props.lat) - Math.abs(42.30456195766808)) <= 0 && (Math.abs(this.props.lat) - Math.abs(42.30456195766808)) >= -(0.001))) {
        if (((Math.abs(this.props.long) - Math.abs(-83.0640182020208)) >= 0 && (Math.abs(this.props.long) - Math.abs(-83.0640182020208)) <= 0.001) || ((Math.abs(this.props.long) - Math.abs(-83.0640182020208)) <= 0 && (Math.abs(this.props.long) - Math.abs(-83.0640182020208)) >= (-0.001))) {
          window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
        }
      } else {
        window.alert("You are not at the EPI Center");
      }
    }

    if (loc === 'Turtle Island Walk') {
      console.log((Math.abs(this.props.lat) - Math.abs(42.302913607048254)));
      console.log(Math.abs(this.props.long) - Math.abs(-83.06288937320598));

      if (((Math.abs(this.props.lat) - Math.abs(42.302913607048254)) >= 0 && (Math.abs(this.props.lat) - Math.abs(42.302913607048254)) <= 0.001) || ((Math.abs(this.props.lat) - Math.abs(42.30456195766808)) <= 0 && (Math.abs(this.props.lat) - Math.abs(42.30456195766808)) >= -(0.001))) {
        if (((Math.abs(this.props.long) - Math.abs(-83.06288937320598)) >= 0 && (Math.abs(this.props.long) - Math.abs(-83.06288937320598)) <= 0.001) || ((Math.abs(this.props.long) - Math.abs(-83.0640182020208)) <= 0 && (Math.abs(this.props.long) - Math.abs(-83.0640182020208)) >= (-0.001))) {
          window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
        }
      } else {
        window.alert("You are not at the Turtle Island Walk");
      }
    }


    if (loc === 'Odette School of Business') {
      console.log((Math.abs(this.props.lat) - Math.abs(42.3051739570509)));
      console.log(Math.abs(this.props.long) - Math.abs(-83.06453655784131));

      if (((Math.abs(this.props.lat) - Math.abs(42.3051739570509)) >= 0 && (Math.abs(this.props.lat) - Math.abs(42.3051739570509)) <= 0.001) || ((Math.abs(this.props.lat) - Math.abs(42.30456195766808)) <= 0 && (Math.abs(this.props.lat) - Math.abs(42.30456195766808)) >= -(0.001))) {
        if (((Math.abs(this.props.long) - Math.abs(-83.06453655784131)) >= 0 && (Math.abs(this.props.long) - Math.abs(-83.06453655784131)) <= 0.001) || ((Math.abs(this.props.long) - Math.abs(-83.0640182020208)) <= 0 && (Math.abs(this.props.long) - Math.abs(-83.0640182020208)) >= (-0.001))) {
          window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
        }
      } else {
        window.alert("You are not at the Odette School of Business");
      }
    }



    if (loc === 'Leddy Library') {
      console.log((Math.abs(this.props.lat) - Math.abs(42.30787102632674)));
      console.log(Math.abs(this.props.long) - Math.abs(-83.0375344));

      if (((Math.abs(this.props.lat) - Math.abs(42.30787102632674)) >= 0 && (Math.abs(this.props.lat) - Math.abs(42.30787102632674)) <= 0.001) || ((Math.abs(this.props.lat) - Math.abs(42.30456195766808)) <= 0 && (Math.abs(this.props.lat) - Math.abs(42.30456195766808)) >= -(0.001))) {
        if (((Math.abs(this.props.long) - Math.abs(-83.06783345969251)) >= 0 && (Math.abs(this.props.long) - Math.abs(-83.06783345969251)) <= 0.001) || ((Math.abs(this.props.long) - Math.abs(-83.0640182020208)) <= 0 && (Math.abs(this.props.long) - Math.abs(-83.0640182020208)) >= (-0.001))) {
          window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
        }
      } else {
        window.alert("You are not at the Leddy Library");
      }
    }



  }



  render() {
    const { lat, long } = this.props;

    return (
      <div >
        {windsorTourLocations.map(({ id, categoryIcon, categoryTitle, locations }) => (
          <Fragment>
            <PlaceCategory key={id}>
              <PlaceCategoryIcon>
                <i class="small material-icons">{categoryIcon}</i>
              </PlaceCategoryIcon>
              <PlaceCategoryTitle>{categoryTitle}</PlaceCategoryTitle>
            </PlaceCategory>
            {locations.map((loc, index) => {
              return (
                <Locations >
                  <LocationIcon>
                    <i class="small material-icons">location_on</i>
                  </LocationIcon>
                  <LocationTitle onClick={() => this.fireeventepicenter(loc)}>{loc}</LocationTitle>
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