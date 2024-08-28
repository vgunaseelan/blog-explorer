import React from "react";

const Footer = () => {
    return (
        <footer className="footer py-3 bg-light fixed-bottom">
            <div className="container">
                <span className="text-muted">&copy; {(new Date()).getFullYear()} Blog Explorer</span>
            </div>
        </footer>
    )
}

export default Footer;