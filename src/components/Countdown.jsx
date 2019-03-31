import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import '../assets/styles/Countdown.css';

/* Registration Form for the Youth Leaders Summit 2018 
Todo: Find default for the branchname
*/

export default class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.getTimeRemaining = this.getTimeRemaining.bind(this);
		this.initializeClock = this.initializeClock.bind(this);
		this.updateClock = this.updateClock.bind(this);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	}

	getTimeRemaining() {
		const { endtime } = this.props;
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	componentWillMount() {
		//var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
		this.initializeClock();
	}

	updateClock(timeinterval) {
		var t = this.getTimeRemaining();

		this.setState({ days: t.days });
		this.setState({ hours: ('0' + t.hours).slice(-2) });
		this.setState({ minutes: ('0' + t.minutes).slice(-2) });
		this.setState({ seconds: ('0' + t.seconds).slice(-2) });

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	initializeClock() {
		var timeinterval = setInterval(this.updateClock, 1000);
		this.updateClock(timeinterval);
	}

	render() {
		return (
			<div className="clockdiv">
				<div>
					<span className="days">{this.state.days}</span>
					<div className="smalltext">Days</div>
				</div>
				<div>
					<span className="hours">{this.state.hours}</span>
					<div className="smalltext">Hours</div>
				</div>
				<div>
					<span className="minutes">{this.state.minutes}</span>
					<div className="smalltext">Minutes</div>
				</div>
				<div>
					<span className="seconds">{this.state.seconds}</span>
					<div className="smalltext">Seconds</div>
				</div>
			</div>
		);
	}
}
