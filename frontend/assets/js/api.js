// All talking to the backend lives here.

async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export const fetchPlanets = () => getJSON("/api/planets");
export const fetchPlanet = (id) => getJSON(`/api/planets/${encodeURIComponent(id)}`);
