import React from 'react';
import { Button } from 'react-bootstrap';

import ThanksPhoto from '../../assets/images/thank-you.jpg';

export default () => (
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-md-8 col-md-offset-2 intro">
				<h3> Thanks For Registering! </h3>
				<a href="https://goo.gl/forms/nBJdFBJ6hQAVD76q2">
					<Button
						bsStyle="warning"
						style={{ marginBottom: '15px', marginRight: '15px' }}
					>
						Request Transportation
					</Button>
				</a>
				<a href="https://www.paypal.me/iyc2018">
					<Button bsStyle="warning" style={{ marginBottom: '15px' }}>
						Donate Now!
					</Button>
				</a>
				<img alt="Thanks!" style={{ width: '100%' }} src={ThanksPhoto} />
			</div>
		</div>
	</div>
);
