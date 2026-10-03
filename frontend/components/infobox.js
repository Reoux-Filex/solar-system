import { el } from "../assets/js/dom.js";
import { PlanetIcon, EarthIcon } from "./planetIcon.js";

export function Infobox(planet) {
  const icon = planet.id === "earth" ? EarthIcon() : PlanetIcon(planet.color, 130, `រូបភាព ${planet.nameKm}`);
  const rows = planet.facts.map((f) =>
    el("tr", {}, [el("td", { text: f.label }), el("td", { text: f.value })])
  );
  return el("aside", { class: "info", "aria-label": "ទិន្នន័យសង្ខេប" }, [
    el("h3", { text: `${planet.nameKm} (${planet.nameEn})` }),
    icon,
    el("table", {}, rows),
  ]);
}
