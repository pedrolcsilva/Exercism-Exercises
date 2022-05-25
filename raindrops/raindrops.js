//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let rain_sound = '';
  if(number % 3 == 0) rain_sound += 'Pling';
  if(number % 5 == 0) rain_sound += 'Plang';
  if(number % 7 == 0) rain_sound += 'Plong';
  if(rain_sound == '') rain_sound = `${number}`;
  return rain_sound
};
