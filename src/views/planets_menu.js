const PubSub = require('../helpers/pub_sub.js');

const PlanetMenu = function() {

};

PlanetMenu.prototype.bindEvents = function() {
  const planetsNav = document.querySelector('.planets-menu ol');
  planetsNav.addEventListener('click', (event) => {
    const selectedPlanet = event.target.id;
    PubSub.publish('PlanetsMenu:planet-selected', selectedPlanet);
  });
}

module.exports = PlanetMenu;
