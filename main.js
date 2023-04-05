// Array con el hardware disponible para agregar
const productos = [
  { nombre: "AMD 6700", precio: 400 },
  { nombre: "AMD 6800", precio: 600 },
  { nombre: "INTEL I7", precio: 900 },
  { nombre: "RYZEN 5800", precio: 800 },
  { nombre: "RTX 4090", precio: 1500 },
];

// Array para almacenar los productos en el carrito
const carritoCompras = [];

// Añadir un producto al carrito de compras
function agregarProducto(producto) {
  carritoCompras.push(producto);
  console.log(`"${producto.nombre}" ha sido añadido al carrito de compras`);
}

// Mostramos los productos disponibles
console.log("Productos con stock disponibles:");
productos.forEach(producto => {
  console.log(`- ${producto.nombre} (${producto.precio} $ dolares)`);
});

// Variable para indicar cuando salir del bucle
let continuarComprando = true;

// Bucle para añadir productos al carrito
while (continuarComprando) {
  // Pedimos al usuario que agregue un producto al carrito
  const eleccion = prompt("Elija un producto para añadir al carrito (o escriba 'finalizar' para finalizar la compra):");
  if (eleccion.toLowerCase() === "finalizar") {
    continuarComprando = false;
  }
  else {
    const productoElegido = productos.find(producto => producto.nombre === eleccion.toUpperCase());
    if (productoElegido) {
      agregarProducto(productoElegido);
    } else {
      console.log(`"${eleccion}" no es un producto válido`);
    }
  }
}

// Mostramos el contenido del carrito y calculamos el total de la compra
console.log("Productos en el carrito:");
carritoCompras.forEach(producto => {
  console.log(`- ${producto.nombre} (${producto.precio} dolares)`);
});
let total = 0;
for (let i = 0; i < carritoCompras.length; i++) {
  total += carritoCompras[i].precio;
}
console.log(`El total de su compra es: ${total} dolares. Muchas gracias`);
