require("dotenv").config();

exports.sendSms = async (req, res) => {
  try {
    let { event_date, event_name, phone_number } = req.body;

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        body: `Hello This is a reminder of ${event_name} from OnTask on date ${event_date} `,
        from: "+14059933371",
        to: "+254 700 716563",
      })
      .then((message) => res.send(message.sid))
      .catch((err) => console.log(err.message));
  } catch (error) {
    console.log("error", error);
  }
};
