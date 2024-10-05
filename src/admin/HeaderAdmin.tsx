import { Link } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              Cart
            </a>
          </li>
        </div>
      </nav>
    </>
  );
}
