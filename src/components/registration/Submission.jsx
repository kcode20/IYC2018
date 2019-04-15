import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Grid, Col, ControlLabel, Button } from 'react-bootstrap';

const selector = formValueSelector('YouthSummitRegistration');

const Submission = ({ handleSubmit, handleBack }) => {
	return <form onSubmit={handleSubmit} />;
};

export default connect(state => ({
	transportation: selector(state, 'transportation'),
}))(
	reduxForm({
		form: 'YouthSummitRegistration', // <------ same form name
		destroyOnUnmount: false, // <------ preserve form data
		forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	})(Submission)
);
