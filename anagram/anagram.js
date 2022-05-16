//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidates) => {
  let anagram = []
  candidates.forEach((candidate) => {
    if(!(candidate.toLowerCase() == word.toLowerCase()) && candidate.length == word.length){
      let word_letters = word.toLowerCase().split('');
      let cand_letters = candidate.toLowerCase().split('');
      console.log(cand_letters)
      for(let word_letter in word_letters){
        for(let cand_letter in cand_letters){
          if(word_letters[word_letter] == cand_letters[cand_letter]){
            cand_letters.splice(cand_letter, 1);
          }
        }
      }
      
      if(cand_letters.length == 0) anagram.push(candidate)
    }
  });

  return anagram
};