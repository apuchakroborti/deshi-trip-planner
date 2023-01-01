// const { Sequelize, DataTypes } = require("sequelize");
import { Sequelize, DataTypes } from 'sequelize';

// module.exports = (sequelize, DataTypes) => {
export const place = (Sequelize, DataTypes) => {

    const Place = Sequelize.define("place", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        district: {
            type: DataTypes.STRING,
            allowNull: false
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        views: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }

    });
    return Place;

}