import React from 'react';
import { reduxForm } from 'redux-form';
import { Grid, Col, Button } from 'react-bootstrap';

const EventDetails = ({ handleSubmit }) => (
	<form onSubmit={handleSubmit}>
		<Grid>
			<Col xs={12} md={8}>
				<div className="chunk">
					<h3 className="chunk">Event Details</h3>
					<p>Friend-</p>
					<p>
						Welcome back! I’ve been praying for you. You’re about to take the
						first step into what will be the best week – EVER! Are you excited?
						Every facilitator, keynote speaker, spoken word, note of music has
						all been orchestrated to help you get FIT: For the Master’s Use!
						“Come join us and we will do thee good, for the Lord has spoken good
						things concerning YOU!” I’ll meet see you in New York!
					</p>
					<p>-Xavius President & Executive Chairman</p>
				</div>
				<div>
					<Button bsStyle="primary" type="submit" className="next">
						Next
					</Button>
				</div>
			</Col>
		</Grid>
	</form>
);
export default reduxForm({
	form: 'YouthSummitRegistration', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(EventDetails);
