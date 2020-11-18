import React from 'react';
import { Link } from 'react-router-dom';

// --------------------NAVBAR OF ALL PAGES-------------

const Navbar = () => {
    return (
        <div style={{ display: "flex", backgroundColor: "#EEF5F8", width: "100%" }}>
            <img src="https://i.ibb.co/cTgb0Pq/logo.png" alt="" />
            <ul style={{ display: "flex", padding: "3px", marginLeft: "10px", listStyleType: "none" }}>
                <b><li style={{ marginLeft: "10px" }}>Product</li> </b>
                <b><li style={{ marginLeft: "10px" }}>Pricing</li></b>
                <b><li style={{ marginLeft: "10px" }}>Solutions</li></b>
                <b><li style={{ marginLeft: "10px" }}>Customers</li></b>
                <b><li style={{ marginLeft: "10px" }}>Resources</li></b>
                <b><Link to="/login"><li style={{ marginLeft: "10px" }}>Login</li></Link></b>
                <b><Link to="/message"> <li style={{ marginLeft: "10px" }}>Message</li>  </Link>   </b>
                <b><Link to="/homePage"> <li style={{ marginLeft: "10px" }}>Home</li>  </Link>   </b>
            </ul>
        </div>
    );
};

export default Navbar;