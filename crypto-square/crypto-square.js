//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function getArray(text, quant){
  let vet = ['']
  let cont = 0
  text.split('').forEach(letter => {
    if(cont == quant) {
      vet.push(letter) 
      cont = 0
    } 
    else {
      vet[vet.length-1] += letter
    }
    cont++;
  })

  console.log(vet)
  if(vet.length  <= vet[0].length + 1 ){
    return vet
  }
  return getArray(text, quant + 1)
}

 export class Crypto {
  constructor(text) {
    this.text = text
  }

  get ciphertext() {
    let text = this.text.replace(/[^A-Z0-9]+/ig, "")
    text = getArray(text.toLowerCase(), 1)
    console.log(text)
    let encrypted = []
    for(let l = 0; l < text.length; l++){
      encrypted.push('')
      for(let c = 0; c < text[l].length; c++){
        if(!text[c][text.length-1]) text[l]+= ' '
        encrypted[l] += text[c][l]
      }
    }
    let encrypted_text = ''
    encrypted.forEach(word =>{{
      if(encrypted_text != ''){
        encrypted_text += ' '
      }
      encrypted_text+= word
    }})
    return encrypted_text
  }
}