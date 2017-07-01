import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './data/truck-routes'
let map=null

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.startTrucks.bind(this)}>Play</button>
        <div id="map" style={{height:'500px',width:'100%'}}></div>
      </div>
    );
  }
  animateCircle(line) {
      var count = 0;
      var animate=window.setInterval(function() {
        var icons = line.get('icons');
        count = (count + 1) % 200;
        icons[0].offset = (count / 2) + '%';
        line.set('icons', icons);
        if(Number(icons[0].offset.split("%")[0])>99)clearInterval(animate)
    }, 20);
  }
  stopAnimate(interval){
    clearInterval(interval)
  }
  componentDidMount(){
    map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 20.5937, lng: 78.9629},
      zoom: 5
    });
    routes[0](map)
    routes[1](map)
  }
  startTrucks(){
    this.animateCircle(routes[0](map));
    this.animateCircle(routes[0](map));
  }
}

export default App;
