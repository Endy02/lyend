import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="flex-row-between gutter">
                    <p className="small-text bold-text red-text">&#169;   Fujyn. 2021</p>
                    <img src={"/front/assets/images/fujyn.svg"} className="img-x-small" />
                </div>
            </footer>
        </>
    )
}

export default Footer
