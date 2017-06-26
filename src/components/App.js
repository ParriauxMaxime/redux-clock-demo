import './App.css'

import React from 'react'
import PropTypes from 'prop-types'

const textify = (date) => (
    date.getHours().toString().padStart(2, '0') + ':' +
    date.getMinutes().toString().padStart(2, '0') + ':' +
    date.getSeconds().toString().padStart(2, '0') + ':' +
    date.getMilliseconds().toString().padStart(3, '0')
)

const AppComponent = ({date, update, changeColor, color}) => {
    setInterval(update, 200);

    return (
        <div className="horloge">
            <code style={{color, userSelect: 'none'}} onClick={changeColor}>{textify(date)}</code>
        </div>
    )

}

AppComponent.propTypes = {
}

/*-------------------------------*/

import { connect } from 'react-redux'
import { tick, changeColor } from '../actions/Tick'

const mapStateToProps = ({timeReducers}, ownProps) => {
    return {
        date: timeReducers.date,
        color: timeReducers.color
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    update: () => dispatch(tick()),
    changeColor: () => dispatch(changeColor())
})

const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppComponent)

export default App
