// Tiny helper to build DOM safely (uses textContent, never innerHTML).
export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, val] of Object.entries(attrs)) {
    if (val === null || val === undefined || val === false) continue;
    if (key === "class") node.className = val;
    else if (key === "text") node.textContent = val;
    else node.setAttribute(key, val === true ? "" : val);
  }
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c === null || c === undefined) return;
    node.append(c.nodeType ? c : document.createTextNode(String(c)));
  });
  return node;
}

export const svgNS = "http://www.w3.org/2000/svg";
export function svg(tag, attrs = {}, children = []) {
  const node = document.createElementNS(svgNS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  children.forEach((c) => node.append(c));
  return node;
}
