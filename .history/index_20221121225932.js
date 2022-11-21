const express = require("express");
const smsRouter = require("./routes/smsRouter");

const app = express();
app.use(express.urlencoded());
app.use(express.json());// app.use(express.urlencoded({ extended: true }));



const port = process.env.PORT || 8011;

app.post("/",smsRouter);

app.get("/li", (req, res )=> res.send("ththth"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
