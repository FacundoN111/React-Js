const misProductos = [
    { id: "1", nombre: "caja torta CT1", precio: "$ " + 100, img: "../img/Productos/caja torta.jpg", idCat: "2" },
    { id: "2", nombre: "caja torta CT2", precio: "$ " + 200, img: "../img/Productos/caja torta2.jpg", idCat: "2" },
    { id: "3", nombre: "caja hambur H1", precio: "$ " + 300, img: "../img/Productos/caja hamburguesa.jpg", idCat: "3" },
    { id: "4", nombre: "caja pizza", precio: "$ " + 250, img: "../img/Productos/caja pizza.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}