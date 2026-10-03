const fs = require("fs");
const path = require("path");
const { toSummary, validatePlanet } = require("../models/planet");

const DATA_FILE = path.join(__dirname, "..", "data", "planets.json");

// Read the file on every request, so you can edit planets.json
// and just refresh the browser (no server restart needed).
function loadPlanets() {
  const raw = fs.readFileSync(DATA_FILE, "utf8");
  const planets = JSON.parse(raw);
  planets.forEach((p) => {
    const problems = validatePlanet(p);
    if (problems.length) console.warn(`[planets.json] ${p.id}: ${problems.join(", ")}`);
  });
  return planets.sort((a, b) => a.order - b.order);
}

function getAllSummaries() {
  return loadPlanets().map(toSummary);
}

function getPlanetWithNeighbors(id) {
  const planets = loadPlanets();
  const index = planets.findIndex((p) => p.id === id);
  if (index === -1) return null;
  return {
    planet: planets[index],
    prev: index > 0 ? toSummary(planets[index - 1]) : null,
    next: index < planets.length - 1 ? toSummary(planets[index + 1]) : null,
  };
}

module.exports = { getAllSummaries, getPlanetWithNeighbors };
