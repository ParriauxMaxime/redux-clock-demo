import './App.css'

import React from 'react'
import PropTypes from 'prop-types'

const textify = (date) => (
    date.getHours().toString().padStart(2, '0') + ':' +
    date.getMinutes().toString().padStart(2, '0') + ':' +
    date.getSeconds().toString().padStart(2, '0') + ':' +
    date.getMilliseconds().toString().padStart(3, '0')
)

const AppComponent = ({date, update}) => {
    setInterval(update, 1);

    return (
        <div className="horloge">
            <code>{textify(date)}</code>
        </div>
    )

}

AppComponent.propTypes = {
    time: PropTypes.string,
}

/*-------------------------------*/

import { connect } from 'react-redux'
import { tick } from '../actions/Tick'

const mapStateToProps = ({timeReducers}, ownProps) => {
    return {
        date: timeReducers.date
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    update: () => dispatch(tick())
})

const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppComponent)

export default App
