import React from 'react';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {
  //...

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(this.props.benches);

    this.map.addListener('idle', () => {
      const latLngBounds = this.map.getBounds();
      const northEast = latLngBounds.getNorthEast();
      const southWest = latLngBounds.getSouthWest();
      const bounds = {
        northEast: {
          lat: northEast.lat(),
          lng: northEast.lng(),
        },
        southWest: {
          lat: southWest.lat(),
          lng: southWest.lng(),
        }
      };

      this.props.filterMarkers({bounds});
    });
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (
      // ...
      <div id="map-container" ref={ map => this.mapNode = map }> // this ref gives us access to the map dom node
      </div>
      // ...
    );
  }

  //...
}

export default BenchMap;
