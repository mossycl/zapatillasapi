const express = require("express");
const app = express();
const port = 3001;

const { getZapatillas, getZapatillaById, getZapatillaByName, getZapatillaByBrand, getZapatillasByTag, filterByPrice } = require("./controller/getZapatillas");

app.get("/", getZapatillas);

app.get("/:id", getZapatillaById);

app.get("/name/:name", getZapatillaByName);

app.get("/brand/:brand", getZapatillaByBrand);

app.get("/tag/:tag", getZapatillasByTag);

app.get("/price/:minPrice/:maxPrice", filterByPrice);

app.listen(port, ()=>{
    console.log(`Conexión correcta en puerto ${port}`)
});