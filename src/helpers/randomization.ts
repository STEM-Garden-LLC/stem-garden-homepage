export function randomInt(min: number, max: number) { //The minimum is inclusive and the maximum is exclusive.
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
} 

export function chooseRandomFromArray(array: any[]) {
  let randomIndex = randomInt(0, array.length)
  let choice = array[randomIndex]
  // console.log(`CHOICE: ${choice}`);
  return choice
}

export function weightedChooseFromArray(arrayToChooseFrom: any[], weights: number[]) {
  console.assert(arrayToChooseFrom.length === weights.length, 'weightedChooseFromArray received invalid params')
  let randomIndex = randomInt(0, arrayToChooseFrom.length)
  let choice = arrayToChooseFrom[randomIndex]
  // console.log(`CHOICE: ${choice}`);
  return choice
}