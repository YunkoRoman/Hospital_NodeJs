const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res) => {
    try {
        const DepartModel = dataBase.getModel('department');
        const DoctorModel = dataBase.getModel('doctors');
        const docToDepartId = req.params.id;
        if(!docToDepartId || docToDepartId < 1) throw new Error('Bad department ID')

        const Doctors = await DoctorModel.findAll({
            include:[DepartModel],
            where:{
                department_id: docToDepartId
            }
        });


        res.json({
            success: true,
            msg: Doctors
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};