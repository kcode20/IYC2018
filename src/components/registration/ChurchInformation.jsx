import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import {
	Grid,
	Col,
	ControlLabel,
	Button,
	FormControl,
	HelpBlock,
} from 'react-bootstrap';
import CheckboxGroup from './CheckboxGroup';

const selector = formValueSelector('YouthSummitRegistration');
const options = [
	{
		label: 'Pastor',
		value: 'Pastor',
	},
	{
		label: 'Minister',
		value: 'Minister',
	},
	{
		label: 'Musician',
		value: 'Musician',
	},
	{
		label: 'Choir Director',
		value: 'Choir Director',
	},
	{
		label: 'Choir Member',
		value: 'Choir Member',
	},
	{
		label: 'Sunday School Superintendent',
		value: 'Sunday School Superintendent',
	},
	{
		label: 'Sunday School Teacher',
		value: 'Sunday School Teacher',
	},
	{
		label: 'Usher',
		value: 'Usher',
	},
	{
		label: 'Youth Leader',
		value: 'Youth Leader',
	},
	{
		label: 'Church Volunteer',
		value: 'Church Volunteer',
	},
	{
		label: 'Not Working in My Local Church',
		value: 'Not Working in My Local Church',
	},
	{
		label:
			'Don’t Work in an auxiliary at my church, BUT I would love to start ',
		value:
			'Don’t Work in an auxiliary at my church, BUT I would love to start ',
	},
];

const ChurchInformation = ({
	handleSubmit,
	handleBack,
	youthLeader,
	transportation,
}) => {
	const youthLeaderNameRequired = youthLeader === 'No';
	const arrivalDepartureRequired = transportation === 'Yes';
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
							<ControlLabel>Are You A Youth Leader?</ControlLabel>
							<div className="form-input">
								<Field
									name="youth leader?"
									component="input"
									type="radio"
									value="Yes"
								/>{' '}
								Yes{' '}
								<Field
									name="youth leader?"
									component="input"
									type="radio"
									value="No"
								/>{' '}
								No
							</div>
						</div>
						{youthLeaderNameRequired && (
							<div>
								<ControlLabel>Youth Leader's Name</ControlLabel>
								<Field
									name="youth leader name"
									placeholder="John Doe"
									className="form-control"
									component="input"
									type="text"
								/>
							</div>
						)}
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
					</div>
					<Col md={6}>
						<Button type="button" className="previous" onClick={handleBack}>
							Previous
						</Button>
					</Col>
					<Col md={6}>
						<Button bsStyle="primary" type="submit" className="next">
							Finish
						</Button>
					</Col>
				</Col>
			</Grid>
		</form>
	);
};

export default connect(state => ({
	youthLeader: selector(state, 'youth leader?'),
	transportation: selector(state, 'request transportation?'),
}))(
	reduxForm({
		form: 'YouthSummitRegistration', // <------ same form name
		destroyOnUnmount: false, // <------ preserve form data
		forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	})(ChurchInformation)
);
