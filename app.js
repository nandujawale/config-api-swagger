const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text())

app.get("/config/:key", (req, res) => {

  console.log("Getting value for key " + req.params.key);

  const value = "3"
  return res.status(200).send(value);
});

app.post("/config/:key", (req, res) => {

  console.log("Setting value for key " + req.params.key + " to " + req.body);

  if (!req.body) {
    return res.status(400).send("Value missing");
  }

  return res.status(200).send("Value set successfully");
});

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./api.json');
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.listen(8000, () => {
  console.log("server listening on port 8000!");
});
