import {dbConfig} from '../config/dbConfig.js';

import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize (
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

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// TODO need to understand this properly
db.places = require('./placeModel.js')(sequelize, DataTypes);
db.reviews = require('./reviewModel.js')(sequelize, DataTypes);

// if the force is true then models will be created again and again
// if false then it will not create model again and again
db.sequelize.sync({force: false})
.then(()=>{
    console.log('yes re-sync done!');
});

// module.exports = db
export default db