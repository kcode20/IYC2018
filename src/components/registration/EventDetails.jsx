import React from 'react';
import { reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

const EventDetails = ({ handleSubmit }) => (
	<form className="form-design" onSubmit={handleSubmit}>
		<div className="chunk">
			<h3 className="chunk">Event Details</h3>
			<p>Friend-</p>
			<p>
				Welcome to Atlanta! New Year, New Location, Same GOD! Aren’t you
				excited? I’m looking forward to what’s in store at IYC this year. We’re
				going “Back to the Basics,” let’s learn and grow together! (If you
				require airport pick up/drop off please be prepared to submit that
				information)
			</p>
			<p>- Xavius President & Executive Chairman</p>
		</div>
		<Button bsStyle="primary" type="submit" className="next">
			Next
		</Button>
	</form>
);
export default reduxForm({
	form: 'YouthSummitRegistration', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(EventDetails);
