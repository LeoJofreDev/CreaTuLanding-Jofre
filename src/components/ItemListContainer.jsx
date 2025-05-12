const ItemListContainer = ({ mensaje }) => {
  return <h2 style={styles.mensaje}>{mensaje}</h2>;
};

const styles = {
  mensaje: {
    color: "#007bff",
    fontSize: "24px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

export default ItemListContainer;