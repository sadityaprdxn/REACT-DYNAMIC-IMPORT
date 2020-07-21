import React, { useState , useEffect } from 'react';
import logo from '../images/logo.png';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  useHistory,
  useLocation
} from 'react-router-dom';

const Header = () => {

	const activePageLocation = useLocation();

	const [active , changeActive] = useState('home');

	const addActive = (page) => { changeActive(page); }

	useEffect(() => {
		if(activePageLocation.pathname.includes('/clublistpage')) {
			changeActive('clublist');
		} else if (activePageLocation.pathname.includes('/matchdetailpage')) {
			changeActive('matchdetail');
		}
	}, []);

	return (
		<header>
			<div className="wrapper">
				<h1>
					<a href="home.html" title="Logo" className="logo">
						<img src={logo} alt="Logo" />
					</a>
				</h1>

				<nav>
					<div className="hamburger">
						<span>bar</span>
						<span>bar</span>
						<span>bar</span>
					</div>

					<ul className="navbar">
						<li className={active === "home" ? "active" : ""} onClick={() => addActive('home')}>
							<Link to="/" title="Home" className="home-page">home</Link>
						</li>
						<li className={active === "clublist" ? "active" : ""} onClick={() => addActive('clublist')}>
							<Link to="/clublistpage" title="Clubs" className="clublist-page">clubs</Link>
						</li>
						<li className={active === "matchdetail" ? "active" : ""} onClick={() => addActive('matchdetail')}>
							<Link to="/matchdetailpage" title="Match Details" className="matchdetail-page">match details</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
