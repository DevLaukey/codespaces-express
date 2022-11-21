const express = require('express')
const router = express.Router()


const { sendSms } = require('../controller/smsController')
router.post('/', sendSms)

module.exports = router;