import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
	<div className="row navbar navbar-default">
		 <Link className="navbar-brand" to="/">Book Reactions</Link>
		 <ul className="nav navbar-nav">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/faq">FAQ</Link></li>
		</ul>
	</div>
);

export default Navigation;






