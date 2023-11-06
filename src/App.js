import logo from './App.css';
import Barranav from './BarraNav/barranav';
import CarritoCompras from './Carrito/carro';
import Impresos from './Productos/producto';
import Banner1 from './Banner/banner1';
import { useState } from "react";

function App() {
  const [items, useItems] = useState ([]);
  return (
    <div>
    <Barranav></Barranav>
    <Banner1></Banner1>
    <Impresos cambio={useItems}></Impresos>
    <CarritoCompras ProductoSeleccionado={items}></CarritoCompras>
    </div>
  );
}

export default App;
