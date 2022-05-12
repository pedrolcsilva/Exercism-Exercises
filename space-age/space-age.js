//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const MERCURY = 0.2408467;
const VENUS = 0.61519726;
const MARS = 1.8808158;
const JUPITER = 11.862615;
const SATURN = 29.447498;
const URANUS = 84.016846;
const NEPTUNE = 164.79132;
export const age = (planet, earth_sec) => {
  let age = earth_sec / (3600 * 24 * 365.25);
  switch(planet){
    case 'mercury':
      age/= MERCURY;
      break;
    case 'venus':
      age/= VENUS;
      break;
    case 'mars':
      age/= MARS;
      break;
    case 'jupiter':
      age/= JUPITER;
      break;
    case 'saturn':
      age/= SATURN;
      break;
    case 'uranus':
      age/= URANUS;
      break;
    case 'neptune':
      age/= NEPTUNE;
      break;
  }
  return Math.round(age * 100)/ 100
};
