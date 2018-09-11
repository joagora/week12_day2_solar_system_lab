const PubSub = require('../helpers/pub_sub.js');
const PlanetDetails = function() {

}

PlanetDetails.prototype.bindEvents = function() {
  PubSub.subscribe('SolarSystem:planet-info-ready', (event) => {
    this.display(event.detail);
  })
}

PlanetDetails.prototype.display = function(planet) {
  const planetInfoSection = document.querySelector('.planet-details');

  const header = document.createElement('h1');
  header.textContent = planet.name;
  planetInfoSection.appendChild(header);
  this.generateLisForPlanetDetails(planet);


}

PlanetDetails.prototype.generateLisForPlanetDetails = function(planet) {

  const planetInfoSection = document.querySelector('.planet-details');
  planetInfoSection.textContent = "";
  const planetDetailUl = document.createElement('ul');
  planetInfoSection.appendChild(planetDetailUl);


  const planetNameLi = document.createElement("li");
  planetNameLi.textContent = `Name: ${planet.name}`
  planetDetailUl.appendChild(planetNameLi);

  const orbitLi = document.createElement('li');
  orbitLi.textContent = `Orbit: ${planet.orbit} Earth days`;
  planetDetailUl.appendChild(orbitLi);

  const dayLi = document.createElement('li');
  dayLi.textContent = `Day: ${planet.day} Earth days`;
  planetDetailUl.appendChild(dayLi);

  const areaLi = document.createElement('li');
  areaLi.textContent = `Area: ${planet.area} Earths`;
  planetDetailUl.appendChild(areaLi);

  const volumeLi = document.createElement('li');
  volumeLi.textContent = `Volume: ${planet.volume} Earths`;
  planetDetailUl.appendChild(volumeLi);

  const gravityLi = document.createElement('li');
  gravityLi.textContent = `Gravity: ${planet.gravity} g`;
  planetDetailUl.appendChild(gravityLi);

  const moonsLi = document.createElement('li');
  moonsLi.textContent = `Moons: ${planet.moons}`;
  planetDetailUl.appendChild(moonsLi);

  const image = document.createElement('div');
  image.setAttribute('src', `${planet.image}`);
  image.setAttribute('id', 'planet-image');
  image.setAttribute('style', `background-image: url(${planet.image})`)
  planetInfoSection.appendChild(image);

  // for(i = 0; i < planetValues.length - 1; i++) {
  //   const liElement = document.createElement('li');
  //   liElement.textContent = `${planetKeys[i]}: ${planetValues[i]}`;
  //   planetInfoSection.appendChild(liElement);
  // }
}


module.exports = PlanetDetails;
