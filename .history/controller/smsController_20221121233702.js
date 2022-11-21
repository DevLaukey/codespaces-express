require("dotenv").config();


module.exports = {
  sendSms: async (req, res) => {
    const { event_date, event_name, phone_number } = req.body;
    try {

      console.log(event_date, event_name, phone_number, req.body);
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const client = require("twilio")(accountSid, authToken);

      client.messages
        .create({
          body: `Hello This is a reminder of ${event_name} from OnTask on date ${event_date} `,
          from: "+14059933371",
          to: phone_number,
        })
        .then((message) => res.send(message))
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log("error", error);
    }
  }
}