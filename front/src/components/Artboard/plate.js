import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class plate extends Component {
    static propTypes = {

    }

    render() {
        const {colors} = this.props
        return (
            <div>
                {console.log(colors)}
            </div>
        )
    }
}

export default plate
