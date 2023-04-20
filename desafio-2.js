const { log } = require('console');
const fs = require('fs');

class ProductManager {
    constructor() {
        this.idCounter = 0;
        this.path = "./productos/products.json";
    }

    async getProductos() {
        try {
            if (fs.existsSync(this.path)) {
                const products = await fs.promises.readFile(this.path, 'utf8');
                const productsJS = JSON.parse(products);
                return productsJS;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async agregarProducto(nombre, price, code, imagen, id, stock) {
        try {
            const prodsExistentes = await this.getProductos();
            const codigoRepetido = prodsExistentes.find(producto => producto.code === code);

            if (codigoRepetido) {
                throw new Error(`Ya existe un producto con el código ${code}`);
            } else {
                const ultimoProd = prodsExistentes[prodsExistentes.length - 1];
                const nuevoID = ultimoProd ? ultimoProd.id + 1 * 2 : 1;
                const producto = {
                    id: nuevoID,
                    nombre,
                    price,
                    imagen,
                    code,
                    stock,
                };
                prodsExistentes.push(producto);
                await fs.promises.writeFile(this.path, JSON.stringify(prodsExistentes));
                return producto;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async removeProduct(idProd) {
        try {
            const prodsExistentes = await this.getProductos();
            const productoID = prodsExistentes.filter(producto => producto.id !== idProd);
            if (productoID.length === prodsExistentes.length) {
                console.log(`No hay un producto con el ID ${idProd}`);
            } else {
                await fs.promises.writeFile(this.path, JSON.stringify(productoID));
                console.log(`ID ${idProd} eliminado correctamente`);
                return productoID;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async actualizarProducto(idProd, prodsActualizados) {
        try {
            const prodsExistentes = await this.getProductos();
            const productoID = prodsExistentes.findIndex(producto => producto.id === idProd);
            if (productoID === -1) {
                console.log('No se encontró el producto con el ID especificado');
            } else {
                const updatedProduct = {
                    ...prodsExistentes[productoID],
                    ...prodsActualizados,
                    id: idProd,
                };
                prodsExistentes[productoID] = updatedProduct;
                await fs.promises.writeFile(this.path, JSON.stringify(prodsExistentes));
                console.log(`Producto actualizado exitosamente`);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async existeProducto(idProd) {
        try {
            const prodsExistentes = await this.getProductos();
            return prodsExistentes.find(producto => producto.id === idProd);
        } catch (error) {
            console.log(error);
        }
    }

    async getProductosById(idprod) {
        try {
            const product = await this.existeProducto(idprod);
            if (!product) {
                console.log(`No se encontró un producto con el ID ${idprod}`);
            } else {
                return product;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

//------------------------------------

const productManager = new ProductManager();

const testear = async()=>{
    const prueba1 = await productManager.agregarProducto();
    console.log("prueba inicial:", prueba1);

    await productManager.agregarProducto(
        "prueba-1",
        4000,
        "sin imagen de prueba",
        "fdsffds",
        60
    );

    const prueba2 = await productManager.getProductosById(1)
    console.log("existe este id?", prueba2);

    const prueba3 = await productManager.getProductos()
    console.log("ver todos los productos", prueba3);

    await productManager.removeProduct(2);
    console.log("ver productos despues de borrar id", prueba3);
}

testear()
