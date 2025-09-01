import {connectDatabaseObject} from "../config/connect.database.js";

class Romance {
  get romance () {
    return connectDatabaseObject.sequelizeConnect.define(
      'romances' , {
        rid : {
          type : connectDatabaseObject.sequelize.STRING ,
          primaryKey: true
        },
        title : {
          type : connectDatabaseObject.sequelize.STRING
        } ,
        price : {
          type : connectDatabaseObject.sequelize.DECIMAL
        }
      } ,
      {
        freezeTableName: true , // freeze name table not using *s on name
        timestamps: false // don't use createdAt/update
      }
    )
  }

}

export default Romance
