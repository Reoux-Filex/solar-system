/**
 * Planet model (shape of one entry in data/planets.json)
 *
 * Always required:
 *   id, order, nameKm, nameEn, status ("published" | "coming-soon"), color
 *
 * Required when status === "published":
 *   readMinutes, summary, facts[{label,value}], sections[{title, paragraphs?, list?, ordered?, after?}], sources[{label,url}]
 */

const REQUIRED_ALWAYS = ["id", "order", "nameKm", "nameEn", "status", "color"];
const REQUIRED_PUBLISHED = ["readMinutes", "summary", "facts", "sections", "sources"];

function validatePlanet(p) {
  const problems = [];
  REQUIRED_ALWAYS.forEach((k) => {
    if (p[k] === undefined) problems.push(`missing "${k}"`);
  });
  if (p.status === "published") {
    REQUIRED_PUBLISHED.forEach((k) => {
      if (p[k] === undefined) problems.push(`missing "${k}"`);
    });
  }
  return problems;
}

// Small version used for the sidebar, home page and Prev/Next buttons
function toSummary(p) {
  return {
    id: p.id,
    order: p.order,
    nameKm: p.nameKm,
    nameEn: p.nameEn,
    status: p.status,
    color: p.color,
  };
}

module.exports = { validatePlanet, toSummary };
