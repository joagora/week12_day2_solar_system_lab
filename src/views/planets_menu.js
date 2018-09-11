const PubSub = require('../helpers/pub_sub.js');

const PlanetMenu = function() {

};

PlanetMenu.prototype.bindEvents = function() {
  const planetsNavLis = document.querySelectorAll('.planets-menu ol li');
  for (let planetsNavLi of planetsNavLis) {
    planetsNavLi.addEventListener('click', (event) => {
      const selectedPlanet = event.target.id;
      PubSub.publish('PlanetsMenu:planet-selected', selectedPlanet);
    });
  }
}

module.exports = PlanetMenu;
