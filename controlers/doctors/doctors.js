const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res) => {
    try {
        const DepartModel = dataBase.getModel('department');
        const DoctorModel = dataBase.getModel('doctors');



        const AllDoctors = await DoctorModel.findAll({
        include:[DepartModel]
        });


        res.json({
            success: true,
            msg: AllDoctors
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};