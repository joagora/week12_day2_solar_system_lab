const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetMenu = require('./views/planets_menu.js');
const PlanetDetails = require('./views/planet_details.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  // console.log(planetsDataModel.planets);
  const planetMenu = new PlanetMenu();
  planetMenu.bindEvents();

  const planetDetails = new PlanetDetails();
  planetDetails.bindEvents();
});
