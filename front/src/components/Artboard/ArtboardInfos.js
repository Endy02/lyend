import React from 'react'

export class ArtboardInfos extends React.Component{
    render(){
        const {object} = this.props
    
        return (
            <>
                {object ? (
                    <div>
                        <p>{object.name}</p>
                        <p>{object.category.title}</p>
                        <p>{object.created_at}</p>
                    </div>
                ): null}  
            </>
        )
    }
}

export default ArtboardInfos
