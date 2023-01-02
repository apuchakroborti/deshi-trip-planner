import { Sequelize, DataTypes } from "sequelize";

export const review = (Sequelize, DataTypes) => {

    const Review = Sequelize.define("review", {
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Review;

}