import React from 'react'
import Button from '../Button';
import Plate from './plate';

export class ArtboardList extends React.Component {
    constructor(){
        super();
        this.state = {
            selected: null
        }
    }

    handleSelect = (artboard) => {
        this.props.parentCallback(artboard)
        const wrapper = document.getElementById("artboard-"+artboard.id)
    }
    

    render(){
        const {list} = this.props
        const {object} = this.props

        return (
            <>
                <div className="flex-col-center">
                    {list.map(artboard => (
                        <div key={artboard.id} className={object && this.props.object.id == artboard.id ? 'rounded bordered': 'rounded'} id={"artboard-"+artboard.id} onClick={() => this.handleSelect(artboard)}>
                            <Plate colors={artboard.colors} />
                            <p className="small-text bold-text black-text">{artboard.name}</p>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default ArtboardList;
