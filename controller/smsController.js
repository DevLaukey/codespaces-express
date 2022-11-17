require('dotenv').config();

exports.sendSms = async (req, res) => {

  try {
         let {event_date,event_name, phone_number}= req.body;

         const accountSid = process.env.TWILIO_ACCOUNT_SID;
         const authToken = process.env.TWILIO_AUTH_TOKEN;
         const client = require("twilio")(accountSid, authToken);

         client.messages
           .create({
             body: `Hello This is a reminder from OnTask on date `,
             from: "+13608032172",
             to: +254115093877,
           })
           .then((message) => res.send(message.sid));

                    
  } catch (error) {
    console.log("error", error);
  }
};




                