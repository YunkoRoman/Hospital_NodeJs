const dataBase = require('../../dataBase').getInstance();
const tokenVerifikator = require('../../helpers/tokenVerifikator');

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('users');
        const CommentModel = dataBase.getModel('comments');
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
            if (!CommentId) throw new Error('Not comment id')
        const insertedComments = await CommentModel.destroy({
                where:{
                    id:CommentId,
                    user_id:id
                }
        });

        res.json({
            success: true,
            msg: `${insertedComments} comment delete`
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};