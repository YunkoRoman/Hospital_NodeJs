module.exports = (sequelize, DataTypes) => {
    const doctors= sequelize.define('doctors', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        },
        surname: {
            type: DataTypes.STRING
        },
        work_experience: {
            type: DataTypes.INTEGER
        },
        phone_number: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        floor: {
            type: DataTypes.INTEGER
        },
        office: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        department_id:{
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'doctors',
        timestamps: false
    });
    const department = sequelize.import('./department.js');
    doctors.belongsTo(department, {foreignKey: 'department_id'});

    return doctors
};