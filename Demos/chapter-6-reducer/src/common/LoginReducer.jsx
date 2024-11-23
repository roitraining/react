import { useReducer } from 'react';

const initialState = { user: '',  password: '',  error: '', loggedIn: false };

function myReducer(state, action) {
  switch (action.type) {
    case 'input': { return {  ...state, [action.inputName]: action.payload,  }; }
    case 'login': { return { ...state, error: '', loggedIn: true }; }
    case 'error': { return { ...state, error: 'Nope', loggedIn: false, user: '', password: '' }; }
    case 'logout': { return { ...state, error: '', loggedIn: false, user: '', password: '' }; }
    default: return state;
  }
}

function LoginReducer() {
  const [state, dispatch] = useReducer(myReducer, initialState);
  const { user, password, error, loggedIn } = state;

  function dologin(e) {
    e.preventDefault();
    (password === "react") ? dispatch({ type: 'login' }) : dispatch({ type: 'error' });
  };

  return (
    <>
      {loggedIn ? <button type="click" onClick={() =>   dispatch({ type: 'logout' })} value="Logout" className="btn btn-primary">Logout</button>
        : <form className="form-inline" onSubmit={dologin}>
          <div className="form-group">
            <label className="control-label mr-2">Name:</label>
            <input type="text" className="form-control mr-2" value={user}
              onChange={(e) => dispatch({ type: 'input', inputName: 'user',  payload: e.currentTarget.value })
              }
              required />
            <label className="control-label mr-2">Password:</label>
            <input type="password" className="form-control mr-2" value={password}
              onChange={(e) => dispatch({ type: 'input', inputName: 'password', payload: e.currentTarget.value })
              } />
            <button type="submit" className="btn btn-primary">Login</button>
            <span className="text-danger ml-2">{error}</span>
          </div>
        </form>}
    </>
  );
}

export default LoginReducer;