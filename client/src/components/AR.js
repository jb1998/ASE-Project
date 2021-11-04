import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState, useReducer } from 'react';
import Landing from './components/Landing';
var lonvar=10;
var latvar=10;
function AR() {


  // navigate to link if within range 

  const fireeventepicenterEPICentre = () => {

    console.log((Math.abs(latvar)-Math.abs(42.3111023))); 
    console.log(Math.abs(lonvar)-Math.abs(-83.0375344));

    if(((Math.abs(latvar)-Math.abs(42.30456195766808))>=0 && (Math.abs(latvar)-Math.abs(42.30456195766808))<=0.001) || ((Math.abs(latvar)-Math.abs(42.30456195766808))<=0 && (Math.abs(latvar)-Math.abs(42.30456195766808))>=-(0.001))){
      if(((Math.abs(lonvar)-Math.abs(-83.0640182020208))>=0 && (Math.abs(lonvar)-Math.abs(-83.0640182020208))<=0.001) || ((Math.abs(lonvar)-Math.abs(-83.0640182020208))<=0 && (Math.abs(lonvar)-Math.abs(-83.0640182020208))>=(-0.001))){
        window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
      }
    }else{
      window.alert("You are not at the EPI Center");
    }
  }


  const fireeventeAlumniHall = () => {

    console.log((Math.abs(latvar)-Math.abs(42.3111023))); 
    console.log(Math.abs(lonvar)-Math.abs(-83.0375344));

    if(((Math.abs(latvar)-Math.abs(42.302913607048254))>=0 && (Math.abs(latvar)-Math.abs(42.302913607048254))<=0.001) || ((Math.abs(latvar)-Math.abs(42.302913607048254))<=0 && (Math.abs(latvar)-Math.abs(42.302913607048254))>=-(0.001))){
      if(((Math.abs(lonvar)-Math.abs(-83.06288937320598))>=0 && (Math.abs(lonvar)-Math.abs(-83.06288937320598))<=0.001) || ((Math.abs(lonvar)-Math.abs(-83.06288937320598))<=0 && (Math.abs(lonvar)-Math.abs(-83.06288937320598))>=(-0.001))){
        window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
      }
    }else{
      window.alert("You are not at the  Alumni Hall");
    }
  }

  const fireeventepicenterOdette = () => {

    console.log((Math.abs(latvar)-Math.abs(42.3111023))); 
    console.log(Math.abs(lonvar)-Math.abs(-83.0375344));

    if(((Math.abs(latvar)-Math.abs(42.3051739570509))>=0 && (Math.abs(latvar)-Math.abs(42.3051739570509))<=0.001) || ((Math.abs(latvar)-Math.abs(42.3051739570509))<=0 && (Math.abs(latvar)-Math.abs(42.3051739570509))>=-(0.001))){
      if(((Math.abs(lonvar)-Math.abs(-83.06453655784131))>=0 && (Math.abs(lonvar)-Math.abs(-83.06453655784131))<=0.001) || ((Math.abs(lonvar)-Math.abs(-83.06453655784131))<=0 && (Math.abs(lonvar)-Math.abs(-83.06453655784131))>=(-0.001))){
        window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
      }
    }else{
      window.alert("You are not at the Odette School of Business");
    }
  }

  const fireeventepicenterLeddy = () => {

    console.log((Math.abs(latvar)-Math.abs(42.3111023))); 
    console.log(Math.abs(lonvar)-Math.abs(-83.0375344));

    if(((Math.abs(latvar)-Math.abs(42.30787102632674))>=0 && (Math.abs(latvar)-Math.abs(42.30787102632674))<=0.001) || ((Math.abs(latvar)-Math.abs(42.30787102632674))<=0 && (Math.abs(latvar)-Math.abs(42.30787102632674))>=-(0.001))){
      if(((Math.abs(lonvar)-Math.abs(-83.06783345969251))>=0 && (Math.abs(lonvar)-Math.abs(-83.06783345969251))<=0.001) || ((Math.abs(lonvar)-Math.abs(-83.06783345969251))<=0 && (Math.abs(lonvar)-Math.abs(-83.06783345969251))>=(-0.001))){
        window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
      }
    }else{
      window.alert("You are not at the Leddy Center");
    }
  }
  
  const fireeventepicenterDillon = () => {

    console.log((Math.abs(latvar)-Math.abs(42.3111023))); 
    console.log(Math.abs(lonvar)-Math.abs(-83.0375344));

    if(((Math.abs(latvar)-Math.abs(42.30649720520779))>=0 && (Math.abs(latvar)-Math.abs(42.30649720520779))<=0.001) || ((Math.abs(latvar)-Math.abs(42.30649720520779))<=0 && (Math.abs(latvar)-Math.abs(42.30649720520779))>=-(0.001))){
      if(((Math.abs(lonvar)-Math.abs(-83.06775508852849))>=0 && (Math.abs(lonvar)-Math.abs(-83.06775508852849))<=0.001) || ((Math.abs(lonvar)-Math.abs(-83.06775508852849))<=0 && (Math.abs(lonvar)-Math.abs(-83.06775508852849))>=(-0.001))){
        window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
      }
    }else{
      window.alert("You are not at the Dillon");
    }
  }
  const fireeventepicenterEssex = () => {

    console.log((Math.abs(latvar)-Math.abs(42.3111023))); 
    console.log(Math.abs(lonvar)-Math.abs(-83.0375344));

    if(((Math.abs(latvar)-Math.abs(42.30509546137389))>=0 && (Math.abs(latvar)-Math.abs(42.30509546137389))<=0.001) || ((Math.abs(latvar)-Math.abs(42.30509546137389))<=0 && (Math.abs(latvar)-Math.abs(42.30509546137389))>=-(0.001))){
      if(((Math.abs(lonvar)-Math.abs(-83.06675840202075))>=0 && (Math.abs(lonvar)-Math.abs(-83.06675840202075))<=0.001) || ((Math.abs(lonvar)-Math.abs(-83.06675840202075))<=0 && (Math.abs(lonvar)-Math.abs(-83.06675840202075))>=(-0.001))){
        window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
      }
    }else{
      window.alert("You are not at the Essex");
    }
  }
  const fireeventepicenterWindsorArmouries = () => {

    console.log((Math.abs(latvar)-Math.abs(42.3111023))); 
    console.log(Math.abs(lonvar)-Math.abs(-83.0375344));

    if(((Math.abs(latvar)-Math.abs(42.31776157030733))>=0 && (Math.abs(latvar)-Math.abs(42.31776157030733))<=0.001) || ((Math.abs(latvar)-Math.abs(42.31776157030733))<=0 && (Math.abs(latvar)-Math.abs(42.31776157030733))>=-(0.001))){
      if(((Math.abs(lonvar)-Math.abs(-83.03825516709757))>=0 && (Math.abs(lonvar)-Math.abs(-83.03825516709757))<=0.001) || ((Math.abs(lonvar)-Math.abs(-83.03825516709757))<=0 && (Math.abs(lonvar)-Math.abs(-83.03825516709757))>=(-0.001))){
        window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
      }
    }else{
      window.alert("You are not at the Armouries");
    }
  }
  const fireeventepicenterTurtle = () => {

    console.log((Math.abs(latvar)-Math.abs(42.3111023))); 
    console.log(Math.abs(lonvar)-Math.abs(-83.0375344));

    if(((Math.abs(latvar)-Math.abs(42.302913607048254))>=0 && (Math.abs(latvar)-Math.abs(42.302913607048254))<=0.001) || ((Math.abs(latvar)-Math.abs(42.302913607048254))<=0 && (Math.abs(latvar)-Math.abs(42.302913607048254))>=-(0.001))){
      if(((Math.abs(lonvar)-Math.abs(-83.06288937320598))>=0 && (Math.abs(lonvar)-Math.abs(-83.06288937320598))<=0.001) || ((Math.abs(lonvar)-Math.abs(-83.06288937320598))<=0 && (Math.abs(lonvar)-Math.abs(-83.06288937320598))>=(-0.001))){
        window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
      }
    }else{
      window.alert("You are not at the Turtle");
    }
  }
  const fireeventepicenterLumleyCentre = () => {

    console.log((Math.abs(latvar)-Math.abs(42.3111023))); 
    console.log(Math.abs(lonvar)-Math.abs(-83.0375344));

    if(((Math.abs(latvar)-Math.abs(42.30493767455689))>=0 && (Math.abs(latvar)-Math.abs(42.30493767455689))<=0.001) || ((Math.abs(latvar)-Math.abs(42.30493767455689))<=0 && (Math.abs(latvar)-Math.abs(42.30493767455689))>=-(0.001))){
      if(((Math.abs(lonvar)-Math.abs(-83.0620939155131))>=0 && (Math.abs(lonvar)-Math.abs(-83.0620939155131))<=0.001) || ((Math.abs(lonvar)-Math.abs(-83.0620939155131))<=0 && (Math.abs(lonvar)-Math.abs(-83.0620939155131))>=(-0.001))){
        window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
      }
    }else{
      window.alert("You are not at the Lumley Centre");
    }
  }
  const fireeventepicenterDenisAthletic = () => {

    console.log((Math.abs(latvar)-Math.abs(42.3111023))); 
    console.log(Math.abs(lonvar)-Math.abs(-83.0375344));

    if(((Math.abs(latvar)-Math.abs(42.29924028596501))>=0 && (Math.abs(latvar)-Math.abs(42.29924028596501))<=0.001) || ((Math.abs(latvar)-Math.abs(42.29924028596501))<=0 && (Math.abs(latvar)-Math.abs(42.29924028596501))>=-(0.001))){
      if(((Math.abs(lonvar)-Math.abs(-83.06141230387232))>=0 && (Math.abs(lonvar)-Math.abs(-83.06141230387232))<=0.001) || ((Math.abs(lonvar)-Math.abs(-83.06141230387232))<=0 && (Math.abs(lonvar)-Math.abs(-83.06141230387232))>=(-0.001))){
        window.open("https://ashmi275.github.io/location-based-augumented-reality/index.html", "_blank")
      }
    }else{
      window.alert("You are not at the Denis Athletic");
    }
  }

  
  return (
    <div className="App">
      {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
           console.log("Longitude is :", position.coords.longitude);
           latvar=position.coords.latitude;
           lonvar=position.coords.longitude;
         }

         )

      }

 <Button onClick={fireeventepicenter} variant="primary" size="lg">
    Click to open VR camera
  </Button>
   

   
    </div>
  );
}

export default AR;
