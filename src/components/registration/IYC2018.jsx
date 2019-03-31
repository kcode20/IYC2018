import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Grid, Col, ControlLabel, Button } from 'react-bootstrap';

const selector = formValueSelector('YouthSummitRegistration');

const IYC2018 = ({ handleSubmit, handleBack, attendance }) => {
	const attendanceRequired = attendance === 'yes';
	return (
		<form className="form-design" onSubmit={handleSubmit}>
			<Grid>
				<Col xs={12} md={8} className="column col-md-offset-2">
					<div className="chunk">
						<h3> IYC 2018 </h3>
						<div>
							<ControlLabel>Did you attend IYC 2018?</ControlLabel>
							<div className="form-input">
								<Field
									name="attended_IYC2018?"
									component="input"
									type="radio"
									value="yes"
								/>{' '}
								Yes{' '}
								<Field
									name="attended_IYC2018?"
									component="input"
									type="radio"
									value="no"
								/>{' '}
								No
							</div>
						</div>
						{attendanceRequired && (
							<div>
								<div>
									<ControlLabel>
										What was one thing you enjoyed about IYC 2018?
									</ControlLabel>
									<Field
										name="enjoy_iyc"
										placeholder="I enjoyed the food and fellowship."
										className="form-control"
										component="input"
										type="text"
									/>
								</div>
								<div>
									<ControlLabel>
										If you could suggest one thing to the IYC Committee for 2018
										what would it be?
									</ControlLabel>
									<Field
										name="suggestions"
										placeholder="Submit Suggestions"
										className="form-control"
										component="input"
										type="text"
									/>
								</div>
							</div>
						)}
					</div>
					<Col md={6} className="form-buttons">
						<Button type="button" className="previous" onClick={handleBack}>
							Previous
						</Button>
					</Col>
					<Col md={6} className="form-buttons">
						<Button bsStyle="primary" type="submit" className="next">
							Next
						</Button>
					</Col>
				</Col>
			</Grid>
		</form>
	);
};

export default connect(state => ({
	attendance: selector(state, 'attended_IYC2018?'),
}))(
	reduxForm({
		form: 'YouthSummitRegistration', // <------ same form name
		destroyOnUnmount: false, // <------ preserve form data
		forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	})(IYC2018)
);
