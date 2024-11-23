import { useState } from 'react';

function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    function dologin(e) {
        e.preventDefault();
        if (password === "react") {
            setLoggedIn(true);
            setPassword("");
            setError("");
        }
        else {
            setError("Nope");
            setUser("");
            setPassword("");
            setLoggedIn(false);
        }
    }

    function logout() {
        setError("");
        setUser("");
        setPassword("");
        setLoggedIn(false);        
    }

    return (
        <>
            {loggedIn ? <button type="click" onClick={() => logout()} value="Logout" className="btn btn-primary">Logout</button>
                : <form className="form-inline" onSubmit={dologin}>
                    <div className="form-group">
                        <label className="control-label mr-2">Name:</label>
                        <input type="text" className="form-control mr-2" value={user} onChange={e => setUser(e.target.value)}
                            required />
                        <label className="control-label mr-2">Password:</label>
                        <input type="password" className="form-control mr-2" value={password} onChange={e =>
                            setPassword(e.target.value)} />
                        <button type="submit" className="btn btn-primary">Login</button>
                        <span className="text-danger ml-2">{error}</span>
                    </div>
                </form>}

        </>
    );
}

export default Login;