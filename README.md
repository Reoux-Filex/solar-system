# Solar System (ប្រព័ន្ធព្រះអាទិត្យ)

A Khmer learning website about the planets. Full-stack, no database, no build step.

- **Backend:** Node.js + Express (REST API + serves the frontend)
- **Frontend:** HTML + CSS + vanilla JavaScript (ES modules, components)
- **Data:** `backend/data/planets.json` (one object per planet)

## Folder structure

```
solar-system/
├── backend/
│   ├── server.js                  # starts Express, serves API + frontend
│   ├── routes/planetRoutes.js     # URL -> controller
│   ├── controllers/planetController.js   # handles request/response
│   ├── services/planetService.js  # reads planets.json, finds prev/next
│   ├── models/planet.js           # planet shape + validation
│   ├── data/planets.json          # ALL planet content (edit this!)
│   └── package.json
├── frontend/
│   ├── index.html                 # home: grid of 8 planets
│   ├── pages/
│   │   ├── planet.html            # ONE template for every planet
│   │   ├── planet.js              # loads the planet from the API
│   │   └── home.js
│   ├── components/                # header, footer, sidebar, infobox, article, prevNext, planetIcon
│   ├── assets/js/                 # api.js (fetch), dom.js (helper)
│   └── styles/main.css
└── README.md
```

## Run it

```bash
cd backend
npm install
npm start
```

Open http://localhost:3000

## API

| Method | URL | Returns |
|---|---|---|
| GET | `/api/planets` | list of all 8 planets (short info) |
| GET | `/api/planets/earth` | full planet + `prev` and `next` |

Pages: `/` (home) and `/planet/earth`, `/planet/mars`, ...

## Add a new planet (example: Mars)

1. Open `backend/data/planets.json`.
2. Find the Mars entry and change `"status":"coming-soon"` to `"published"`.
3. Add the fields `readMinutes`, `summary`, `facts`, `sections`, `sources`
   (copy them from the Earth entry and replace the text).
4. Save and refresh the browser: `/planet/mars` works, the sidebar link turns on,
   and the Next button on Earth links to Mars automatically.

No HTML or JS changes are needed.

## Ideas for next steps

- Real NASA photos in `frontend/assets/images/` (and show them in the infobox)
- A quiz per planet (add a `quiz` array to the data and a `quiz.js` component)
- A real database (SQLite / MongoDB) in `services/` instead of the JSON file
- Admin page to edit planets (needs login)
- Deploy: Render, Railway or a VPS (Node needed because of the backend)

## Note

Please have a Khmer teacher check the science terms before publishing.
Facts are based on NASA data (https://science.nasa.gov, https://nssdc.gsfc.nasa.gov).
