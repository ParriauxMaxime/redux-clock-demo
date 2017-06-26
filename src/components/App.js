import './App.css'

import React from 'react'
import PropTypes from 'prop-types'

const textify = (date) => (
	date.getHours().toString().padStart(2, '0') + ':' +
	date.getMinutes().toString().padStart(2, '0') + ':' +
	date.getSeconds().toString().padStart(2, '0') + ':' +
	date.getMilliseconds().toString().padStart(3, '0')
);

const AppComponent = ({date, color, changeColor, update}) => {
	setInterval(update, 1);

	return (
		<div className="horloge">
			<code onClick={ changeColor } style={{ color, cursor: "pointer" }}>{textify(date)}</code>
		</div>
	)
};

AppComponent.propTypes = {
	time: PropTypes.string,
};

/*-------------------------------*/

import { connect } from 'react-redux'
import { tick, changeColor } from '../actions/Tick'

const mapStateToProps = ({timeReducers}, ownProps) => {
	return {
		date: timeReducers.date,
		color: timeReducers.color
	}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	update: () => dispatch(tick()),
	changeColor: () => dispatch(changeColor())
});

const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppComponent);

export default App
