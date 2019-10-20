const express = require("express"), cors = require("cors"), csp = require('express-csp-header');
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log("Server running on port 3000"));

let cities  = [ "Paris", "Barcelona", "Barranquilla", "Montevideo", "Santiago de Chile", "Mexico DF", "Nueva York" ];
app.get("/cities ", (req, res, next) => res.json(cities.filter((c)=> c.toLowerCase().indexOf(req.query.q.toString().toLowerCase()) > -1)));

let myDestinations = [];
app.get("/my", (req, res, next) => res.json(myDestinations));
app.post("/my", (req, res, next) => {
  console.log(req.body);
  myDestinations.push(req.body.new);
  res.json(myDestinations);
});
app.get("/api/translation", (req, res, next) => res.json([
  {lang: req.query.lang, key: 'HELLO', value: 'HELLO ' + req.query.lang}
]));
