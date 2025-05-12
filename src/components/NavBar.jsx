import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import logoTienda from "../assets/icons/logo-tienda.png";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logoContainer}>
        <img src={logoTienda} alt="Logo de la tienda" style={styles.logo} />
      </Link>

      <div style={styles.linksContainer}>
        <Link to="/producto1" style={styles.link}>Producto 1</Link>
        <Link to="/producto2" style={styles.link}>Producto 2</Link>
        <Link to="/producto3" style={styles.link}>Producto 3</Link>
        <Link to="/producto4" style={styles.link}>Producto 4</Link>
        <Link to="/producto5" style={styles.link}>Producto 5</Link>
      </div>

      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#343a40",
    color: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "50px",
  },
  linksContainer: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
  },
};

export default NavBar;

