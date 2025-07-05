import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link
        className="navbar-brand"
        style={{ fontFamily: "Playfair Display, serif" }}
        to="/">
        Lé Restaurant
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              Sobre nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reserve">
              Reservas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
