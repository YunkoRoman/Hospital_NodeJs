const dataBase = require('../../dataBase').getInstance();
const tokenVerifikator = require('../../helpers/tokenVerifikator');

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('users');
        const CommentModel = dataBase.getModel('comments');
        const {text} = req.body;
        const Data = new Date();
        const CommentId = req.params.id;
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
        if (!CommentId) throw new Error('Not comment id');
        if (!text) throw new Error('Not update value');
        const updatedComment = await CommentModel.update({
            text,
            data:Data

        }, {
            where:{
                id:CommentId,
                user_id: id
             }
            }
        );

        res.json({
            success: true,
            msg: `${updatedComment} comment update`
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};