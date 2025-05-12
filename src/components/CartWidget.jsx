import { Link } from "react-router-dom";
import carritoIcon from "../assets/icons/carrito.png";

const CartWidget = () => {
  return (
    <Link to="/cart" style={styles.cartContainer}>
      <img src={carritoIcon} alt="Carrito de compras" style={styles.cartIcon} />
      <span style={styles.notificationBubble}>100</span> {}
    </Link>
  );
};

const styles = {
  cartContainer: {
    position: "fixed",
    top: "10px",
    right: "10px",
    zIndex: 1001,
    display: "flex",
    alignItems: "center",
  },
  cartIcon: {
    width: "50px",
    height: "50px",
  },
  notificationBubble: {
    backgroundColor: "#ff0000",
    color: "#fff",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "bold",
    position: "absolute",
    top: "5px",
    right: "-5px",
  },
};

export default CartWidget;