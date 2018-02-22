import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Row, Col, ControlLabel, Button } from 'react-bootstrap';

const ChurchInformation = ({ handleSubmit, handleBack }) => (
	<form onSubmit={handleSubmit}>
		<Grid>
			<Col xs={12} md={8}>
				<div className="chunk">
					<h3> Church Information </h3>
					<div>
						<ControlLabel>Branch Church</ControlLabel>
						<Field
							name="church"
							placeholder="Branch 2"
							className="form-control"
							component="input"
							type="text"
						/>
					</div>
					<div>
						<ControlLabel>Pastor's Name</ControlLabel>
						<Field
							name="pastor"
							placeholder="Pastor John Doe"
							className="form-control"
							component="input"
							type="text"
						/>
					</div>
					<div>
						<ControlLabel>Are You A Youth Leader or Youth Worker?</ControlLabel>
						<div className="form-input">
							<Field
								name="role"
								component="input"
								type="radio"
								value="Youth Leader"
							/>{' '}
							Youth Leader{' '}
							<Field
								name="role"
								component="input"
								type="radio"
								value="Youth Worker"
							/>{' '}
							Youth Worker
						</div>
					</div>
					<div>
						<ControlLabel>How Many Youth Do You Lead?</ControlLabel>
						<Field
							name="num_of_youth"
							placeholder="#"
							className="form-control"
							component="input"
							type="text"
						/>
					</div>
					<div>
						<ControlLabel>What auxiliaries do you have?</ControlLabel>
						<Field
							name="auxilary"
							placeholder="Orchestra, Choir, Outreach"
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
})(ChurchInformation);
