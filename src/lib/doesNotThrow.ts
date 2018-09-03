export const doesNotThrow = (f: Function): boolean => {
  try {
    f()
    return true
  } catch(e) {
    return false
  }
}