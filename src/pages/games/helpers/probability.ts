export function intersect(listOne: any[], listTwo: any[]) {
  return listOne.filter(item => listTwo.includes(item))
}