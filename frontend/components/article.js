import { el } from "../assets/js/dom.js";
import { Infobox } from "./infobox.js";

function Section(s) {
  const nodes = [el("h2", { text: s.title })];
  (s.paragraphs || []).forEach((t) => nodes.push(el("p", { text: t })));
  if (s.list) {
    nodes.push(el(s.ordered ? "ol" : "ul", {}, s.list.map((t) => el("li", { text: t }))));
  }
  (s.after || []).forEach((t) => nodes.push(el("p", { text: t })));
  return nodes;
}

export function Article(planet) {
  const frag = document.createDocumentFragment();
  frag.append(
    el("h1", { text: `${planet.nameKm} (${planet.nameEn})` }),
    el("p", { class: "mu", text: `ពេលអានប្រហែល ${planet.readMinutes} នាទី` }),
    Infobox(planet),
    el("p", { text: planet.summary })
  );
  planet.sections.forEach((s) => Section(s).forEach((n) => frag.append(n)));

  frag.append(
    el("h2", { text: "ប្រភពយោង" }),
    el(
      "ul",
      {},
      planet.sources.map((s) =>
        el("li", {}, [el("a", { href: s.url, rel: "noopener", target: "_blank", text: s.label })])
      )
    )
  );
  return frag;
}

export function ComingSoon(planet) {
  return el("div", { class: "coming" }, [
    el("h1", { text: `${planet.nameKm} (${planet.nameEn})` }),
    el("p", { text: "មេរៀននេះនឹងមកដល់ឆាប់ៗនេះ 🚀" }),
    el("a", { href: "/", text: "← ត្រឡប់ទៅទំព័រដើម" }),
  ]);
}
