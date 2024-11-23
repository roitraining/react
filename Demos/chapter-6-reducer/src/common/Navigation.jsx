import { Outlet, Link } from "react-router-dom";
import Login from "./Login";
import LoginReducer from "./LoginReducer";
function Navigation() {

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm bg-light">
        <Link className="navbar-brand" to="/">Book Reactions</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/protected">Protected</Link>
          </li>
          <li>
          <Login />
          {/* <LoginReducer /> */}
          </li>
        </ul>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Navigation;
