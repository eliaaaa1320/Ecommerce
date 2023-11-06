import "./styleproduct.css";

//let productos = {
//    nombre: "",
//    descripcion: "",
//    precio: "",
//    img: "",

function ProductoUnitario(props){

    function Click(){
        props.cambio((arrayViejo)=>[...arrayViejo, {nombre: props.nombre, precio: props.precio}]);
    }

    return (
        <div className="Producto" onClick={Click}>
            <p>{props.nombre}</p>
            <img src={props.img} alt="../04102023/src/Productos"></img>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>
        </div>
    );
}

function Impresos(props){
    let listaProductos = [{nombre: "Skull", precio: "15000", descripcion: "Ni sabíamos que estamos huecos por dentro, lo acabamos de descubrir.", img: "../04102023/src/Productos/PRODUCTO-2.png"},
    {nombre: "Caldero", precio: "10000", descripcion: "Perfecto para preparar cualquier pócima o convertirlo en matero.", img: "../04102023/src/Productos/PRODUCTO-1.png"},
    {nombre: "Box ?", precio: "20000", descripcion: "Mejor recolectar las monedas con mucho estilo, que no tener ni una.", img: "../04102023/src/Productos/PRODUCTO-3.png"}];

    return (
        <div className="Lista">
            <h2>¿Te vas a antojar?</h2>

            {
                listaProductos.map((item)=>{
                    return <ProductoUnitario nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} cambio={props.cambio}></ProductoUnitario>
                })
            }
        </div>
    )
}

export default Impresos;
