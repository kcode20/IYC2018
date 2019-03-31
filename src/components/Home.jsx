// @flow
import React from 'react';
import { Button } from 'react-bootstrap';
import Countdown from './Countdown';
import { Link } from 'react-router-dom';

import HomePhoto from '../assets/images/Atlanta.jpg';
import Xavius from '../assets/images/Xavius.png';
import '../assets/styles/Home.css';

const Home = () => {
	const deadline = new Date('August 28, 2019 8:00:00');
	return (
		<div className="home">
			<div>
				<div className="cover">
					<img src={HomePhoto} />
				</div>
				<div className="header">
					<div className="head">
						<h3> August 15th - 17th, 2019 </h3>
						<h1> International Youth Conference 2019</h1>
						<p>Atlanta, GA</p>
					</div>
					<Link to="/register">
						<Button bsStyle="warning" className="head-button">
							Register Now!
						</Button>
					</Link>
				</div>
			</div>
			<Countdown className="countdown" endtime={deadline} />
			<div className="about">
				<p>
					“The strength of youth we lay, at Jesus feet today – tis loyalty,
					loyalty, loyalty to Christ; his gospel we’ll proclaim throughout the
					world’s domain of loyalty, loyalty, loyalty to Christ!”
				</p>
				<p>
					Words to walk, talk, and live by – this is the heart of who we are as
					defined by our anthem. We are so excited about the wonderful things
					God is doing in the hearts and souls of this generation. We remain
					confident that the same God who parted the Red Sea is the same God who
					will continue to perform unforeseen miracles in our hearts and minds.
					I trust God for great things and I know that he will not fail us.
				</p>
				<p>
					As we press on in Christ, our hope is that through this day and age of
					social media and technology we will be able to whole heartedly reach
					the next generation for Christ. Join us in this great journey as we
					press on with our loyalty to Christ!
				</p>
				<p>In the Harvest of Souls,</p>
				<p className="testi-name">Xavius “Robbie” Robinson</p>
				<p className="testi-company">President & Executive Chairman</p>
				{/*<img className="testi-avatar" src={Xavius} alt="testimonial img" />*/}
			</div>
		</div>
	);
};

export default Home;
