import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ fetchWeather }, dispatch);
};

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			term: ''
		});
	}

	onInputChange =(e) => {
		this.setState({ term: e.target.value });
	}

	onFormSubmit = (e) => {
		e.preventDefault();

		// We need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecast in your favourite cities."
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		);
	}
}
export default connect(null, mapDispatchToProps)(SearchBar);
