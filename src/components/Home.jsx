// @flow
import React from 'react';
// import { Grid, Row, Col } from 'react-bootstrap';

import HomePhoto from '../assets/images/iyc-home.jpg';
// import ignite from '../assets/images/ignite.png';
// import lead from '../assets/images/lead.png';
// import transform from '../assets/images/transform.png';

const Home = () => (
	<div className="home">
		<img className="cover-photo" src={HomePhoto} alt="IYC 2016" />
	</div>
);

export default Home;
