const express = require("express");
const smsRouter = require("./routes/smsRouter");

const app = express();
const port = process.env.PORT || 8011;
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.post("/",smsRouter);

app.get("/li", (req, res )=> res.send("ththth"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
