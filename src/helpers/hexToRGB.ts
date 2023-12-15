export default function hexToRGB (hexcode: string) {
  hexcode = hexcode.toLowerCase()
  console.assert(hexcode.charAt(0) === '#', 'Hexcode should start with #')
  console.assert(hexcode.length === 7, 'Hexcode should be 7 characters long')
  const validChars = Object.keys(hexToDigit)
  hexcode.slice(1).split('').forEach((char, index) => {
    console.assert(validChars.includes(char), `hexToRGB received invalid character in RGB code at index ${index}`)
  }) 
  

  const rHexValue = hexcode.slice(1,3)
  const gHexValue = hexcode.slice(3,5)
  const bHexValue = hexcode.slice(5,7)

  const rDecimalValue = hexToDecimal(rHexValue)
  const gDecimalValue = hexToDecimal(gHexValue)
  const bDecimalValue = hexToDecimal(bHexValue)

  return `${rDecimalValue},${gDecimalValue},${bDecimalValue}`
}

const hexToDigit = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'a': 10,
  'b': 11,
  'c': 12,
  'd': 13,
  'e': 14,
  'f': 15,
}

const hexToDigitMap = new Map(Object.entries(hexToDigit))

function hexToDecimal (hexcode: string) {
  console.assert(hexcode.length === 2, 'hexToDecimal is meant to handle chunks two characters long')
  
  const sixteensDigit = hexToDigitMap.get(hexcode.charAt(0)) ?? 0  // Nullish Coalescing used here to suppress error. This will never be null as asserted in hexToRGB function.
  const onesDigit = hexToDigitMap.get(hexcode.charAt(1)) ?? 0

  return (16 * sixteensDigit + onesDigit)
}