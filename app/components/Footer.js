import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Footer = ({ children }) => (
    <div className="footerContainer">
        <div className="container-fluid">
            <span>All rights reserved by Accenture@2016 {children}</span>
            <Link to="/">Home</Link>
        </div>
    </div>
);

Footer.propTypes = {
    children: PropTypes.object
};

export default Footer;
