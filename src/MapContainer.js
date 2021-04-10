import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { getAttractionList } from './Attractions';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, 
    activeMarker: {}, 
    selectedPlace: {}          
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    var attractions = getAttractionList();
    return (
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 49.2607522179149,
            lng: -123.24596161562468 // UBC coords
          }
        }
      >
        {attractions.map((attraction, index) => (
            <Marker
              key={index} // Need to be unique
              onClick={this.onMarkerClick}
              name={attraction.title}
              position={attraction.position}
            >
            </Marker>
          ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div align="center">
            <h4>{this.state.activeMarker.name}</h4>
          </div>
          <div align="center">
            <a href={'/gallery?id='+this.state.activeMarker.name}>Gallery</a>
            <a href={'/post?id='+this.state.activeMarker.name}>Post</a>
          </div>
        </InfoWindow>
      </Map>
            
    );

}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBgao-aq8zyAUnJUCg335-tYIDAI5AJeAc'
})(MapContainer);