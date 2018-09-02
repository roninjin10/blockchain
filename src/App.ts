import * as express from 'express'
import {Express} from 'express'
import Promise from 'bluebird'

export class App {
  private app: Express
  private PORT: number

  constructor(port: number, router: express.Router) {
    this.app = express()
    this.PORT = port

    this.app.use(router)
  }

  public start = () =>
    new Promise(resolve =>
      this.app.listen(this.PORT, resolve))
}
