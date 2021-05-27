import React from 'react'

export class ColorList extends React.Component{
    render(){
        const {object} = this.props
        return (
            <div className="flex-col-between full-gutter">
                {object ? object.colors.map(color => (
                    <div key={color.id} className="flex-row-around">
                        <div className="circle" style={{backgroundColor: color.hex}}></div>
                        <p className="medium-text bold-text black-text pad-l-xl">{color.hex}</p>
                    </div>
                )): null}   
            </div>
        )
    }
}

export default ColorList
