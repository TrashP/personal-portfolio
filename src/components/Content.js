import React from 'react';
import jsIcon from '../images/JS.png';
import htmlIcon from '../images/html.png';
import cssIcon from '../images/css.png';
import reactIcon from '../images/react.png';
import npmIcon from '../images/npm.png';
import webpackIcon from '../images/webpack.png';
import sassIcon from '../images/sass.png';
import gitIcon from '../images/git.png';
import jestIcon from '../images/jest.png';

const Content = () => {
	return (
		<div id="content">
			<span id="about">
				<h2>About</h2>
				<p>Hi there! I'm Arnab, an aspiring web dev.</p>
				<p>
					<em>
						I'm moving towards a new direction in my career and my
						life. For the past year, I've been self-learning CS and
						web dev is the area that really excites me. Creating new
						user experiences, implementing eye pleasing designs, and
						making them come to life with animations is what I do
						best. I hope to continue learning more and more about
						this profession and build my career in this field.
					</em>
				</p>
				<p>
					I'm currently looking for opportunities to work as a web
					developer. Contact me if you think I'm up for the challenge.
				</p>
			</span>
			<span id="web-dev-tech">
				<h3>
					<span className="title-word title-word-1">WEB </span>
					<span className="title-word title-word-2">DEV </span>
					<span className="title-word title-word-3">TECH </span>
					<span className="title-word title-word-4">STACK</span>
				</h3>
				<div id="slide">
					<div id="icon-slider">
						<div>
							<img src={jsIcon} alt="js-logo" />
							JAVASCRIPT
						</div>
						<div>
							<img src={htmlIcon} alt="html-logo" />
							HTML
						</div>
						<div>
							<img src={cssIcon} alt="css-logo" />
							CSS
						</div>
						<div>
							<img src={reactIcon} alt="react-icon" />
							REACT
						</div>
						<div>
							<img src={npmIcon} alt="npm-icon" />
							NPM
						</div>
						<div>
							<img src={webpackIcon} alt="webpack-icon" />
							WEBPACK
						</div>
						<div>
							<img src={sassIcon} alt="sass-icon" />
							SASS
						</div>
						<div>
							<img src={gitIcon} alt="git-icon" />
							GIT
						</div>
						<div>
							<img src={jestIcon} alt="jest-icon" />
							JEST
						</div>
						<div>
							<img src={jsIcon} alt="js-logo" />
							JAVASCRIPT
						</div>
						<div>
							<img src={htmlIcon} alt="html-logo" />
							HTML
						</div>
						<div>
							<img src={cssIcon} alt="css-logo" />
							CSS
						</div>
						<div>
							<img src={reactIcon} alt="react-icon" />
							REACT
						</div>
						<div>
							<img src={npmIcon} alt="npm-icon" />
							NPM
						</div>
						<div>
							<img src={webpackIcon} alt="webpack-icon" />
							WEBPACK
						</div>
						<div>
							<img src={sassIcon} alt="sass-icon" />
							SASS
						</div>
						<div>
							<img src={gitIcon} alt="git-icon" />
							GIT
						</div>
						<div>
							<img src={jestIcon} alt="jest-icon" />
							JEST
						</div>
					</div>
				</div>
			</span>
			<div id="about-line"></div>
		</div>
	);
};

export default Content;
