import { el } from "../assets/js/dom.js";

function button(planet, dir) {
  const text = dir === "prev" ? `← មុន: ${planet?.nameKm ?? ""}` : `បន្ទាប់: ${planet?.nameKm ?? ""} →`;
  if (!planet) return el("span", { text: "" });
  if (planet.status !== "published") {
    return el("span", { text: dir === "prev" ? `${text} (ឆាប់ៗនេះ)` : `បន្ទាប់: ${planet.nameKm} (ឆាប់ៗនេះ) →` });
  }
  return el("a", { href: `/planet/${planet.id}`, text });
}

export function PrevNext(prev, next) {
  return el("div", { class: "pn" }, [button(prev, "prev"), button(next, "next")]);
}
