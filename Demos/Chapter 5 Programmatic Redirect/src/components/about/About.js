import React from 'react';
import { Link } from 'react-router-dom';

const About = ({match}) => (
    <div className="row">
        <h1>Book Reactions</h1>
        <h2>Where you react to books</h2>
        <h3><Link to={match.url + "/faq"}>FAQ</Link></h3>
    </div>
)

export default About;