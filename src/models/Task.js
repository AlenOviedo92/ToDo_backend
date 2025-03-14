const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Task', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        recurring: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        priorityId: {
            type: DataTypes.UUID,
            allowNull: true,
        }
    }, { timestamps: false });
}; 