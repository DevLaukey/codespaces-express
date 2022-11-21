const express = require('express')
const { sendSms } = require('../controller/smsController')
const router = express.Router()


router.post('/', sendSms)

module.exports = router;