import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Row, Col, ControlLabel, Button } from 'react-bootstrap';

const PersonalInformation = ({ handleSubmit, handleBack }) => (
	<form onSubmit={handleSubmit}>
		<Grid className="row" fluid={true}>
			<Col xs={12} md={8}>
				<div className="chunk">
					<h3> Personal Information </h3>
					<div>
						<ControlLabel>Name</ControlLabel>
						<Field
							name="name"
							placeholder="John Doe"
							className="form-control"
							component="input"
							type="text"
							required
						/>
					</div>
					<div>
						<ControlLabel>Email</ControlLabel>
						<Field
							name="email"
							placeholder="email@example.com"
							className="form-control"
							component="input"
							type="text"
						/>
					</div>
					<div>
						<ControlLabel>Mailing Address</ControlLabel>
						<Field
							name="mailing"
							placeholder="123 Ocean St."
							className="form-control"
							component="input"
							type="text"
						/>
					</div>
					<div>
						<ControlLabel>Home Phone</ControlLabel>
						<Field
							name="homephone"
							placeholder="123-456-7890"
							className="form-control"
							component="input"
							type="text"
						/>
					</div>
					<div>
						<ControlLabel>Cell Phone</ControlLabel>
						<Field
							name="cellphone"
							placeholder="123-456-7890"
							className="form-control"
							component="input"
							type="text"
						/>
					</div>
				</div>
				<Col md={6}>
					<Button type="button" className="previous" onClick={handleBack}>
						Previous
					</Button>
				</Col>
				<Col md={6}>
					<Button bsStyle="primary" type="submit" className="next">
						Next
					</Button>
				</Col>
			</Col>
		</Grid>
	</form>
);

export default reduxForm({
	form: 'YouthSummitRegistration', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(PersonalInformation);
