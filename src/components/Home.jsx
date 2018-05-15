// @flow
import React from 'react';
import Countdown from './Countdown';

import HomePhoto from '../assets/images/iyc2.png';
import NYCAerial from '../assets/images/NYC-Aerial.jpg';

const Home = () => {
	const deadline = new Date('August 26, 2018 19:30:00');
	return (
		<div className="home">
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
				<div className="header">
					<h3> August 26th - September 2nd </h3>
					<h1> International Youth Conference 2018</h1>
					<p> APOSTOLIC FAITH CHURCH, 265 Lafayette Ave, Brooklyn, NY 11216 </p>
				</div>
			</div>
			<div className="about">
				<Countdown endtime={deadline} />
				<h3> It’s LIT! </h3>
				<p> Friend- </p>
				<p>
					Welcome to the virtual home of the International Youth Conference! For
					decades this conference has served a pillar of support to youth in our
					district and around the world, with special interest in the
					development and growth of young leaders in the church! As we continue
					our progression forward we thank God that he has given us the wisdom,
					knowledge, and power to convene in-person and now, we can reach homes
					anywhere. Yes, ANYWHERE! Through this website we hope to set each and
					every youth leader and young person on FIRE! It is my prayer that the
					information on these sites will become the very resources you need to
					help you fulfill the “good work” in which you have been anointed for.
					If there is anything we can do – to aid, assist, or even help pray for
					we stand ready!
				</p>
				<p>Patiently awaiting his return,</p>
				<p>Min. Xavius “Robbie” Robinson</p>
				<p>President & Executive Chairman</p>
			</div>
		</div>
	);
};

export default Home;

/* 
			
*/
