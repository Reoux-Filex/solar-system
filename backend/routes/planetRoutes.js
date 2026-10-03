const express = require("express");
const controller = require("../controllers/planetController");

const router = express.Router();

router.get("/", controller.listPlanets);      // GET /api/planets
router.get("/:id", controller.getPlanet);     // GET /api/planets/earth

module.exports = router;
