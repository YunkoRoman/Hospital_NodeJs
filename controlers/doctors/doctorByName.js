const dataBase = require('../../dataBase').getInstance();
const Op = require('sequelize').Op;
module.exports = async (req, res) => {
    try {
        const DepartModel = dataBase.getModel('department');
        const DoctorModel = dataBase.getModel('doctors');
        const {search = ''} = req.query;

        // if (search === '') {search == null}
        //
        // const Doctors = await DoctorModel.findAll({
        //     attributes:['name', 'surname'],
        //     include:[DepartModel]
        //
        // });
        //
        //
        // res.json({
        //     success: true,
        //     msg: Doctors
        // })};

        const Doctor = await DoctorModel.findAll({
            attributes:['id','name', 'surname'],
            include:[DepartModel],
            where:{
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        surname: {
                            [Op.like]: `%${search}%`
                        }
                    }]
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