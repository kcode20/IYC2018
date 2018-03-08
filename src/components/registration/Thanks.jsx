import React from 'react';

import ThanksPhoto from '../../assets/images/iyc3.png';

export default () => (
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-md-8 col-md-offset-2 intro">
				<h3> Thanks For Registering! </h3>
				<img alt="Thanks!" style={{ width: '100%' }} src={ThanksPhoto} />
			</div>
		</div>
	</div>
);
