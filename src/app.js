const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetMenu = require('./views/planets_menu.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  // console.log(planetsDataModel.planets);
  const planetMenu = new PlanetMenu();
  planetMenu.bindEvents();
});
