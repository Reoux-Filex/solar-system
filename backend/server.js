const path = require("path");
const express = require("express");
const cors = require("cors");
const planetRoutes = require("./routes/planetRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_DIR = path.join(__dirname, "..", "frontend");

app.use(cors());
app.use(express.json());

// 1) API
app.use("/api/planets", planetRoutes);
app.use("/api", (req, res) => res.status(404).json({ error: "រកមិនឃើញ API នេះទេ" }));

// 2) Frontend (static files)
app.use(express.static(FRONTEND_DIR));

// 3) Pretty URL: /planet/earth  ->  pages/planet.html
app.get("/planet/:id", (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, "pages", "planet.html"));
});

// 4) Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "មានបញ្ហាខាងម៉ាស៊ីនបម្រើ" });
});

app.listen(PORT, () => {
  console.log(`Solar System site running at http://localhost:${PORT}`);
});
