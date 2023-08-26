const express = require("express");
const cors = require("cors");
const httpProxy = require("http-proxy"); // Import http-proxy
const PORT = process.env.PORT;
const dbURI = process.env.dbURI;
const userRoute = require('./routes/userRoute');
const contactRoute = require('./routes/contactRoute');
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Create a proxy instance
const proxy = httpProxy.createProxyServer({});

// Your other routes and middleware
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use(userRoute);
app.use(contactRoute);

// Proxy route
app.get("/proxy", (req, res) => {
  // Proxy the request to the external resource
  proxy.web(req, res, { target: 'http://external-domain.com' }); // Replace with the actual external domain
});

// Start the server
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
