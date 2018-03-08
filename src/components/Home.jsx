// @flow
import React from 'react';

import HomePhoto from '../assets/images/iyc2.png';

const Home = () => (
	<div className="container home">
		<div className="row justify-content-center">
			<div className="col-md-8 col-md-offset-2 intro">
				<img alt="900x500" style={{ width: '100%' }} src={HomePhoto} />
				<div className="about">
					<h3> It’s LIT! </h3>
					<p> Friend- </p>
					<p>
						Welcome to the virtual home of the International Youth Conference!
						For decades this conference has served a pillar of support to youth
						in our district and around the world, with special interest in the
						development and growth of young leaders in the church! As we
						continue our progression forward we thank God that he has given us
						the wisdom, knowledge, and power to convene in-person and now, we
						can reach homes anywhere. Yes, ANYWHERE! Through this website we
						hope to set each and every youth leader and young person on FIRE! It
						is my prayer that the information on these sites will become the
						very resources you need to help you fulfill the “good work” in which
						you have been anointed for. If there is anything we can do – to aid,
						assist, or even help pray for we stand ready!
					</p>
					<p>Patiently awaiting his return,</p>
					<p>Min. Xavius “Robbie” Robinson</p>
					<p>President & Executive Chairman</p>
				</div>
			</div>
		</div>
	</div>
);

export default Home;
