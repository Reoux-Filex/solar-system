import { fetchPlanets } from "../assets/js/api.js";
import { el } from "../assets/js/dom.js";
import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { PlanetIcon, EarthIcon } from "../components/planetIcon.js";

document.getElementById("header").replaceWith(Header());
document.getElementById("footer").replaceWith(Footer());

const app = document.getElementById("app");

function PlanetCard(p) {
  const icon = p.id === "earth" ? EarthIcon(90) : PlanetIcon(p.color, 90, `រូបភាព ${p.nameKm}`);
  const published = p.status === "published";
  const children = [
    icon,
    el("b", { text: `${p.order}. ${p.nameKm}` }),
    el("small", { text: published ? p.nameEn : `${p.nameEn} · ឆាប់ៗនេះ` }),
  ];
  return published
    ? el("a", { class: "card", href: `/planet/${p.id}` }, children)
    : el("div", { class: "card soon" }, children);
}

try {
  const planets = await fetchPlanets();
  app.replaceChildren(
    el("div", { class: "hero" }, [
      el("h1", { text: "រៀនអំពីប្រព័ន្ធព្រះអាទិត្យ" }),
      el("p", { class: "mu", text: "ជ្រើសរើសភពមួយ ដើម្បីចាប់ផ្តើមមេរៀន" }),
    ]),
    el("div", { class: "grid" }, planets.map(PlanetCard))
  );
} catch (e) {
  app.replaceChildren(el("div", { class: "error", text: "មិនអាចផ្ទុកទិន្នន័យបានទេ។ សូមពិនិត្យថាម៉ាស៊ីនបម្រើកំពុងដំណើរការ។" }));
}
