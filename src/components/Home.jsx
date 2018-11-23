// @flow
import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Countdown from './Countdown';
import { Link } from 'react-router-dom';

import HomePhoto from '../assets/images/iyc2.png';
import NYCAerial from '../assets/images/NYC-Aerial.jpg';

const Home = () => {
	const deadline = new Date('August 26, 2018 8:00:00');
	return (
		<div className="home">
			<div>
				<Carousel>
					<Carousel.Item>
						<div className="cover">
							<svg
								className="triangle"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 100"
								preserveAspectRatio="none"
							>
								<polygon fill="gray" points="100,0 0,100 0,0" />
								<polygon fill="orange" points="0,100 100,0 100,100" />
							</svg>
						</div>
						<div className="header">
							<Carousel.Caption>
								<div className="head">
									<h3> August 26th - September 2nd </h3>
									<h1> International Youth Conference 2018</h1>
									<p>
										Apostolic Faith Church, 265 Lafayette Ave, Brooklyn, NY
										11216
									</p>
								</div>
								<Link to="/register">
									<Button bsStyle="warning" className="head-button">
										Register Now!
									</Button>
								</Link>
							</Carousel.Caption>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<img width={900} height={500} alt="900x500" src={NYCAerial} />
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={900} height={500} alt="900x500" src={HomePhoto} />
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
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
				<p>Xavius “Robbie” Robinson</p>
				<p>President & Executive Chairman</p>
			</div>
		</div>
	);
};

export default Home;
