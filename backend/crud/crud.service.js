import Romance from "../entity/romance.js";
import LogConfig from "../log/log.config.js";

class CrudService {
  logConfig = null
  romance = null

  constructor() {
    this.romance = new Romance().romance;
    this.logConfig = new LogConfig()
  }

  reads = async () => {
    return await this.romance.findAll()
  }
}

export default CrudService
