// @flow
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../assets/images/iyc.png';
import '../assets/styles/Navbar.css';

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
				<NavItem eventKey={2} onClick={() => history.push('/checklist')}>
					Checklist
				</NavItem>
				<NavItem eventKey={3} onClick={() => history.push('/gallery')}>
					Gallery
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default withRouter(Navigation);
