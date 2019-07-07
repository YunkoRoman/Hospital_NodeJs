const router = require('express').Router();

const allCommentToDoctor = require('../controlers/comments/allCommentsToDoctorId');
const createNewComment = require('../controlers/comments/createNewComment');
const deleteCommeent = require('../controlers/comments/deleteComment');
const uppdateComment = require('../controlers/comments/uppdateComment');

router.get('/:id', allCommentToDoctor);
router.post('/create', createNewComment);
router.delete('/delete/:id', deleteCommeent);
router.put('/update/:id', uppdateComment);

module.exports = router;