// @flow
import React from 'react';
import { paypalSandboxKey, paypalProductionKey } from '../../../secrets';

import PayPalButton from './PayPalButton';

const CLIENT = {
	sandbox: paypalSandboxKey,
	production: paypalProductionKey,
};

//remember to turn to true when deploying
const ENV = 'sandbox';
const REGISTRATION_PRICE = 30.0;

const Payment = () => {
	const onSuccess = payment => console.log('Successful payment!', payment);
	const onError = error =>
		console.log('Erroneous payment OR failed to load script!', error);
	const onCancel = data => console.log('Cancelled payment!', data);

	return (
		<div>
			blah, Blah, BLAH!! Just cough up the money! :
			<PayPalButton
				client={CLIENT}
				env={ENV}
				commit={true}
				currency={'USD'}
				total={REGISTRATION_PRICE}
				onSuccess={onSuccess}
				onError={onError}
				onCancel={onCancel}
			/>
		</div>
	);
};

export default Payment;
