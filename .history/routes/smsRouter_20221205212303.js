const express = require('express')
const router = express.Router()


const { sendSms, sendWhatsapp } = require('../controller/smsController')

router.post('/', sendSms)
router.post("/whatsapp", sendWhatsapp)

module.exports = router;