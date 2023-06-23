import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

const Footer = () => {
	return (
		<div id="footer">
			<span id="footer-content">
				<h1>Contact</h1>
				<p>
					I am looking for opportunities now. Feel free to contact me
					if you have any questions and I'll get back to you!
				</p>
				<a href="">
					<img src={github} alt="Github icon"></img>
				</a>
				<a href="">
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
					<button>Submit</button>
				</form>
			</span>
		</div>
	);
};

export default Footer;
