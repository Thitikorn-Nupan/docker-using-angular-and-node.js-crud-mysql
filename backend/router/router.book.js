import LogConfig from "../log/logConfig.js"; // class
import {modulesApiObject} from "../service/modules.api.service.js"; // object (ready to use)
import CrudService from "../crud/crud.service.js";

class RouterBook {
  logConfig = null
  routerRomance = null
  connect = null
  crud = null

  constructor() {
    /*
    *** a Port should follow angular port that you set it on docker (Port that you exposed)
    cors provides Express middleware to enable CORS with various options.
    CORS (Cross-Origin Resource Sharing) คือ กลไกที่ทำให้ server สามารถกำหนดสิทธิการเข้าถึงทรัพยากรได้ เมื่อมีเว็บไซต์ที่มี origin (domain) อื่น ใช้ HTTP request มายัง server
    ** in this case 3000 port I use it for back end
    ** corsOptions เพื่อบอกว่าจะอนุญาต domain ไหนสามารถ sent http method ได้
    ** angular default 4200 but my container I exposed 4000
    */
    const corsOptions = {
      origin: 'http://localhost:4000'
    }
    this.logConfig = new LogConfig()
    this.routerRomance = modulesApiObject.router
    this.routerRomance.use(modulesApiObject.bodyParser.json())
    this.routerRomance.use(modulesApiObject.bodyParser.urlencoded({extended: true}))
    this.routerRomance.use(modulesApiObject.cors(corsOptions)) /* setting cross http */
    this.crud = new CrudService()
  }

  get getRouterRomance() {

    this.routerRomance.get('/reads', async (req, res) => {
      try {
        await this.crud.reads().then((result) => {
          return res.status(202).json({
            status: "accepted",
            data: result
          })
        }).catch((e) => {
          this.logConfig.log.warn(`cause from reads() method await : ${e.message}`)
          throw e
        })
      } catch (e) {
        this.logConfig.log.warn(`cause from routerRomance get async method (reads) : ${e.message}`)
        throw e
      }
    })

    return this.routerRomance

  }
}

export default RouterBook

