class ProductManager{
    #iva=0.21;
    #ganancia= 0.15;
    constructor(){
        this.products = [];
    }

    agregarProducto(nombre, precio, cantidad, id, fecha=new Date()) {
        if(!nombre || !precio || !fecha){
            console.log("es necesario todos los parametros rey");
        } else{
            const duplicado = this.products.find((productoNuevo) => productoNuevo.id == id);
            if(duplicado){
                console.log(`El id ${id} ya existe`);
            }else{
                const productoNuevo={
                    nombre: nombre,
                    precio: precio + this.#iva + this.#ganancia,
                    cantidad: cantidad,
                    id: this.#nuevoId() + 1,
                    fecha,
                    }
                    this.products.push(productoNuevo);
                }
            }
        }   
    
    #nuevoId(){
        let idInicial = 0;
        this.products.map((productoNuevo)=>{
            if(productoNuevo.id > idInicial) idInicial = productoNuevo.id;
        });
        return idInicial;
    }id


    getProductos(){
        return this.products;
    }


    getProductById = (buscarProducto)=>{
        const buscador = this.products.find((ProductoABuscar)=> ProductoABuscar.id == buscarProducto);
        if(buscador){
            console.log(buscador)
        }else{
            console.log("no funciona")
        }        
    }
}
    
const getProductos = new ProductManager();

console.log(getProductos.products);
getProductos.agregarProducto("bondiola", 2000,"20kg", 1);
getProductos.agregarProducto("chorizo", 300, "5kg", 4); 
getProductos.agregarProducto("bife chorizo", 7389, "5kg", 6); 
getProductos.agregarProducto("morcilla", 500, "500gr", 9); 
getProductos.agregarProducto("tapa de asado", 200, "5kg", 27); 

console.log(getProductos.products)
getProductos.getProductById();