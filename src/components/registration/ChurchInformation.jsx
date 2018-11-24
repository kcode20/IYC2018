import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Grid, Col, ControlLabel, Button } from 'react-bootstrap';
// import CheckboxGroup from './CheckboxGroup';

const selector = formValueSelector('YouthSummitRegistration');
// const options = [
// 	{
// 		label: 'Pastor',
// 		value: 'Pastor',
// 	},
// 	{
// 		label: 'Minister',
// 		value: 'Minister',
// 	},
// 	{
// 		label: 'Musician',
// 		value: 'Musician',
// 	},
// 	{
// 		label: 'Choir Director',
// 		value: 'Choir Director',
// 	},
// 	{
// 		label: 'Choir Member',
// 		value: 'Choir Member',
// 	},
// 	{
// 		label: 'Sunday School Superintendent',
// 		value: 'Sunday School Superintendent',
// 	},
// 	{
// 		label: 'Sunday School Teacher',
// 		value: 'Sunday School Teacher',
// 	},
// 	{
// 		label: 'Usher',
// 		value: 'Usher',
// 	},
// 	{
// 		label: 'Youth Leader',
// 		value: 'Youth Leader',
// 	},
// 	{
// 		label: 'Church Volunteer',
// 		value: 'Church Volunteer',
// 	},
// 	{
// 		label: 'Not Working in My Local Church',
// 		value: 'Not Working in My Local Church',
// 	},
// 	{
// 		label:
// 			'Don’t Work in an auxiliary at my church, BUT I would love to start ',
// 		value:
// 			'Don’t Work in an auxiliary at my church, BUT I would love to start ',
// 	},
// ];

const ChurchInformation = ({
	handleSubmit,
	handleBack,
	youthLeader,
	transportation,
}) => {
	const youthLeaderNameRequired = youthLeader === 'No';
	// const arrivalDepartureRequired = transportation === 'Yes';
	return (
		<form onSubmit={handleSubmit}>
			<Grid>
				<Col xs={12} md={8} className="column col-md-offset-2">
					<div className="chunk">
						<h3> Church Information </h3>
						<div>
							<ControlLabel>Church Name</ControlLabel>
							<Field
								name="church"
								placeholder="Branch Name"
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
							<ControlLabel>
								Are You A Youth Leader or Youth Worker?
							</ControlLabel>
							<div className="form-input">
								<Field
									name="youth_leader?"
									component="input"
									type="radio"
									value="Youth Leader"
								/>{' '}
								Youth Leader{' '}
								<Field
									name="youth_leader?"
									component="input"
									type="radio"
									value="Youth Worker"
								/>{' '}
								Youth Worker
							</div>
						</div>
						<div>
							<ControlLabel>How long have you served?</ControlLabel>
							<Field
								name="service_time"
								placeholder="2 years"
								className="form-control"
								component="input"
								type="text"
							/>
						</div>
						{youthLeaderNameRequired && (
							<div>
								<ControlLabel>
									How long have you served as a youth leader?
								</ControlLabel>
								<Field
									name="leader time served"
									placeholder="2 years"
									className="form-control"
									component="input"
									type="text"
								/>
							</div>
						)}
						<div>
							<ControlLabel>How many youth do you lead?</ControlLabel>
							<Field
								name="num_youth"
								placeholder="30"
								className="form-control"
								component="input"
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>
								What auxiliaries do you have (i.e. orchestra, choir, outreach)?
							</ControlLabel>
							<Field
								name="auxilaries"
								placeholder="orchestra, choir, and outreach"
								className="form-control"
								component="input"
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>
								List three strengths you as a youth leader possess
							</ControlLabel>
							<Field
								name="strengths"
								placeholder="commitment, passion, and support"
								className="form-control"
								component="input"
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>
								List three things you wish to improve upon as a youth leader
							</ControlLabel>
							<Field
								name="weaknesses"
								placeholder="commitment, passion, and support"
								className="form-control"
								component="input"
								type="text"
							/>
						</div>
						{/*
							<div>
							<ControlLabel>In my home church I am...</ControlLabel>
							<div className="form-input">
								<Field
									name="home church role"
									component={CheckboxGroup}
									options={options}
								/>
							</div>
						</div>
						*/}
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
	youthLeader: selector(state, 'youth leader?'),
}))(
	reduxForm({
		form: 'YouthSummitRegistration', // <------ same form name
		destroyOnUnmount: false, // <------ preserve form data
		forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	})(ChurchInformation)
);
