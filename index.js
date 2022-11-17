const express = require("express");
const smsRouter = require("./routes/smsRouter").default;

const app = express();
const port = process.env.PORT || 8013;
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  try {
    let { event_date, event_name, phone_number } = req.body;

    const accountSid = "AC37f9f4143bdea7ea687b7738c6768a0f";
    const authToken = "5b3c3b62f258c0c680fa119301d8ed66";
    const client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        body: `Hello This is a reminder of ${event_name} from OnTask on date ${event_date} `,
        from: "+13608032172",
        to: phone_number,
      })
      .then((message) => res.send(message.sid)).catch((err) => console.log(err.message))
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/li", (req, res )=> res.send("ththth"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
