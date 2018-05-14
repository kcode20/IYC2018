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
		const values = form['YouthSummitRegistration'].values;
		const google_script =
			'https://script.google.com/macros/s/AKfycbx4TzdY7U6F9_E0MJCnZ_7EegtELvaGoQZ3gwPToHSuTYNjS65q/exec';

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
				<ProgressBar bsStyle="warning" now={20 * page} />
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
					<ChurchInformation
						handleSubmit={this.nextPage}
						handleBack={this.previousPage}
					/>
				)}
				{page === 4 && (
					<Payment
						values={values}
						handleSubmit={this.handleSubmit}
						handleBack={this.previousPage}
					/>
				)}
				{page === 5 && <Thanks />}
			</div>
		);
	}
}

const connectedForm = connect(({ form }) => ({ form }), null)(
	YouthRegistration
);

export default reduxForm({ form: 'YouthLeaderRegistration' })(connectedForm);
