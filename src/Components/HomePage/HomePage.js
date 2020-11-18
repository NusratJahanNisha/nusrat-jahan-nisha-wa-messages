import { Container } from '@material-ui/core';
import React from 'react';
import Animation from '../Animation/Animation';
import Banner from '../Banner/Banner';
import BillingSection from '../BillingSection/BillingSection';
import Footer from '../Footer/Footer';
import TabPanel from '../TabPanel/TabPanel';
import ManagementSection from '../ManagementSection/ManagementSection';
import Navbar from '../Navbar/Navbar';
import OperationSection from '../OperationSection/OperationSection';
import PaymentSection from '../PaymentSection/PaymentSection';


// ----------------HOME PAGE-----------

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Container maxWidth="md">
                <Animation></Animation>
                <BillingSection></BillingSection>
                <ManagementSection></ManagementSection>
                <OperationSection></OperationSection>
            </Container>
            <PaymentSection></PaymentSection>
            <Container>
                <TabPanel></TabPanel>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default HomePage;