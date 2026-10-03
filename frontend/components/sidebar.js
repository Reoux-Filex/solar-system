import { el } from "../assets/js/dom.js";

export function Sidebar(planets, currentId) {
  const nav = el("nav", { class: "side", "aria-label": "បញ្ជីមេរៀន" });
  planets.forEach((p) => {
    const label = `${p.order}. ${p.nameKm}`;
    if (p.status !== "published") {
      nav.append(el("span", { text: label, title: "ឆាប់ៗនេះ" }));
    } else {
      nav.append(
        el("a", {
          href: `/planet/${p.id}`,
          class: p.id === currentId ? "on" : null,
          "aria-current": p.id === currentId ? "page" : null,
          text: label,
        })
      );
    }
  });
  return nav;
}
