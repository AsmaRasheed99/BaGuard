const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const dbURI = process.env.dbURI;
const userRoute = require('./routes/userRoute')
const contactRoute = require('./routes/contactRoute')

const mongoose = require("mongoose");

const app = express();
app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(userRoute)
app.use(contactRoute)
module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        app.listen(PORT, () => {
          console.log(`Starting server on port ${PORT}`);
        });
      });
  },
};



