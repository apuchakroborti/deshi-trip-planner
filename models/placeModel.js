import { Sequelize} from 'sequelize';

import {sequelize} from '../models/model_index.js';

export const Place = sequelize.define("place", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    district: {
        type: Sequelize.STRING,
        allowNull: false
    },
    details: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    views: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }

});
