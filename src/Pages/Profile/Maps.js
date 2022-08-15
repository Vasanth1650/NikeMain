
//... 
import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location'

//... 

const API_KEY = "AIzaSyBpszKpCUSvpTr11Tab9MTrpWmIlIFfEvM"
 
class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
 
  render() {
    return (
      <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
         
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>
 
    )
  } 
}
 
 
export default HomeComponent;
