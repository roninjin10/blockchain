import * as express from 'express'

import {App} from './App'
import {setupRoutes} from './setupRoutes'

const {PORT = 8080} = process.env

const router: express.Router = setupRoutes(express.Router())

const app = new App(PORT as number, router)

app
  .start()
  .then(() => console.info(`Listening on port ${PORT}`))
