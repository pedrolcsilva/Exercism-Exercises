//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.score = score
    while(Math.floor(Math.log2(this.score)) > 7){
      this.score = this.score - Math.pow(2, Math.floor(Math.log2(this.score)))
    }
    this.allAllergies = {
      "eggs": 1,
      "peanuts": 2,
      "shellfish": 4,
      "strawberries": 8,
      "tomatoes": 16,
      "chocolate": 32,
      "pollen": 64,
      "cats": 128,
    }
    
  }

  list() {
    let scoreCount = this.score
    let listAllergies = []
    Object.keys(this.allAllergies).reverse().forEach(key => {
      if(Math.pow(2, Math.floor(Math.log2(scoreCount))) == this.allAllergies[key]){
        listAllergies.push(key);
        console.log(key)
        scoreCount = scoreCount - Math.pow(2, Math.floor(Math.log2(scoreCount)))
      }
    })
    
    console.log(listAllergies)
    return listAllergies.reverse()
  }

  allergicTo(isAllergic) {
    let scoreCount = this.score
    while(scoreCount > 0){
      console.log(Math.pow(2, Math.floor(Math.log2(scoreCount))))
      console.log(this.allAllergies[isAllergic])
      if(Math.pow(2, Math.floor(Math.log2(scoreCount))) == this.allAllergies[isAllergic]){
        return true
      }else{
        scoreCount = scoreCount - Math.pow(2, Math.floor(Math.log2(scoreCount)))
      }
    }
    return false;
  }
}