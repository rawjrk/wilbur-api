type RandomNumber = (max: number) => number
export const randomNumber: RandomNumber = (max) =>
  Math.floor(Math.random() * max)

type RandomBoolean = (probability: number) => boolean
export const randomBoolean: RandomBoolean = (probability = 50) =>
  randomNumber(100) < probability

type RandomChar = (...chars: string[]) => string
export const randomChar: RandomChar = (...chars) =>
  chars[randomNumber(chars.length)]
