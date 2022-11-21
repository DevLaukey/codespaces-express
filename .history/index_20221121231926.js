const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const smsRouter = require("./routes/smsRouter");


const port = process.env.PORT || 8011;

app.post("/",smsRouter);

app.get("/li", (req, res )=> res.send("ththth"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
