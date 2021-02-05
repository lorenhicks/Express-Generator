const express = require("express");
const partnerRouter = express.Router();

partnerRouter
  .route("/")
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`);
    res.end(
      `Will update the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end("Deleting all partners");
  });

partnerRouter
  .route("/:partnerId")
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`);
    res.end(
      `Will update the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end("Deleting all partners");
  });

module.exports = partnerRouter;
