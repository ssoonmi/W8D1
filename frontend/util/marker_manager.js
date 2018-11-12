export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromBench(bench) {
    const {id, lat, lng, description} = bench;

    const marker = new google.maps.Marker({
      position: {lat, lng},
      map: this.map,
      title: description
    });

    this.markers[id] = marker;
  }

  updateMarkers(benches) {
    if (benches) {
      const markersId = Object.keys(this.markers);
      markersId.forEach((markerId) => {
        if (!benches[markerId]) {
          delete this.markers[markerId];
        }
      });
      const benchValues = Object.values(benches);
      benchValues.forEach((bench) => {
        if (!this.markers[bench.id]) {
          this.createMarkerFromBench(bench);
        }
      });
    }
    console.log('time to update');
  }
}


// {
//   bounds: {
//     northEast: {
//       lat: "37.80971",
//       lng: "-122.46"
//     },
//     southWest: {
//       lat: "37.74187",
//       lng: "122.47791"
//     }
//   }
// }
