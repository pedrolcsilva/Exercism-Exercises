//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (sentence) => {
  let bracket = sentence.split('').filter(char => {
    return char == "{" || char == "}" || char == "[" || char == "]" || char == "(" || char == ")" 
  })  

  console.log(bracket)
  let open_brackets = []
  let close_brackets = []
  let result = bracket.every(item => {
    console.log(item)
    if(item == "{" || item == "[" || item == "("){
      open_brackets.push(item)
      return true
    }else{
      if((item == "}" && open_brackets[open_brackets.length-1] == "{") || (item == "]" && open_brackets[open_brackets.length-1] == "[") || (item == ")" && open_brackets[open_brackets.length-1] == "(")){
        if(open_brackets.length == 0){
          return false
        }
        open_brackets.pop();
        close_brackets.push(item)
        
        return true
      }else{
        return false;
      }
    }
    
  })

  console.log(result)
  return result != false && open_brackets.length == 0 ? true : false
  
};