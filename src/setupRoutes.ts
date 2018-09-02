import {Router} from 'express'

export function setupRoutes(router: Router): Router {
  router.get('/', (req, res) => res.json('returns meta info about the node'))

  router.post('/chain', (req, res) => res.json('returns this nodes copy of the blockchain'))

  router.get('/account', (req, res) => res.json('returns the public account information of this node'))

  router.post('/send', (req, res) => res.json('sends crypto to someone'))

  return router
}
