import React from 'react';
import PaymentDetails from '../PaymentDetails/PaymentDetails';


// --------------PAYMENT SECTION OF HOME PAGE--------


const PaymentSection = () => {

    return (
        <div style={{ background: "#2C156C" }}>
            <div style={{ color: "white", textAlign: "center" }}>
                <h1>Works With Your</h1>
                <h1>Revenue Management Stack</h1>
                <p style={{ color: "grey" }}>Managing sales, payments, customer experience or your books: <br />
                if it affects your revenue cycle, Chargebee works with it.</p>
                <img style={{ width: "100%" }} src="https://i.ibb.co/30fpxJn/big-image.png" alt="" />
            </div>
            <PaymentDetails></PaymentDetails>
        </div>
    );
};

export default PaymentSection;