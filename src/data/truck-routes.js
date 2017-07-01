
import lineSymbol from './lineSymbol'

let route1= (map) => new window.google.maps.Polyline({
    path: [
        {lat: 28.5378477, lng: 77.2064724}, 
        {lat: 27.1761571, lng: 77.9099723},
        {lat: 25.4021974, lng: 81.6614973},
        {lat: 25.3207461, lng: 82.9210682},
        {lat: 24.7871642, lng: 84.9592917},
        {lat: 22.7840131, lng: 86.10573},
    ],
    icons: [{
        icon: lineSymbol,
        offset: '100%'
    }],
    map: map
});
let route2= (map) => new window.google.maps.Polyline({
    path: [
        {lat: 29.3963612, lng: 76.9641209}, 
        {lat: 27.9060815, lng: 78.0186379},
        {lat: 27.4743568, lng: 77.6141139},
    ],
    icons: [{
        icon: lineSymbol,
        offset: '100%'
    }],
    map: map
});

let routes=[route1,route2]

export default routes