import LogConfig from "../log/logConfig.js";
import sequelize from "sequelize";


class ConnectDatabase {
  logConfig = null

  constructor() {
    this.logConfig = new LogConfig()
  }

  get sequelizeConnect() {
    return new sequelize(
      'books',
      'ttknp',
      '12345',
      {
        dialect: 'mysql',
        host: 'host.docker.internal', // fix error connect ECONNREFUSED 172.21.0.2:3307 why it can't connect by service name
        // host: 'database', // can't access *** maybe you have to set permission
        port: '3307',
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
