import {dbConfig} from '../config/dbConfig.js';

import { Sequelize} from 'sequelize';

export const sequelize = new Sequelize (
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        
        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

sequelize.authenticate()
.then(()=>{
    console.log('connected..');
})
.catch(err => {
    console.log('Error'+err);
})

export const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize.sync({force: false})
.then(()=>{
    console.log('yes re-sync done!');
});
