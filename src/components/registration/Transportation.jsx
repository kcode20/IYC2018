import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Grid, Col, ControlLabel, Button } from 'react-bootstrap';

const selector = formValueSelector('YouthSummitRegistration');

const ChurchInformation = ({ handleSubmit, handleBack, transportation }) => {
	const transportationRequired = transportation === 'yes';
	console.log(transportation, transportationRequired);
	return (
		<form onSubmit={handleSubmit}>
			<Grid>
				<Col xs={12} md={8} className="column col-md-offset-2">
					<div className="chunk">
						<h3> Transportation Information </h3>
						<div>
							<ControlLabel>Do you require Transportation?</ControlLabel>
							<div className="form-input">
								<Field
									name="transportation"
									component="input"
									type="radio"
									value="yes"
								/>{' '}
								Yes{' '}
								<Field
									name="transportation"
									component="input"
									type="radio"
									value="no"
								/>{' '}
								No{' '}
							</div>
						</div>
						{transportationRequired && (
							<div>
								<div>
									<ControlLabel>Airline</ControlLabel>
									<Field
										name="airline"
										placeholder="Delta"
										className="form-control"
										component="input"
										type="text"
									/>
								</div>
								<div>
									<ControlLabel>Airline Number</ControlLabel>
									<Field
										name="airline_number"
										placeholder="B2894"
										className="form-control"
										component="input"
										type="text"
									/>
								</div>
								<div>
									<ControlLabel>Arrival</ControlLabel>
									<Field
										name="arrival"
										placeholder="Insert Date and Time"
										className="form-control"
										component="input"
										type="text"
									/>
								</div>
								<div>
									<ControlLabel>Departure</ControlLabel>
									<Field
										name="departure"
										placeholder="Insert Date and Time"
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
	transportation: selector(state, 'transportation'),
}))(
	reduxForm({
		form: 'YouthSummitRegistration', // <------ same form name
		destroyOnUnmount: false, // <------ preserve form data
		forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	})(ChurchInformation)
);