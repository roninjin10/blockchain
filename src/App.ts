import * as express from 'express'
import {Application} from 'express'
import Promise from 'bluebird'

export class App {
  private app: Application
  private PORT: number

  constructor(port: number, app: Application, router: express.Router) {
    this.app = app
    this.PORT = port

    this.app.use(router)
  }

  public start = () =>
    new Promise(resolve =>
      this.app.listen(this.PORT, resolve))
}
