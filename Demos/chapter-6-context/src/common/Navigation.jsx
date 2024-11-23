import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import UserContext from "./userContext";

function Navigation() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function login(e) {
    e.preventDefault();
    setLoggedIn(password === "react");
    setPassword("");
  }

  return (
    <UserContext.Provider value={{ loggedIn, user }}>
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
              {loggedIn ? <button type="click" onClick={() => setLoggedIn(false)} value="Logout" className="btn btn-primary">Logout</button> 
                        : <form className="form-inline" onSubmit={login}>
                            <div className="form-group">
                              <label className="control-label mr-2">Name:</label>
                              <input type="text" className="form-control mr-2" value={user} onChange={e => setUser(e.target.value)} required />
                              <label className="control-label mr-2">Password:</label>
                              <input type="password" className="form-control mr-2" value={password} onChange={e => setPassword(e.target.value)} />
                              <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                          </form>}
            </li>
          </ul>
        </nav>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default Navigation;
