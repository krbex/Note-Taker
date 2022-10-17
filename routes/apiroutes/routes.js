const router = require('express').Router();
const apiroutes = require('./apiroutes');

router.use(apiroutes);

module.exports = router;