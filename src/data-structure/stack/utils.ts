import Stack from './stack'

const LABEL = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const baseConverter = (decNumber: number, base: number) => {
  if (decNumber <= 1 || decNumber > 36) throw Error('convert only between 1 and 36')

  const stack = new Stack<string>()
  let rem = ''
  let str = ''
  while (base > 0) {
    rem = LABEL[Math.floor(base % decNumber)]
    stack.push(rem)
    base = Math.floor(base / decNumber)
  }
  while (!stack.isEmpty()) str += stack.pop().toString()

  return str
}

export default baseConverter
