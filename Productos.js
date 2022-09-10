class arrayProducto {
    constructor(productos){
        this.productos =[];
    }

    getAll(){
        return this.productos;
    }

    getByID(id) {
        let getIndex = this.productos.findIndex(item => item.id == id);
        if (isNaN(id)) {
        return { error: "producto no encontrado" };
    } else {
        return this.productos[getIndex] == undefined? 
        { error: "producto no encontrado" }: 
        this.productos[getIndex];
}}
    postProductos(new_obj){
    let productoIngresado = new_obj;
    if(this.productos.length == 0){
        let id_creado = 1;
        productoIngresado.id = id_creado;
	    this.productos.push(productoIngresado);
	    return productoIngresado;
    } else{
        let id_creado = parseInt(this.productos[this.productos.length-1].id)+ 1
        productoIngresado.id = id_creado;
	    this.productos.push(productoIngresado);
	    return productoIngresado;
    }   
}
    putById(id,modif_obj){
        let updateIndex = this.productos.findIndex(item => item.id == id);
        if (isNaN(id) || this.productos[updateIndex] == undefined){
        return {error: "producto no encontrado" };  
    } else {
        this.productos[updateIndex] = modif_obj;
    }
;}
    deleteById(id){
        let removeIndex = this.productos.findIndex(item => item.id == id);
        if (isNaN(id) || this.productos[removeIndex] == undefined){
        return { error: "producto no encontrado" };  
    } else {
        this.productos.splice(removeIndex,1)}
}}

module.exports = arrayProducto;