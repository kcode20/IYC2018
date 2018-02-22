// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Home from './components/Home';
import Navigation from './components/Navigation';

type Props = {};
type State = {};

class App extends Component<Props, State> {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Navigation />
						<Route exact path="/" component={Home} />
						<Route path="/about" component={Register} />
					</div>
				</Router>
			</Provider>
		);
	}
}

const Register = () => (
	<div>
		<h2>Register</h2>
	</div>
);

export default App;
