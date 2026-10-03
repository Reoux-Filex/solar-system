import { svg, el } from "../assets/js/dom.js";

// A simple colored circle used for every planet.
export function PlanetIcon(color, size = 130, label = "") {
  const r = size / 2;
  const root = svg("svg", {
    width: size, height: size, viewBox: `0 0 ${size} ${size}`,
    role: "img", "aria-label": label || "រូបភាពភព",
  });
  root.append(
    svg("circle", { cx: r, cy: r, r: r - 5, fill: color }),
    svg("circle", { cx: r * 0.75, cy: r * 0.6, r: r * 0.2, fill: "#fff", opacity: ".3" })
  );
  return root;
}

// Earth uses your PNG photo.
export function EarthIcon(size = 130) {
  const img = el("img", {
    src: "/assets/images/earth.png",
    alt: "រូបថតផែនដី",
    width: size,
    height: size,
    style: "display:block;margin:0 auto;border-radius:50%;object-fit:cover",
  });
  // if the file is missing, show a plain blue circle instead
  img.addEventListener("error", () => img.replaceWith(PlanetIcon("#1e6fd9", size, "រូបភាពផែនដី")));
  return img;
}