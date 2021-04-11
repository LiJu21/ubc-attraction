import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { getAttractionList } from './Attractions';
import {Layout} from 'antd';
import background from './Header.png';

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

  replaceSpace = str => {
    if(typeof str == "undefined") return "";
    return str.replaceAll(" ","_");
  }

  render() {
    var attractions = getAttractionList();
    console.log(attractions);
    return (
      <Layout>
        <Layout.Header style = {{backgroundImage:`url(${background})`,backgroundSize:"cover", 
        height:"20vh", display:"flex", backgroundPosition:"center", position:"relative"}}>
        </Layout.Header>
        <Layout.Content>
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
                  id = {attraction.id}
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
                <img width="200" height="150" src={this.state.activeMarker.id+'.PNG'}></img>
              </div>
              <div align="center">
                { this.state.activeMarker.id == 0 ? <a href={'/gallery/'+this.replaceSpace(this.state.activeMarker.name)}>Gallery</a> :
                <a href={'/fakegallery'}>Gallery</a>}
                <br/>
                <a href={'/post/'+this.replaceSpace(this.state.activeMarker.name)}>Post</a>
              </div>
            </InfoWindow>
          </Map>
        </Layout.Content>
        <Layout.Footer style = {{backgroundColor:"#002145",height:"3vh", display:"flex", position:"fixed", bottom:0, width:'100%', color:'white'}}>
            Explore UBC @2021
        </Layout.Footer>
      </Layout>
    );

}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBgao-aq8zyAUnJUCg335-tYIDAI5AJeAc'
})(MapContainer);