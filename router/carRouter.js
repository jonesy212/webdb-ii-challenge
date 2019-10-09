const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  // db("cars")
  console.log("*");
  db.select("*")
    .from("cars")
    .then(cars => res.status(200).json(cars))
    .catch(error => {
      res
        .status(400)
        .json({ Message: "not able to find car information", ...error });
    });
});

router.post("/", (req, res) => {
  const { id } = req.params;
  const newCar = req.cars;
  // const cars = req.params.id && req.body
  //   if(cars)
  if (Number(id)) {
    newCar
      .insert(newCar, "id")
      // .into(newCar)
      .then(nc => res.status(200).json(nc))
      .catch(er => {
        console.log(er);
        res.status(500).json({
          messag: `not able locate car id ${id}`
        });
      });
  }
});

module.exports = router;
