import React, { useEffect } from 'react';
import jsIcon from '../images/JS.png';
import htmlIcon from '../images/html.png';
import cssIcon from '../images/css.png';
import reactIcon from '../images/react.png';
import npmIcon from '../images/npm.png';
import webpackIcon from '../images/webpack.png';
import sassIcon from '../images/sass.png';
import gitIcon from '../images/git.png';
import jestIcon from '../images/jest.png';
import pokemonMemory from '../images/pokemon-memory';
import toDoList from '../images/to-do-list';
import ticTacToe from '../images/tic-tac-toe';

const Content = () => {
	const handleScroll = () => {
		document.body.style.setProperty(
			'--scroll',
			window.pageYOffset /
				(document.body.offsetHeight - window.innerHeight)
		);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, false);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

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
			<div id="projects">
				<h2>Projects</h2>
				<Projects
					imgSrc={pokemonMemory}
					imgAlt="Pokemon Memory Game"
					imgId="pokemon-memory"
					desc="A game created using ReactJS functional components and
					hooks. The objective of the game is to click on each
					image without clicking on the same image twice. The
					current score and best score of player is displayed on
					screen as the game is played."
					siteHref="https://trashp.github.io/pokemon-memory-game/"
					ghHref="https://github.com/TrashP/pokemon-memory-game.git"
				/>
				<Projects
					imgSrc={toDoList}
					imgAlt="To Do List"
					imgId="to-do-list"
					desc="A personal to-do list and planner created with vanilla
					JavaScript, HTML, and CSS. Users can add tasks with a
					due date and description. The tasks get added to
					separate tabs for the day and week. Projects can also be
					created with their own list of tasks."
					siteHref="https://trashp.github.io/toDoList/"
					ghHref="https://github.com/TrashP/toDoList.git"
				/>
				<Projects
					imgSrc={ticTacToe}
					imgAlt="Tic-Tac-Toe"
					imgId="tic-tac-toe"
					desc="A tic-tac-toe game implemented using vanilla JavaScript,
					HTML, and CSS. The UI allows two players to play games
					against each other and change their markers. The game
					can be restarted using a button at the end of each
					round."
					siteHref="https://trashp.github.io/tic-tac-toe/"
					ghHref="https://github.com/TrashP/tic-tac-toe.git"
				/>
			</div>
		</div>
	);
};

const Projects = (props) => {
	const { imgSrc, imgAlt, imgId, desc, siteHref, ghHref } = props;

	return (
		<div>
			<img src={imgSrc} alt={imgAlt} id={imgId} />
			<div className="wrapper">
				<div className="title">{imgAlt}</div>
				<div className="description">
					<p>{desc}</p>
					<div className="desc-line"></div>
					<a href={siteHref} target="_blank" rel="noreferrer">
						Live Site
					</a>
					<a href={ghHref} target="_blank" rel="noreferrer">
						GitHub
					</a>
				</div>
			</div>
		</div>
	);
};

export default Content;
