//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ANSWER = {
  "?" : "Sure.",
  "1?" : "Calm down, I know what I'm doing!",
  "1" : "Whoa, chill out!",
  "empty" : "Fine. Be that way!",
  "other" : "Whatever."

}

export const hey = (message) => {
  let chars = [""]

  message.split('').forEach(element => {
    if(element != '' && element != " " && element != "\n" && element != "\t" && element != "\r"){
      chars.push(element);
    }
  });

  if(chars.length == 1) return ANSWER["empty"]
  
  console.log(chars)
  
  let haveChars = chars.every(element => {
    if(!element.match(/[A-z]/g)){
      return true
    }else{
      return false
    }
  })

   
  
  let isYelling = '';

  if(message == message.toUpperCase() && haveChars == false)  isYelling = '1'

  if(chars[chars.length - 1] != "?") chars = [""]
  
  console.log(chars[chars.length - 1])
  console.log(isYelling)
  if(chars[chars.length - 1] != "?" && isYelling == '') return ANSWER["other"]
  else return ANSWER[isYelling+chars[chars.length - 1]]
};
