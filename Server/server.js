const express = require("express");
const cors = require("cors");
const http = require('http')
const PORT = process.env.PORT;
const dbURI = process.env.dbURI;
const userRoute = require('./routes/userRoute');
const contactRoute = require('./routes/contactRoute');
const luggageRoute = require('./routes/luggageRoute');
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());





// Serve the client application's static files
app.use(express.static(path.join(__dirname, '../Client', 'dist')));

// Define a catch-all route to serve the client application's entry point
app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client', 'dist', 'index.html'));
});
app.use(userRoute);
app.use(contactRoute);
app.use(luggageRoute);


// Start the server
module.exports = {
  server: http.createServer(app),
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
