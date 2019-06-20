const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res) => {
    try {
        const DepartModel = dataBase.getModel('department');
        const DoctorModel = dataBase.getModel('doctors');

        console.log(DepartModel);

        const AllDepart = await DepartModel.findAll(
        );


        res.json({
            success: true,
            msg: AllDepart
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};