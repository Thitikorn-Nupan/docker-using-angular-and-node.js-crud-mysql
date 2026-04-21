import bodyParser from 'body-parser'
import ep from 'express'
import cors from 'cors'

class ModulesApiService {
  static get app() {
    return ep()
  }

  static get router() {
    return ep.Router()
  }
}

export const modulesApiObject = {
  express: ep,
  bodyParser: bodyParser,
  application: ModulesApiService.app,
  router: ModulesApiService.router,
  cors: cors
  //** remember getter in js is not a method So don't use ** ()
}
