import { Link } from 'react-router-dom';

const Navigation = () => (
	<nav className="navbar navbar-expand-sm bg-light">
		<Link className="navbar-brand" to="/">Book Reactions</Link>
		<ul className="navbar-nav">
			<li className="nav-item">
				<Link className="nav-link" to="/">Home</Link>
				</li>
			<li className="nav-item">
				<Link className="nav-link" to="/about">About</Link>
			</li>
		</ul>

	</nav>
);

export default Navigation;

