//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const classify = (num) => {
  if(!(num > 0)) throw new Error("Classification is only possible for natural numbers.")
  let aliq_sum = 0
  for(let i = 1; i <= num / 2; i++){
    if(num % i == 0) aliq_sum+=i;
  }
  if(num == aliq_sum) return 'perfect'
  else if(num < aliq_sum) return 'abundant'
  else return 'deficient'
};
