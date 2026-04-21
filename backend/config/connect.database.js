import LogConfig from "../log/log.config.js";
import sequelize from "sequelize";
import path from "path";
import dotenv from "dotenv"

/**
   you don't forget
   you set WORKDIR /usr/src/app
   means any file that you add to container
   they're on it !!
   So .env you should access to /usr/src/app/.env Right ?
   it is not run on your current path pc
   log.info(path.resolve('../app/.env'))
 */
dotenv.config({ path: path.resolve('.env'),debug:true })

class ConnectDatabase {
  logConfig = null

  constructor() {
    this.logConfig = new LogConfig()
  }

  get sequelizeConnect() {
    return new sequelize(
      process.env.DATABASE,
      process.env.USER,
      process.env.PASSWORD,
      {
        dialect: 'mysql',
        // host: '127.0.0.1', // local connect docker container
        host: 'host.docker.internal', //
        port: process.env.PORT_OUTSIDE,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      }
    )
  }
}


const connectDatabase = new ConnectDatabase()
export const connectDatabaseObject = {
  sequelize : sequelize ,
  sequelizeConnect : connectDatabase.sequelizeConnect
}
