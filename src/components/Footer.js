import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

const Footer = () => {
	return (
		<div id="footer">
			<span id="footer-content">
				<h1>Contact</h1>
				<p>
					I am looking for opportunities now. Feel free to check out
					my GitHub profile and contact me on LinkedIn if you have any
					questions and I'll get back to you!
				</p>
				<a
					href="https://github.com/TrashP"
					target="_blank"
					rel="noreferrer"
				>
					<img src={github} alt="Github icon"></img>
				</a>
				<a
					href="https://www.linkedin.com/in/arnab-goswami-902566170/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={linkedin} alt="Linkedin icon"></img>
				</a>
			</span>
			<span id="footer-form">
				<form id="contact-form">
					<label>Name</label>
					<input type="text"></input>
					<label>Email</label>
					<input type="email"></input>
					<label>Message</label>
					<textarea></textarea>
					<button disabled={true}>Submit</button>
				</form>
			</span>
		</div>
	);
};

export default Footer;
