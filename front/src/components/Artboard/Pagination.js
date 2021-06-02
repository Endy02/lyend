import React, { Component } from 'react'

export class Pagination extends Component {
    render() {
        const {artboardsPerPage} = this.props;
        const {totalArtboards} = this.props;
        const {current} = this.props
        const pageNumber = [];

        for (let i = 1; i <= Math.ceil(totalArtboards / artboardsPerPage); i++) {
            pageNumber.push(i)
            
        }

        return (
            <nav className="paginaton-wrapper">
                <i className="fas fa-chevron-left fa-lg red-text"></i>
                <ul className="page-list">  
                    {pageNumber.map(number => (
                        <li key={number} className="page-item">
                            <a href="#" onClick={() => this.props.callback(number)} className={current == number ? "page-link page-active" : "page-link"}>{number}</a>
                        </li>
                    ))}
                </ul>
                <i className="fas fa-chevron-right fa-lg red-text"></i>
            </nav>
        )
    }
}

export default Pagination
