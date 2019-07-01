const router = require('express').Router();

const AllDoctors = require('../controlers/doctors/doctors')



router.get('/', AllDoctors);



module.exports = router;