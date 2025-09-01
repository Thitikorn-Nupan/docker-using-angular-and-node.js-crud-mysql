import bodyParser from 'body-parser'
import ep from 'express'
import cors from 'cors'

class ModulesApiService {

  get app() {
    return ep()
  }

  get router () {
    return ep.Router()
  }

}

const modulesApiService = new ModulesApiService()
export const modulesApiObject= {
  express : ep ,
  bodyParser : bodyParser ,
  application : modulesApiService.app ,
  router : modulesApiService.router ,
  cors : cors
  //** remember getter in js is not a method So don't use ** ()
}
