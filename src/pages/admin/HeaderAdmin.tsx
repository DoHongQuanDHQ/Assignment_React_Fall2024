import { Link } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
