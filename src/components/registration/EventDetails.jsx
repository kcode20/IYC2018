import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const EventDetails = ({ handleSubmit }) => (
	<form onSubmit={handleSubmit}>
		<Grid>
			<Col xs={12} md={8}>
				<div className="chunk">
					<h3 className="chunk">Event Details</h3>
					<div className="chunk">
						<h4>Youth Leader’s Summit</h4>
						<span>(formerly known as the Youth Leader’s Meeting) </span>
					</div>
					<p>
						We’re so excited about the International Youth Conference 2018! This
						year Youth Workers, Youth Leaders, Ministers, Pastors, and other
						attendees are asked to register for this year’s “Youth Leader’s
						Summit”. There is a registration price of $20. A portion of the
						registration proceeds will be sent to help aid in the recovery
						efforts in the Virgin Islands.
					</p>
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
