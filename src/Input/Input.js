import React from 'react'
import PropTypes from 'prop-types'

const Input = props => {
    return (
        <div>
            <p>Input text here, min 5  max 30</p><br/>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}


export default Input;
