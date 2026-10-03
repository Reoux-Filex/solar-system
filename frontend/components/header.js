import { el } from "../assets/js/dom.js";

export function Header() {
  const toggle = el("button", { type: "button", "aria-label": "ប្តូរពណ៌ស្រាល/ងងឹត", text: "🌓" });
  toggle.addEventListener("click", () => {
    const root = document.documentElement;
    const dark = matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.dataset.theme || (dark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  try {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.dataset.theme = saved;
  } catch (e) {}

  return el("header", { class: "site-header" }, [
    el("a", { href: "/", text: "🌍 ប្រព័ន្ធព្រះអាទិត្យ · រៀនអំពីភពនានា" }),
    toggle,
  ]);
}
