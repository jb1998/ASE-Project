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
  render() {
    return (
      <div>
          {windsorTourLocations.map(({id, categoryIcon, categoryTitle, locations}) => (
              <Fragment>
              <PlaceCategory key={id}>
                <PlaceCategoryIcon> 
                <i class="small material-icons">{categoryIcon}</i>
                </PlaceCategoryIcon>        
                <PlaceCategoryTitle>{categoryTitle}</PlaceCategoryTitle>
            </PlaceCategory>
            {locations.map((loc, index) => {
                return (
                    <Locations>
                        <LocationIcon> 
                        <i class="small material-icons">location_on</i>
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