// @flow
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../assets/images/iyc.png';

const Navigation = ({ history }) => (
	<Navbar inverse fixedTop collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to="/">
					<img src={logo} alt="IYC Logo" height="50px" />
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				<NavItem eventKey={1} onClick={() => history.push('/register')}>
					Register
				</NavItem>
				<Navbar.Text>
					<Navbar.Link
						href="https://goo.gl/forms/8VkbZtL0Qy5zfB1r2"
						target="_blank"
					>
						Submit Suggestions
					</Navbar.Link>
				</Navbar.Text>
				<Navbar.Text>
					<Navbar.Link
						href="https://gc.synxis.com/rez.aspx?adult=1&child=0&filter=Retail&arrive=02/15/2019&depart=02/17/2019&start=availresults&hotel=56925&Chain=5157#__utma=166108092.915910225.1475790879.1539976511.1539979287.399&__utmb=166108092.1.10.1539979287&__utmc=166108092&__utmx=-&__utmz=166108092.1539033442.381.151.utmcsr=sonesta.com%7Cutmccn=(referral)%7Cutmcmd=referral%7Cutmcct=/us/texas/houston/royal-sonesta-houston-galleria&__utmv=166108092.%7C4=device=pc=1&__utmk=168029473&_ga=2.72694931.161209625.1539631835-915910225.1475790879&_gac=1.174206614.1536678998.EAIaIQobChMIiM-dpZ-z3QIVWrbACh0IUQa9EAAYASAAEgIZHPD_BwE"
						target="_blank"
					>
						Hotel Information
					</Navbar.Link>
				</Navbar.Text>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default withRouter(Navigation);
