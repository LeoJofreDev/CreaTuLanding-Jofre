import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CatalogContainer from "./components/CatalogContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/principalPage" element={<ItemListContainer mensaje="Bienvenido a nuestra tienda" />} />
        <Route path="/catalogo" element={<CatalogContainer />} />
        <Route path="/producto1" element={<ItemListContainer mensaje="Detalle de Producto 1" />} />
        <Route path="/producto2" element={<ItemListContainer mensaje="Detalle de Producto 2" />} />
        <Route path="/producto3" element={<ItemListContainer mensaje="Detalle de Producto 3" />} />
        <Route path="/producto4" element={<ItemListContainer mensaje="Detalle de Producto 4" />} />
        <Route path="/producto5" element={<ItemListContainer mensaje="Detalle de Producto 5" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;