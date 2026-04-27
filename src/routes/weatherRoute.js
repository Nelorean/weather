const express = require('express')
const router = express.Router()
const {getWheater} = require('../controller/weatherController')

router.get('/:city',getWheater)

module.exports = router;