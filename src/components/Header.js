import React from 'react';
import A from '../images/A.jpg';

const Header = () => {
	return (
		<header>
			<div id="header-logo">
				<div id="logo">
					<img src={A} alt="A" />
				</div>
				<nav>
					<ul id="header-links">
						<li>
							<span className="header-tabs">
								<a href="#top">Home</a>
							</span>
						</li>
						<li>
							<span className="header-tabs">
								<a href="#slide">Projects</a>
							</span>
						</li>
						<li>
							<span className="header-tabs">
								<a href="#tic-tac-toe">Certifications</a>
							</span>
						</li>
						<li>
							<span className="header-tabs">
								<a href="#footer">Contact</a>
							</span>
						</li>
					</ul>
				</nav>
				<div id="dark-mode"></div>
			</div>
			<div id="header-name">
				<div id="A-background">A</div>
				<h1 id="first-name">ARNAB</h1>
				<h1 id="last-name">GOSWAMI</h1>
				<h2 id="job-first">WEB</h2>
				<h2 id="job-last">DEVELOPER</h2>
			</div>
			<div id="header-line"></div>
		</header>
	);
};

export default Header;
