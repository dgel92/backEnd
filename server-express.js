import express from "express";
import {prods} from "./productos.js";

const app = express()

app.get('/', (req, res)=>{
    res.send("hola desde express!")
});


app.get('/productos', (req, res)=>{
    res.status(200 ).json(prods);
});

/*
!!!CUANDO TENGA VARIOS PROYECTOS DE PRUEBA CORRIENDO EN SIMULTANEO!!!

app.listen(0, function(){
console.log(`server ok en puerto ${this.address().port}`);

})*/

app.get("/products/:idProd",(req, res)=>{
    const {idProd} = req.params;
    console.log(idProd);
    const product = prods.find( p=> p.id === Number(idProd));
    if (product){
        res.status(200).json(product);
    }else{
        res.status(404).json({message: "product not found"});
    }
});


const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server ok en puerto ${PORT}`)

})