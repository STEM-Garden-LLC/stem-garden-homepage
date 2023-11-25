export default function toTitleCase (word: string) {
  const firstLetter = word.charAt(0)
  const remainingLetters = word.substring(1)
  return `${firstLetter.toUpperCase()}${remainingLetters}`
}