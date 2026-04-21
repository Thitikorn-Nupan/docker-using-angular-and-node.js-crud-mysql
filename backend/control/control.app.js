import LogConfig from "../log/log.config.js";
import RouterBook from "../router/router.book.js";
import {modulesApiObject} from "../service/modules.api.service.js";

class ControlApp {

  logConfig = null
  router = null
  app = null

  constructor() {
    this.logConfig = new LogConfig()
    this.app = modulesApiObject.application
    this.router = new RouterBook()
  }

  display() {
    this.app.use('/api',this.router.getRouterRomance) // initial router books
    this.app.listen(3232, (error) => {
      if (!error) {
        this.logConfig.log.info(`You're on port 3232`)
      } else {
        throw error
      }
    })
  }
}

new ControlApp().display()
