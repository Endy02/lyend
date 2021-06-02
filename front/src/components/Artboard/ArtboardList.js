import React from 'react'
import Button from '../Button';
import Plate from './plate';
import Pagination from './Pagination'

export class ArtboardList extends React.Component {
    constructor(){
        super();
        this.state = {
            selected: null,
            searchSet: "",
            currentPage: 1,
            artboardsPerPage: 15
        }
    }

    handleSelect = (artboard) => {
        this.props.parentCallback(artboard)
        const wrapper = document.getElementById("artboard-"+artboard.id)
    }

    handleCallback = (childData) => {
        this.setState({currentPage: childData})
    }
    

    render(){
        const {list} = this.props;
        const {object} = this.props;
        const lastArtboardIndex = this.state.currentPage * this.state.artboardsPerPage;
        const firstArtboardIndex = lastArtboardIndex - this.state.artboardsPerPage;
        const currentArtboards = list.slice(firstArtboardIndex, lastArtboardIndex);

        return (
            <div className="flex-col-between full-width-gutter">
                <div className="flex-row-center">
                    <input type="text" className="search-bar" placeholder="Search an artoboard ..." onChange={(event) => {
                        this.setState({searchSet: event.target.value})
                    }} />
                </div>
                <div className="grid-container-list">
                    {currentArtboards.filter((val) => {

                        if (this.state.searchSet == ""){
                            return val
                        }else if(val.name.toLowerCase().includes(this.state.searchSet.toLowerCase())){
                            return val
                        }
                        
                    }).map(artboard => (
                        <div key={artboard.id} className={object && this.props.object.id == artboard.id ? 'flex-col-center rounded bordered': 'flex-col-center rounded'} id={"artboard-"+artboard.id} onClick={() => this.handleSelect(artboard)}>
                            <Plate colors={artboard.colors} size="plate"/>
                            <p className="small-text bold-text black-text pad-t-s">{artboard.name}</p>
                        </div>
                    ))}
                </div>
                <div className="flex-row-center">
                    <Pagination current={this.state.currentPage} callback={this.handleCallback} artboardsPerPage={this.state.artboardsPerPage} totalArtboards={list.length} />
                </div>
            </div>
        )
    }
}

export default ArtboardList;
