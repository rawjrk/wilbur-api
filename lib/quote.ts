import { randomNumber, randomBoolean, randomChar } from './rand'

export const word = (): string => {
  let wd = 'O'

  const midLength = randomNumber(3) + 1
  for (let i = 0; i < midLength; i++) {
    wd += randomBoolean(70) ? 'o' : 'a'
  }

  wd += randomChar('', 'e', 'h')

  return wd
}

export const quote = (): string => {
  let sentence = ''

  const numberOfWords = randomNumber(6) + 1
  for (let i = 0; i < numberOfWords; i++) {
    sentence += word()

    const isEndOfSentence = i === numberOfWords - 1
    if (isEndOfSentence) sentence += randomChar('.', '?', '!')
    else
      sentence += `${randomBoolean(60) ? '' : randomChar(',', '.', '?', '!')} `
  }

  return sentence
}
