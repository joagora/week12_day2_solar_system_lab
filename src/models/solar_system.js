const PubSub = require('../helpers/pub_sub.js');
const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function() {
  PubSub.subscribe('PlanetsMenu:planet-selected', (event) => {
    const nameOfPlanet = event.detail;
    const foundPlanet = this.findPlanetByName(nameOfPlanet);
    PubSub.publish('SolarSystem:planet-info-ready', foundPlanet);
  })
}

SolarSystem.prototype.findPlanetByName = function(name) {
  for(planet of this.planets) {
    if(planet.name === name) {
      return planet;
    }
  }
}

module.exports = SolarSystem;
