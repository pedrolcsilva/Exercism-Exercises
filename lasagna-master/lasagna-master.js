/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime){
    if(!remainingTime && !(remainingTime >= 0)){
        return 'You forgot to set the timer.'
    }
    return (remainingTime == 0) ? 'Lasagna is done.' : 'Not done, please wait.'
}

export function preparationTime(fewLayers, avTime){
    if(!avTime){
        avTime = 2;
    }
    return fewLayers.length * avTime;
}

export function quantities(fewLayers){
    let noodles = 0;
    let sauce = 0;
    for(let i = 0; i < fewLayers.length; i++){
        if(fewLayers[i] == 'noodles') noodles+= 50
        if(fewLayers[i] == 'sauce') sauce+= 0.2
    }
    return {noodles, sauce};
}

export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length-1])
    return
}

export function scaleRecipe(recipe, portions){
    const scaledRecipe = {...recipe}
    for(let item in scaledRecipe){
        scaledRecipe[item] *= portions/2;
    }
    return scaledRecipe
}