const fs = require("fs");
const path ="./productos/fileJSON.Json";

const prods = [
    {
        id: 1,
        name: "iphone 11",
        price: 50000,
        stock: 25,
        code: "aquilesBailo123",
        imagen: "a marzo"
    },
    {
        id: 2,
        name: "samsung s23",
        price: 20000,
        stock: 20,
        code:"lalala321",
        imagen: "la debo"
    }

]

fs.writeFileSync(path, JSON.stringify(prods)); //se convierte a JSON
const info = fs.readFileSync(path, "utf-8");

const infoJS = JSON.parse(info); //vuelve a js
console.log(infoJS);
console.log(info);