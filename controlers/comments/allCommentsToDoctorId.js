const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res) => {
    try {
        const CommentModel = dataBase.getModel('comments');
        const UserModel = dataBase.getModel('users');
        const DoctorId = req.params.id;
        if(!DoctorId || DoctorId < 1) throw new Error('Bad Doctor ID')

        const Doctors = await CommentModel.findAll({
            include:[{
                model:UserModel,
                attributes:["id" ,"name", "surname"]
            }],
            where:{
                doctor_id: DoctorId
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