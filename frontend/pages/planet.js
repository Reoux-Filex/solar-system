import { fetchPlanets, fetchPlanet } from "../assets/js/api.js";
import { el } from "../assets/js/dom.js";
import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { Sidebar } from "../components/sidebar.js";
import { Article, ComingSoon } from "../components/article.js";
import { PrevNext } from "../components/prevNext.js";

document.getElementById("header").replaceWith(Header());
document.getElementById("footer").replaceWith(Footer());

const app = document.getElementById("app");
const id = location.pathname.split("/").filter(Boolean).pop(); // "/planet/earth" -> "earth"

try {
  const [planets, data] = await Promise.all([fetchPlanets(), fetchPlanet(id)]);
  const { planet, prev, next } = data;

  document.title = `${planet.nameKm} (${planet.nameEn}) · ប្រព័ន្ធព្រះអាទិត្យ`;
  document.getElementById("sidebar").replaceWith(Sidebar(planets, planet.id));

  if (planet.status === "published") {
    app.replaceChildren(Article(planet), PrevNext(prev, next));
  } else {
    app.replaceChildren(ComingSoon(planet), PrevNext(prev, next));
  }
} catch (e) {
  document.getElementById("sidebar").remove();
  app.replaceChildren(
    el("div", { class: "error" }, [
      el("p", { text: "រកមិនឃើញភពនេះទេ ឬមិនអាចផ្ទុកទិន្នន័យបាន។" }),
      el("a", { href: "/", text: "← ត្រឡប់ទៅទំព័រដើម" }),
    ])
  );
}
