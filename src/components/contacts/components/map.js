import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { MarkerStyle } from './map.styled';

const AnyReactComponent = ({ text }) => <div style={MarkerStyle}>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.9681583456894,
      lng: 30.316482075044526
    },
    zoom: 17
  };

  render() {
    return (
      <div style={{ height: '336px', width: '649px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyALE4JD6ZByBzKXPGdA-TYP9MqeXAkHsRE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="Escape room"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
