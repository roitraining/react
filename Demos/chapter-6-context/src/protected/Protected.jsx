import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../common/userContext';

function Protected() {

    const { loggedIn, user } = useContext(UserContext);
    if (!loggedIn) {
        return (
            <Navigate to="/about" />
        );
    }

    return (
        <>
            <div className="row">
                <h1>Book Reactions</h1>
            </div>
            <div className="row">
                <h2>Where you are only allowed in if loggedIn is true</h2>
            </div>
            <div style={{fontSize: 2.5 + 'rem'}}>
                Hello {user}, you are allowed in because you logged in.
            </div>
        </>
    );
};
export default Protected;