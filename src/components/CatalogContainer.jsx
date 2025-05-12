import { Link } from "react-router-dom";

const CatalogContainer = () => {
  return (
    <div style={styles.container}>
      <h2>Catálogo de Productos</h2>
      <p>Próximamente aquí se mostrarán los productos disponibles.</p>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "60px auto",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    textAlign: "center",
  },
};

export default CatalogContainer;