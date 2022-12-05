require("dotenv").config();

module.exports = {
  sendSms: async (req, res) => {
    const { date, name, phone_number, type } = req.body;
    try {
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const client = require("twilio")(accountSid, authToken);
      type === "event"
        ? client.messages
            .create({
              body: `Hello This is a reminder of Event: ${name} happening on date ${date} `,
              from: "+13853965223",
              to: phone_number,
            })
            .then((message) => res.send(message))
            .catch((err) => console.log(err.message))
        : client.messages
            .create({
              body: `Hello This is a reminder of Task: ${name} due on date ${date} `,
              from: "+13853965223",
              to: phone_number,
            })
            .then((message) => res.send(message))
            .catch((err) => console.log(err.message));
    } catch (error) {
      console.log("error", error);
    }
  },
};
