import React from 'react';
import { Navigate } from 'react-router-dom';

function Protected() {

    const loggedIn = false;
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
        </>
    );
};
export default Protected;