import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class plate extends Component {
    static propTypes = {

    }

    render() {
        const {colors} = this.props
        const {size} = this.props
        return (
            <div className="flex-row-center">
                <div className="plate-wrapper">
                    {colors.map(color => (
                    <div key={color.id} className={size} style={{backgroundColor: color.hex}}>
                        
                    </div> 
                    ))}
                </div>
            </div>
        )
    }
}

export default plate
