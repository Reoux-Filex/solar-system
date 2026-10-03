const planetService = require("../services/planetService");

function listPlanets(req, res) {
  res.json(planetService.getAllSummaries());
}

function getPlanet(req, res) {
  const result = planetService.getPlanetWithNeighbors(req.params.id);
  if (!result) {
    return res.status(404).json({ error: "រកមិនឃើញភពនេះទេ" });
  }
  res.json(result);
}

module.exports = { listPlanets, getPlanet };
