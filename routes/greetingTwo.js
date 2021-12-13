
const express = require('express'),
router = express.Router(),

greetingOne = require('../controllers/greetingOne')

router.get('/', greetingOne.greetingOne)

module.exports = router;