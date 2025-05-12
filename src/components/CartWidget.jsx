import { Link } from "react-router-dom";
import carritoIcon from "../assets/icons/carrito.png";

const CartWidget = () => {
  return (
    <Link to="/cart" >
      <img src={carritoIcon} alt="Carrito de compras" style={styles.cartIcon} />
    </Link>
  );
};

const styles = {
  cartIcon: {
    width: "50px",
    height: "50px",
  },
};

export default CartWidget;