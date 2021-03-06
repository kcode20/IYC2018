// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Registration from './components/Registration';
import Checklist from './components/Checklist';
import Gallery from './components/Gallery';

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
						<Route path="/register" component={Registration} />
						<Route path="/checklist" component={Checklist} />
						<Route path="/gallery" component={Gallery} />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
