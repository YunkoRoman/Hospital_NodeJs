const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res) => {
    try {
        const DoctorModel = dataBase.getModel('doctors');
        const DepartModel = dataBase.getModel('department')
        const doctorId = req.params.id;
        if(!doctorId || doctorId  < 1) throw new Error('Bad department ID')

        const Doctor = await DoctorModel.findOne({
            include:[DepartModel],
            where:{
                id: doctorId
            }
        });


        res.json({
            success: true,
            msg: Doctor
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};