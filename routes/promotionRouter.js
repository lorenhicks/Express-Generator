const express = require("express");
const promotionRouter = express.Router();

promotionRouter
  .route("/")
  .get((req, res) => {
    res.end("Will send all the promotions to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the promotion: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.write(`Updating the promotion: ${req.params.promotionId}\n`);
    res.end(
      `Will update the promotion: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end("Deleting all promotions");
  });

promotionRouter
  .route("/:promotionId")
  .get((req, res) => {
    res.end("Will send all the promotions to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the promotion: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.write(`Updating the promotion: ${req.params.promotionId}\n`);
    res.end(
      `Will update the promotion: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end("Deleting all promotions");
  });

module.exports = promotionRouter;
