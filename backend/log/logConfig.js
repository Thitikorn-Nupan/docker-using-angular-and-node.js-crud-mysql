import path from 'path'
import process from 'process'
import {createLogger, format, transports} from 'winston'

class LogConfig {
  log

  constructor() {
    this.#initialMyLog()
  }

  #initialMyLog() {
    this.log = createLogger({
      level: 'silly',
      format: format.combine(
        format.label({label: path.basename(process.argv[1])}), //( ! ) mean non-null assertion operator
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        format.printf((info) => `${info.timestamp} ${info.level} [${info.label}] : ${info.message}`)
      ),
      transports: [new transports.Console]
    })
  }
}


export default LogConfig // when use just import my.logging.ts then can call any method for logging
