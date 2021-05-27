import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getArtboards } from '../actions/artboards'
import ArtboardList from '../components/Artboard/ArtboardList'
import ArtboardInfos from '../components/Artboard/ArtboardInfos'
import ColorList from '../components/Artboard/ColorList'

export class Artboards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    handleCallback = (childData) => {
        this.setState({data: childData})
    }

    static propTypes = {
        artboards: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getArtboards();
    }

    render(){
        const {data} = this.state
        
        return (
            <>
                <div className="container-full">
                    <div className="grid-container">
                        <div className="flex-col-center">
                            <ArtboardInfos object={data} />
                        </div>
                        <div className="flex-col-center">
                            <ArtboardList parentCallback={this.handleCallback} list={this.props.artboards} object={data}/>
                        </div>
                        <div className="flex-col-center">
                            <ColorList object={data} />
                        </div>                    
                    </div>
                </div>
            </>
        )
    }
}

const mapStatetoProps = state => ({
    artboards: state.artboardsReducer.artboards
});

export default connect(mapStatetoProps, {getArtboards})(Artboards);
