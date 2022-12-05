const express = require('express')
const router = express.Router()


const { sendSms, sendWhatsapp } = require("../controller/smsController");

router.post('/', sendSms);
router.post('/', sendWhatsapp);

module.exports = router;