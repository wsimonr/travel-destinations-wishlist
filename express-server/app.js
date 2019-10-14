const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000, () => console.log("Server running on port 3000"));

app.get("/url", (req, res, next) => res.json(["Paris", "Barcelona", "Barranquilla", "Montevideo", "Santiago de Chile", "Mexico DF", "Nueva York"]));

let myDestinations = [];
app.get("/my", (req, res, next) => res.json(myDestinations));
app.post("/my", (req, res, next) => {
    console.log(req.body);
    myDestinations = req.body;
    res.json(myDestinations);
});