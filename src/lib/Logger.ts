const returnFirst = (f: Function) => (...args: any[]): any => {
  f(...args)
  return args[0]
}

export class Logger {
  log = returnFirst(console.log.bind(console))
  info = returnFirst(console.info.bind(console))
  warn = returnFirst(console.warn.bind(console))
  error = returnFirst(console.error.bind(console))
}