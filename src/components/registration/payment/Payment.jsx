// @flow
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { ControlLabel, Col, Grid, Button } from 'react-bootstrap';

import PayPalButton from './PayPalButton';
import { paypalSandboxKey, paypalProductionKey } from '../../../secrets';

const selector = formValueSelector('YouthSummitRegistration');
const CLIENT = {
	sandbox: paypalSandboxKey,
	production: paypalProductionKey,
};

const ENV = 'production';
const REGISTRATION_PRICE = 75;
type Props = {
	brunchAddon: string,
	shirtAddon: string,
	handleSubmit: Function,
	handleBack: Function,
};
type State = {
	issue: Object,
	complete: boolean,
};

export class Payment extends React.Component<Props, State> {
	state = { issue: { exists: false, reason: null }, complete: false };

	render() {
		let { brunchAddon, shirtAddon, handleSubmit, handleBack } = this.props;
		const onSuccess = payment => this.setState({ complete: true });
		const onError = error =>
			this.setState({
				issue: { exists: true, reason: 'error' },
			});
		const onCancel = data =>
			this.setState({
				issue: { exists: true, reason: 'canceled' },
			});

		let brunchPrice = brunchAddon === 'Yes' ? 20 : 0;
		let shirtPrice = shirtAddon === 'Yes' ? 15 : 0;
		let total = REGISTRATION_PRICE + brunchPrice + shirtPrice;
		return (
			<form className="form-design" onSubmit={handleSubmit}>
				{this.state.complete ? <h3>Submission</h3> : <h3>Payment</h3>}
				<div>
					{this.state.issue.exists && this.state.issue.reason === 'canceled' ? (
						<div className="alert alert-danger" role="alert">
							{' '}
							Oops! It seems as if you canceled your payment. Please try again.
						</div>
					) : this.state.issue.reason === 'error' ? (
						<div className="alert alert-danger" role="alert">
							{' '}
							Oops! There was an error processing your payment. Please try
							again.{' '}
						</div>
					) : (
						''
					)}
					{this.state.complete ? (
						<div>
							<div className="alert alert-success" role="alert">
								Your payment was recieved! Please press submit to complete your
								registration.
							</div>
							<p> By pressing submit you will be registered for IYC 2019</p>
							<Button
								bsStyle="primary"
								type="submit"
								align="right"
								className="next"
							>
								Submit
							</Button>
						</div>
					) : (
						<div>
							<p>
								To finish registration, you will be directed to PayPal to submit
								a registration fee of $75. If you do not have a PayPal account,
								you can click the 'Pay with Debit or Credit Card' Option.
							</p>
							<p>
								Once you are completed with the payment, press next to finish
								the registration process.
							</p>
							<div>
								<ControlLabel>
									Would you like to purchase tickets to the State of the
									Conference Brunch, where the proceeds benefit the IYC
									Scholarship and regionals? $20
								</ControlLabel>
								<div className="form-input">
									<Field
										name="sc_brunch?"
										component="input"
										type="radio"
										value="Yes"
									/>{' '}
									Yes{' '}
									<Field
										name="sc_brunch?"
										component="input"
										type="radio"
										value="No"
									/>{' '}
									No
								</div>
							</div>
							<div>
								<ControlLabel>
									Would you like to add the official IYC shirt (available for
									pickup at IYC)? $15
								</ControlLabel>
								<div className="form-input">
									<Field
										name="shirt?"
										component="input"
										type="radio"
										value="Yes"
									/>{' '}
									Yes{' '}
									<Field
										name="shirt?"
										component="input"
										type="radio"
										value="No"
									/>{' '}
									No
								</div>
							</div>
							<PayPalButton
								client={CLIENT}
								env={ENV}
								commit={true}
								currency={'USD'}
								total={total}
								onSuccess={onSuccess}
								onError={onError}
								onCancel={onCancel}
							/>
						</div>
					)}
				</div>
			</form>
		);
	}
}

export default connect(state => ({
	shirtAddon: selector(state, 'shirt?'),
	brunchAddon: selector(state, 'sc brunch?'),
}))(
	reduxForm({
		form: 'YouthSummitRegistration', // <------ same form name
		destroyOnUnmount: false, // <------ preserve form data
		forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	})(Payment)
);
