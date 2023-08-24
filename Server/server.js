const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT ;
const dbURI = process.env.dbURI;
const userRoute = require('./routes/userRoute')
const contactRoute = require('./routes/contactRoute')
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(cors());

app.use(express.json());

// to redirect frontend
app.use(express.static(path.join(__dirname, "/../Client/dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../Client/dist/index.html"));
});

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



