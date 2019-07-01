const router = require('express').Router();

const authUser = require('../controlers/auth/authUser');



router.post('/user', authUser);



module.exports = router;