import React from 'react'
import ArtboardList from '../components/Artboard/ArtboardList'
import ArtboardInfos from '../components/Artboard/ArtboardInfos'
import ColorList from '../components/Artboard/ColorList'

const Artboards = () => {
    return (
        <>
            <div className="container-full">
                <div className="grid-container">
                    <div className="flex-col-center">
                        <ArtboardInfos />
                    </div>
                    <div className="flex-col-center">
                        <ArtboardList />
                    </div>
                    <div className="flex-col-center">
                        <ColorList />
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Artboards
