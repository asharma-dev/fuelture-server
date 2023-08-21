const express = require("express");
const router = express.Router();

// Fetch and respond with documents/error
router.get("/", (req, res) => {
  console.log("Requesting health check");
  res.send("server is healthy");
});

module.exports = router;
