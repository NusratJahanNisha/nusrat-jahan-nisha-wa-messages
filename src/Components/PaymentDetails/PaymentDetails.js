import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';


// ------------PAYMENT DETAILS OF HOME PAGE---------


const PaymentDetails = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),

        },
    }));
    const classes = useStyles();

    return (

        <div style={{ color: "white", margin: "50px" }}>
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} style={{ padding: "50px" }}>
                        <Paper className={classes.paper} style={{ background: "#2C156C", color: "white" }}>
                            <p><small style={{ color: "#DD7846" }}>Quote-to-Cash Automation</small> </p>
                            <h3>Powers Sales and Marketing CRM</h3>
                            <img style={{ width: "100%" }} src="https://i.ibb.co/Sd66dn9/blue-logo.png" alt="" />
                            <p style={{ color: "#C3BDD5" }}>Handle quotes, approvals, acceptance, and collections seamlessly from within the CRM.</p>
                            <Button style={{ marginLeft: "8px", backgroundColor: "white" }} variant="outlined" >
                                Learn more
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ padding: "50px" }}>
                        <Paper className={classes.paper} style={{ background: "#2C156C", color: "white" }}>
                            <p><small style={{ color: "#DD7846" }}>Offer More Payment Methods</small> </p>
                            <h3>25+ Payment Gateways</h3>
                            <img style={{ width: "100%" }} src="https://i.ibb.co/gJrttzq/blue-logo-right.png" alt="" />
                            <p style={{ color: "#C3BDD5" }}>Accept payments across a wide array of gateways, geographies, and currencies.</p>
                            <Button style={{ marginLeft: "8px", backgroundColor: "white" }} variant="outlined" >
                                Learn more
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} style={{ padding: "50px" }}>
                        <Paper className={classes.paper} style={{ background: "#2C156C", color: "white" }}>
                            <p><small style={{ color: "#DD7846" }}>Streamline Finance Operations</small> </p>
                            <h3>Syncs with Accounting Software</h3>
                            <img style={{ width: "100%" }} src="https://i.ibb.co/D5kq31n/blue-logo-down.png" alt="" />
                            <p style={{ color: "#C3BDD5" }}>Reconcile books in seconds, handle compliance, and recognize revenue painlessly.</p>
                            <Button style={{ marginLeft: "8px", backgroundColor: "white" }} variant="outlined" >
                                Learn more
                             </Button>
                        </Paper>
                    </Grid>
                </Grid>
                <div style={{ marginTop: "100px", height: "600px" }}>
                    <small style={{ fontSize: "22px", marginLeft: '100px' }}>Talk to us today about
                    your revenue workflow
                    </small>
                    <Button style={{ marginLeft: "8px", backgroundColor: "#531ABE" }} variant="outlined" >
                        Schedule a Demo
                    </Button>
                    <h1 style={{ fontSize: "32px", textAlign: "center", paddingTop: "170px" }}>Great Products Deserve Hyper Growth. <br />
                    Chargebee Makes it Easy.</h1>
                </div>
            </Container>
        </div>
    );
};

export default PaymentDetails;