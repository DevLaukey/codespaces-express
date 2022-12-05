require("dotenv").config();


module.exports = {
  sendSms: async (req, res) => {
    const { date, name, phone_number } = req.body;
    try {

    
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const client = require("twilio")(accountSid, authToken);

      client.messages
        .create({
          body: `Hello This is a reminder of ${name} from OnTask on date ${date} `,
          from: "+14059933371",
          to: phone_number,
        })
        .then((message) => res.send(message))
        .catch((err) => console.log("error",err.message));
    } catch (error) {
      console.log("error", error);
    }
  }
}