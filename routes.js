const express = require("express");
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log("Servidor Levantado");
}).on('error', (e) => {
    console.log('Error ocurrido: ', e.message)
 });

 let arrayProducto = require("./Productos.js");
 let productos1 = new arrayProducto([]);

// Importamos lo necesario para enviar JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const routerProductos = express.Router();

// Ruta inicial
routerProductos.get("/", (req, res) => {
	res.json(productos1.getAll());
});

// Ruta GET by ID
routerProductos.get("/:id", (req, res) => {
   res.json(productos1.getByID(req.params.id))
});

// Ruta POST producto
routerProductos.post("/", (req, res) => {
    let newProduct = req.body;
    res.json(productos1.postProductos(newProduct));  
});

// Ruta PUT by ID
routerProductos.put("/:id", (req, res) => {
    let editedProduct =req.body;
    res.json(productos1.putById(req.params.id,editedProduct))
});

// Ruta DELETE by ID
routerProductos.delete("/:id", (req, res) => {
    res.json(productos1.deleteById(req.params.id))
});

// Se declara la ruta principal del router
app.use("/api/productos", routerProductos);