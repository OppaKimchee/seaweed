import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import './Nav.css'
import logo from './logo.jpg'

class Nav extends Component {

	componentDidMount() {
		$(document).ready(function () {
			var myNavBar = {
				flagAdd: true,
				elements: [],
				init: function (elements) {
					this.elements = elements;
				},
				add: function () {
					if (this.flagAdd) {
						for (var i = 0; i < this.elements.length; i++) {
							document.getElementById(this.elements[i]).className += " fixed-theme";
						}
						this.flagAdd = false;
					}
				},
				remove: function () {
					for (var i = 0; i < this.elements.length; i++) {
						document.getElementById(this.elements[i]).className =
							document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
					}
					this.flagAdd = true;
				}
			};

			myNavBar.init([
				"header",
				"header-container",
				"brand"
			]);

			function offSetManager() {

				var yOffset = 0;
				var currYOffSet = window.pageYOffset;

				if (yOffset < currYOffSet) {
					myNavBar.add();
				}
				else if (currYOffSet === yOffset) {
					myNavBar.remove();
				}

			}

			window.onscroll = function (e) {
				offSetManager();
			}

			offSetManager();
		});
	}

	render() {
		return (
			<div>
				<nav id="header" className="navbar navbar-fixed-top">
					<div id="header-container" className="container navbar-container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<Link id="brand" className="navbar-brand" to="/seaweed"><img className='nav-logo' src={logo} alt="logo" /></Link>
						</div>
						{/*<div id="navbar" className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<li className="active"><Link to="/law-firm/Attorneys">Attorneys</Link></li>
								<li><Link to="/law-firm/About">Practice Areas</Link></li>
								<li><Link to="/law-firm/Contact">Contact</Link></li>
							</ul>
						</div>*/}
					</div>
				</nav>
			</div>
		)
	}
}

export default Nav