//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (word) => {
  let words = {};
  const WORDS_ARRAY =  word.split(/[^-a-z0-9A-Z_|']/);
  WORDS_ARRAY.forEach(prop => {
    let property = prop.toLowerCase();
    let val = words[property]
    if(!val) val = 1
    else val++;
    if(property != ""){
      if(property[0] == "'"){
        property = property.replaceAll("'", "");
      }
      Object.defineProperty(words, property, {
        get: function() {
          return val;
        },
        enumerable: true,
        configurable: true
      });
    }
  })
  
  return words
};
