import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Col, ControlLabel, Button } from 'react-bootstrap';

const PersonalInformation = ({ handleSubmit, handleBack }) => (
	<form onSubmit={handleSubmit}>
		<Grid className="row" fluid={true}>
			<Col xs={12} md={8} className="column col-md-offset-2">
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
						<ControlLabel>Phone</ControlLabel>
						<Field
							name="phone"
							placeholder="123-456-7890"
							className="form-control"
							component="input"
							type="text"
						/>
					</div>
					<div>
						<ControlLabel>Age</ControlLabel>
						<div className="form-input">
							<p>
								<Field
									name="age"
									component="input"
									type="radio"
									value="Little Spark"
								/>{' '}
								Little Sparks (3-6)
							</p>
							<p>
								<Field
									name="age"
									component="input"
									type="radio"
									value="Fireflies"
								/>{' '}
								Fireflies (7-12)
							</p>
							<p>
								<Field
									name="age"
									component="input"
									type="radio"
									value="Sparklers"
								/>{' '}
								Sparklers (13-17)
							</p>
							<p>
								<Field
									name="age"
									component="input"
									type="radio"
									value="Ignitors"
								/>{' '}
								Ignitors (18-25)
							</p>
							<p>
								<Field
									name="age"
									component="input"
									type="radio"
									value="Fireworker"
								/>{' '}
								Fireworkers (25-39)
							</p>
							<p>
								<Field
									name="age"
									component="input"
									type="radio"
									value="Campfire"
								/>{' '}
								Campfire (40+)
							</p>
						</div>
					</div>
					<div>
						<ControlLabel>Do You Have Any Allergies?</ControlLabel>
						<Field
							name="allergies"
							className="form-control"
							component="input"
							type="text"
						/>
					</div>
					<div>
						<ControlLabel>Gender</ControlLabel>
						<div className="form-input">
							<p>
								<Field
									name="gender"
									component="input"
									type="radio"
									value="Female"
								/>{' '}
								Female{' '}
							</p>
							<p>
								<Field
									name="gender"
									component="input"
									type="radio"
									value="Male"
								/>{' '}
								Male{' '}
							</p>
						</div>
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
