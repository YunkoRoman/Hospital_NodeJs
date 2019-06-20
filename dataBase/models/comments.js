module.exports = (sequelize, DataTypes) => {
    const comments = sequelize.define('comments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        text: {
            type: DataTypes.STRING
        },
        data: {
            type: DataTypes.DATE
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        doctor_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
    }, {
        tableName: 'comments',
        timestamps: false
    });
    const user = sequelize.import('./users.js');
    comments.belongsTo(user, {foreignKey: 'user_id'});

    return comments
};