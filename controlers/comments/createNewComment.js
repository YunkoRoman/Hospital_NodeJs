const dataBase = require('../../dataBase').getInstance();
const tokenVerifikator = require('../../helpers/tokenVerifikator');

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('users');
        const CommentModel = dataBase.getModel('comments');

        const Data = new Date();
        const {text, doctor_id} = req.body;
        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id, name, surname} = tokenVerifikator.auth(token);
        const UserIsRegister = await UserModel.findAll({
            where:{
                id,
                name,
                surname
            }
        });

        if (!UserIsRegister) throw new Error('Not valid User ');
        if (!text) throw new Error('Some field is empty');

        const insertedComments = await CommentModel.create({
            text,
            data:Data,
            user_id: id,
            doctor_id
        });

        res.json({
            success: true,
            msg: insertedComments
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};