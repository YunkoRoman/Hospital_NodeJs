module.exports = (sequelize, DataTypes) => {
    const departments = sequelize.define('department', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        label: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'hospitaldepartments',
        timestamps: false
    });


    return departments
};