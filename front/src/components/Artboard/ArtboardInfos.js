import React from 'react'
import Plate from './plate'

export class ArtboardInfos extends React.Component{
    render(){
        const {object} = this.props  
        return (
            <>
                {object ? (
                    <div className="flex-col-around full-gutter">
                        <div className="flex-col-center">
                            <Plate colors={object.colors} size="big-plate"/>
                            <p className="medium-text bold-text black-text pad-t-m">{object.name}</p>
                        </div>
                        <p className="tag tag-sand">{object.category.title}</p>
                        <p className="medium-text black-text">
                        {new Intl.DateTimeFormat("fr", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: 'numeric'
                        }).format(new Date(object.created_at))}    
                        </p>
                    </div>
                ): null}  
            </>
        )
    }
}

export default ArtboardInfos
