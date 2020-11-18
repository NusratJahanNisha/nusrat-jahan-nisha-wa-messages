import { Button } from '@material-ui/core';
import React from 'react';


// ------------------BANNER OF HOME PAGE---------------

const Banner = () => {
    return (
        <div style={{ backgroundImage: "linear-gradient(#EEF5F8 , #FFFFFF)" }}>
            <div style={{ textAlign: "center", height: "70vh", paddingTop: "100px" }}>
                <h1 style={{ color: "#650AD2", fontSize: "45px" }}>Subscription Billing & Revenue Operations</h1>
                <h1 style={{ fontSize: "45px", marginBottom: "10px" }}>for Fast-growth B2B SaaS</h1>
                <p>Get the operational sophistication to achieve, sustain, <br />
                    and scale recurring revenue.</p>
                <Button variant="contained" style={{ backgroundColor: "#480EB2" }}>
                    Schedule a demo
                </Button>
                <Button style={{ marginLeft: "8px" }} variant="outlined" color="primary">
                    Sign up for free
                </Button>
            </div>
        </div>
    );
};

export default Banner;