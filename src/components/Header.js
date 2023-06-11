import React from 'react';

const Header = () => {
	return (
		<header>
			<div id="header-logo">
				<div id="logo">A</div>
				<nav>
					<ul id="header-links">
						<li>
							<span>
								<a href="">Home</a>
							</span>
						</li>
						<li>
							<span>
								<a href="">Projects</a>
							</span>
						</li>
						<li>
							<span>
								<a href="">Contact</a>
							</span>
						</li>
						<li>
							<span>
								<a href="">Certifications</a>
							</span>
						</li>
					</ul>
				</nav>
				<div id="dark-mode">T</div>
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
