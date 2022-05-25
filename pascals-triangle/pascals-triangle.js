//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (number) => {
  
  if(number == 0) return []

  let pascal = [], pascalcolumn = []

  for(let l = 0; l < number; l++){
    for(let c = 0; c <= l; c++){
      if(l < 2 || c < 1 || c == l){
        pascalcolumn.push(1);
      }else{
        pascalcolumn.push(pascal[l-1][c] + pascal[l-1][c-1]);
      }
    }

    pascal.push(pascalcolumn)
    
    pascalcolumn = []

  }

  return pascal
};
