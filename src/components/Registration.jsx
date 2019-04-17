import React from 'react';
import { reduxForm } from 'redux-form';
import { ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';

import EventDetails from './registration/EventDetails';
import PersonalInformation from './registration/PersonalInformation';
import ChurchInformation from './registration/ChurchInformation';
import Payment from './registration/payment/Payment';
import Thanks from './registration/Thanks';
import Transportation from './registration/Transportation';
import IYC2018 from './registration/IYC2018';
import '../assets/styles/Registration.css';

/* Registration Form for the Youth Leaders Summit 2018 
Todo: Find default for the branchname
*/

export class YouthRegistration extends React.Component {
	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { page: 1 };
	}

	handleSubmit(e) {
		e.preventDefault();
		const { form } = this.props;
		let values = form['YouthSummitRegistration'].values;
		values = {
			...values,
			church_role: values && values.church_role && values.church_role.join(),
		};

		const google_script =
			'https://script.google.com/macros/s/AKfycbyq9k3YO8pillkstGOLSjWKZD-IZktdJpY-CeZzyChWCkLuwamr/exec';

		axios
			.get(google_script, { params: values })
			.then(response => {
				console.log('successfully got response', response);
				this.setState({ page: this.state.page + 1 });
			})
			.catch(error => {
				alert(error);
			});
	}

	nextPage(evt) {
		evt.preventDefault();
		this.setState({ page: this.state.page + 1 });
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 });
	}

	render() {
		const { page } = this.state;
		const values = ((this.props.form || {})['YouthSummitRegistration'] || {})
			.values;
		return (
			<div className="registration">
				{page === 1 && (
					<EventDetails
						handleSubmit={this.nextPage}
						handleBack={this.previousPage}
					/>
				)}
				{page === 2 && (
					<PersonalInformation
						handleSubmit={this.nextPage}
						handleBack={this.previousPage}
					/>
				)}
				{page === 3 && (
					<Transportation
						handleSubmit={this.nextPage}
						handleBack={this.previousPage}
					/>
				)}
				{page === 4 && (
					<ChurchInformation
						handleSubmit={this.nextPage}
						handleBack={this.previousPage}
					/>
				)}
				{page === 5 && (
					<Payment
						handleSubmit={this.handleSubmit}
						handleBack={this.previousPage}
					/>
				)}
				{page === 6 && <Thanks />}
			</div>
		);
	}
}

const connectedForm = connect(
	({ form }) => ({ form }),
	null
)(YouthRegistration);

export default reduxForm({ form: 'YouthLeaderRegistration' })(connectedForm);
