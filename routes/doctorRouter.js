const router = require('express').Router();

const AllDoctors = require('../controlers/doctors/doctors');
const DoctorsToId = require('../controlers/doctors/docToDepartId');
const OneDoctor = require('../controlers/doctors/OneDoctorToId');
const SearchDoc = require('../controlers/doctors/doctorByName');



router.get('/', AllDoctors);
router.get('/:id', DoctorsToId);
router.get('/one/:id', OneDoctor);
router.get('/search/name', SearchDoc);


module.exports = router;