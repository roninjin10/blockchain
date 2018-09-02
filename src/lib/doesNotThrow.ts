export const doesNotThrow = (f: Function, args: any[]): boolean => {
  try {
    f(...args)
    return true
  } catch(e) {
    return false
  }
}