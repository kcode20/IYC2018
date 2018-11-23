import React from 'react';
import { reduxForm } from 'redux-form';
import { Grid, Col, Button } from 'react-bootstrap';

const EventDetails = ({ handleSubmit }) => (
	<form onSubmit={handleSubmit}>
		<Grid>
			<Col xs={12} md={8} className="column col-md-offset-2">
				<div className="chunk">
					<h3 className="chunk">Event Details</h3>
					<p>Friend-</p>
					<p>
						Giddy UP and register for the 2019 Youth Leader’s Summit! All roads
						lead to BBQ, rodeos, and IYC planning. (If you require airport pick
						up/drop off please be prepared to submit that information)
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
