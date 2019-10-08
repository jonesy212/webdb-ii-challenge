const express = require("express");

const router = express.Router();

const knex = require("../data/dbConfig");

router.get("/", (req, res) => {
  knex("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});


module.exports = router;


